import * as THREE from "three";

type PlaneMode = "hidden" | "flying" | "idle" | "dismissing";

export class PaperAirplane {
  public readonly mesh: THREE.Mesh;
  private scene: THREE.Scene;
  private curve: THREE.CatmullRomCurve3;
  private mode: PlaneMode = "hidden";
  private flightT = 0;
  private flightDuration = 2.6;
  private dismissT = 0;
  private dismissDuration = 0.35;
  private landPos = new THREE.Vector3();
  private idleBaseY = 0;
  private _quatTmp = new THREE.Quaternion();
  private _vTmp = new THREE.Vector3();
  private _up = new THREE.Vector3(0, 1, 0);
  public noteId: string | null = null;
  private dust: DustBurst;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // ---- Procedural low-poly paper airplane ----
    // Dart-shape: nose at +Z, two wings fanning to -Z, center crease keel.
    const geom = new THREE.BufferGeometry();
    const L = 0.55;  // length
    const W = 0.35; // half-wingspan
    const K = 0.08; // keel depth

    // Vertices (low-poly origami dart)
    const verts = new Float32Array([
      // nose
       0,  0,   L,     // 0 nose
      // tail edges
      -W, 0,  -L * 0.9, // 1 left tail
       W, 0,  -L * 0.9, // 2 right tail
      // center tail (slight inset)
       0, 0,  -L * 0.7, // 3 center tail
      // keel apex (below the fold line)
       0, -K, -L * 0.2, // 4 keel
    ]);
    const idx = [
      // top: left wing
      0, 3, 1,
      // top: right wing
      0, 2, 3,
      // keel: left underside
      0, 4, 3,
      // keel: right underside
      0, 3, 4,
      // tail infill (tiny)
      1, 3, 4,
      2, 4, 3,
    ];
    geom.setAttribute("position", new THREE.BufferAttribute(verts, 3));
    geom.setIndex(idx);
    geom.computeVertexNormals();

    const mat = new THREE.MeshStandardMaterial({
      color: 0xfff6f2,
      roughness: 0.85,
      metalness: 0.0,
      side: THREE.DoubleSide,
      flatShading: true,
    });
    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.castShadow = true;
    this.mesh.visible = false;
    this.mesh.userData.pickId = "paperPlane";
    scene.add(this.mesh);

    // Landing spot: near coffee cup on right room (world coords).
    // rightRoom group at (3, 0.15, -3); cup at local (-0.2, 1.44, -1.7) → world (2.8, 1.59, -4.7)
    this.landPos.set(2.55, 1.55, -4.55);
    this.idleBaseY = this.landPos.y;

    // Flight curve (world space)
    this.curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(12, 7.5, -2),   // A: far outside corner window
      new THREE.Vector3(6.2, 4.5, -4),  // B: arc apex near window frame
      this.landPos.clone(),             // C: landing
    ], false, "catmullrom", 0.5);

    this.dust = new DustBurst(scene);
  }

  triggerDrop(noteId: string) {
    if (this.mode === "flying" || this.mode === "dismissing") return;
    this.noteId = noteId;
    this.mesh.userData.noteId = noteId;
    this.flightT = 0;
    this.mesh.scale.setScalar(1);
    this.mesh.visible = true;
    const start = this.curve.getPoint(0);
    this.mesh.position.copy(start);
    this.mode = "flying";
  }

  isIdle() {
    return this.mode === "idle";
  }

  dismiss() {
    if (this.mode !== "idle") return;
    this.mode = "dismissing";
    this.dismissT = 0;
    this.dust.burst(this.mesh.position);
  }

  update(time: number, dt: number) {
    this.dust.update(dt);
    if (this.mode === "hidden") return;

    if (this.mode === "flying") {
      this.flightT += dt;
      const u = Math.min(this.flightT / this.flightDuration, 1);
      // ease-out cubic for a graceful glide
      const eu = 1 - Math.pow(1 - u, 3);
      const p = this.curve.getPoint(eu);
      this.mesh.position.copy(p);

      // face along flight tangent
      const tan = this.curve.getTangent(Math.min(eu + 0.001, 1), this._vTmp).normalize();
      this._quatTmp.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tan);
      this.mesh.quaternion.copy(this._quatTmp);
      // slight banking based on descent
      this.mesh.rotateZ(Math.sin(u * Math.PI) * 0.25);

      if (u >= 1) {
        this.mode = "idle";
        this.mesh.position.copy(this.landPos);
        this.idleBaseY = this.landPos.y;
      }
      return;
    }

    if (this.mode === "idle") {
      // gentle hover + slow yaw
      const y = this.idleBaseY + Math.sin(time * 2.2) * 0.04;
      this.mesh.position.y = y;
      this.mesh.position.x = this.landPos.x;
      this.mesh.position.z = this.landPos.z;
      this.mesh.rotation.set(0, time * 0.4, 0);
      this.mesh.rotation.z = Math.sin(time * 1.3) * 0.08;
      return;
    }

    if (this.mode === "dismissing") {
      this.dismissT += dt;
      const u = Math.min(this.dismissT / this.dismissDuration, 1);
      const s = 1 - u;
      this.mesh.scale.setScalar(Math.max(0.001, s));
      this.mesh.rotation.y += dt * 8;
      if (u >= 1) {
        this.mesh.visible = false;
        this.mesh.scale.setScalar(1);
        this.mode = "hidden";
        const id = this.noteId;
        this.noteId = null;
        if (id && window.Android?.onNoteOpened) {
          try { window.Android.onNoteOpened(id); } catch {}
        }
      }
    }
  }

  dispose() {
    this.scene.remove(this.mesh);
    (this.mesh.geometry as THREE.BufferGeometry).dispose();
    (this.mesh.material as THREE.Material).dispose();
    this.dust.dispose();
  }
}

