import * as THREE from "three";

interface Heart {
  sprite: THREE.Sprite;
  vel: THREE.Vector3;
  life: number;
  maxLife: number;
}

export class HeartBurstSystem {
  private hearts: Heart[] = [];
  private scene: THREE.Scene;
  private texture: THREE.Texture;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.texture = makeHeartTexture();
  }

  burst(origin: THREE.Vector3, count = 10) {
    for (let i = 0; i < count; i++) {
      const mat = new THREE.SpriteMaterial({
        map: this.texture, transparent: true, depthWrite: false,
      });
      const sp = new THREE.Sprite(mat);
      sp.scale.set(0.35, 0.35, 0.35);
      sp.position.copy(origin);
      sp.position.x += (Math.random() - 0.5) * 0.4;
      sp.position.z += (Math.random() - 0.5) * 0.4;
      this.scene.add(sp);
      this.hearts.push({
        sprite: sp,
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.4,
          0.8 + Math.random() * 0.5,
          (Math.random() - 0.5) * 0.4,
        ),
        life: 0,
        maxLife: 1.5 + Math.random() * 0.5,
      });
    }
  }

  update(dt: number) {
    for (let i = this.hearts.length - 1; i >= 0; i--) {
      const h = this.hearts[i];
      h.life += dt;
      h.sprite.position.addScaledVector(h.vel, dt);
      h.vel.y -= dt * 0.3;
      const t = h.life / h.maxLife;
      (h.sprite.material as THREE.SpriteMaterial).opacity = Math.max(0, 1 - t);
      h.sprite.scale.setScalar(0.35 * (1 + t * 0.4));
      if (h.life >= h.maxLife) {
        this.scene.remove(h.sprite);
        h.sprite.material.dispose();
        this.hearts.splice(i, 1);
      }
    }
  }
}

function makeHeartTexture(): THREE.Texture {
  const c = document.createElement("canvas");
  c.width = 128; c.height = 128;
  const ctx = c.getContext("2d")!;
  ctx.font = "100px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("❤️", 64, 68);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export interface InteractionTargets {
  leftZone: THREE.Mesh;
  rightZone: THREE.Mesh;
  leftBurstOrigin: THREE.Vector3;
  rightBurstOrigin: THREE.Vector3;
  paperPlane?: { mesh: THREE.Mesh; isIdle: () => boolean; dismiss: () => void };
}

export function setupRaycaster(
  renderer: THREE.WebGLRenderer,
  camera: THREE.Camera,
  targets: InteractionTargets,
  hearts: HeartBurstSystem,
  wasDragging: () => boolean = () => false,
) {
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  const handle = (clientX: number, clientY: number) => {
    if (wasDragging()) return;
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);

    // Airplane takes priority when idle
    if (targets.paperPlane && targets.paperPlane.isIdle() && targets.paperPlane.mesh.visible) {
      const planeHits = raycaster.intersectObject(targets.paperPlane.mesh, false);
      if (planeHits.length > 0) {
        targets.paperPlane.dismiss();
        return;
      }
    }

    const hits = raycaster.intersectObjects([targets.leftZone, targets.rightZone], false);
    if (hits.length === 0) return;
    const id = hits[0].object.userData.pickId as "gio" | "almeira";
    const origin = id === "gio" ? targets.leftBurstOrigin : targets.rightBurstOrigin;
    hearts.burst(origin, 12);
    try {
      window.Android?.onDeskInteraction?.(id);
    } catch {}
  };

  const onClick = (e: MouseEvent) => handle(e.clientX, e.clientY);
  renderer.domElement.addEventListener("click", onClick);

  return () => {
    renderer.domElement.removeEventListener("click", onClick);
  };
}