// ---- Fairy dust particle burst (gold + pink) ----
class DustBurst {
  private scene: THREE.Scene;
  private points: THREE.Points;
  private geom: THREE.BufferGeometry;
  private mat: THREE.PointsMaterial;
  private count = 36;
  private velocities: Float32Array;
  private life: Float32Array;
  private maxLife = 0.9;
  private active = false;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.geom = new THREE.BufferGeometry();
    const positions = new Float32Array(this.count * 3);
    const colors = new Float32Array(this.count * 3);
    this.velocities = new Float32Array(this.count * 3);
    this.life = new Float32Array(this.count);
    for (let i = 0; i < this.count; i++) {
      this.life[i] = 0;
      const gold = i % 2 === 0;
      colors[i * 3 + 0] = gold ? 1.0 : 1.0;
      colors[i * 3 + 1] = gold ? 0.82 : 0.72;
      colors[i * 3 + 2] = gold ? 0.35 : 0.82;
    }
    this.geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    this.geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    this.mat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      sizeAttenuation: true,
    });
    this.points = new THREE.Points(this.geom, this.mat);
    this.points.visible = false;
    scene.add(this.points);
  }

  burst(origin: THREE.Vector3) {
    const pos = this.geom.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < this.count; i++) {
      pos.setXYZ(i, origin.x, origin.y, origin.z);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const speed = 1.2 + Math.random() * 1.4;
      this.velocities[i * 3 + 0] = Math.sin(phi) * Math.cos(theta) * speed;
      this.velocities[i * 3 + 1] = Math.cos(phi) * speed * 0.6 + 0.6;
      this.velocities[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * speed;
      this.life[i] = this.maxLife;
    }
    pos.needsUpdate = true;
    this.points.visible = true;
    this.mat.opacity = 1;
    this.active = true;
  }

  update(dt: number) {
    if (!this.active) return;
    const pos = this.geom.attributes.position as THREE.BufferAttribute;
    let anyAlive = false;
    for (let i = 0; i < this.count; i++) {
      if (this.life[i] <= 0) continue;
      anyAlive = true;
      this.life[i] -= dt;
      this.velocities[i * 3 + 1] -= dt * 2.2; // gravity
      pos.setXYZ(
        i,
        pos.getX(i) + this.velocities[i * 3 + 0] * dt,
        pos.getY(i) + this.velocities[i * 3 + 1] * dt,
        pos.getZ(i) + this.velocities[i * 3 + 2] * dt,
      );
    }
    pos.needsUpdate = true;
    this.mat.opacity = Math.max(0, this.mat.opacity - dt * 1.1);
    if (!anyAlive) {
      this.points.visible = false;
      this.active = false;
    }
  }

  dispose() {
    this.scene.remove(this.points);
    this.geom.dispose();
    this.mat.dispose();
  }
}
