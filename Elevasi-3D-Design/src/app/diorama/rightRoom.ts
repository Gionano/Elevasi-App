import * as THREE from "three";
import type { RightRoomRefs } from "./types";

const PEACH = 0xffb487;
const WARM = 0xffa36b;
const WOOD_NAT = 0xc39066;
const WOOD_DARK = 0x8b6440;
const CREAM = 0xfff1de;

export function buildRightRoom(scene: THREE.Scene): RightRoomRefs {
  const g = new THREE.Group();
  g.name = "rightRoom";
  g.position.set(3, 0.15, -3);

  // ---- Thick wooden desk with drawers ----
  const deskMat = new THREE.MeshStandardMaterial({ color: WOOD_NAT, roughness: 0.75 });
  const drawerMat = new THREE.MeshStandardMaterial({ color: WOOD_DARK, roughness: 0.7 });
  const top = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.18, 1.3), deskMat);
  top.position.set(0.6, 1.25, -1.8);
  top.castShadow = top.receiveShadow = true;
  g.add(top);
  // drawers cabinet
  const cab = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.1, 1.2), drawerMat);
  cab.position.set(1.65, 0.6, -2.0);
  cab.castShadow = cab.receiveShadow = true;
  g.add(cab);
  for (let i = 0; i < 3; i++) {
    const d = new THREE.Mesh(
      new THREE.BoxGeometry(0.9, 0.3, 0.02),
      new THREE.MeshStandardMaterial({ color: 0xa37355, roughness: 0.6 }),
    );
    d.position.set(1.65, 0.15 + i * 0.33, -1.39);
    g.add(d);
    const knob = new THREE.Mesh(
      new THREE.SphereGeometry(0.04, 10, 8),
      new THREE.MeshStandardMaterial({ color: 0x5a3a22 }),
    );
    knob.position.set(1.65, 0.15 + i * 0.33, -1.35);
    g.add(knob);
  }
  // legs (left side)
  const legMat = new THREE.MeshStandardMaterial({ color: WOOD_DARK });
  [[-0.9, 0.6, -2.4], [-0.9, 0.6, -1.5]].forEach(p => {
    const l = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.2, 0.12), legMat);
    l.position.set(p[0], p[1], p[2]);
    l.castShadow = true;
    g.add(l);
  });

  // ---- Armchair (thick cozy) ----
  const chairMat = new THREE.MeshStandardMaterial({ color: 0xf5b8c5, roughness: 0.95 });
  const chairBase = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.8, 1.4), chairMat);
  chairBase.position.set(-0.5, 0.5, -0.3);
  chairBase.castShadow = chairBase.receiveShadow = true;
  g.add(chairBase);
  const cushion = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.35, 1.2), chairMat);
  cushion.position.set(-0.5, 1.0, -0.3);
  cushion.castShadow = true;
  g.add(cushion);
  const backRest = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.4, 0.4), chairMat);
  backRest.position.set(-0.5, 1.3, 0.3);
  backRest.castShadow = true;
  g.add(backRest);
  const armL = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.7, 1.4), chairMat);
  armL.position.set(-1.3, 1.0, -0.3);
  armL.castShadow = true;
  g.add(armL);
  const armR = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.7, 1.4), chairMat);
  armR.position.set(0.3, 1.0, -0.3);
  armR.castShadow = true;
  g.add(armR);
  // throw blanket (draped plane)
  const blanket = new THREE.Mesh(
    new THREE.PlaneGeometry(1.2, 1.2, 6, 6),
    new THREE.MeshStandardMaterial({ color: 0xf7d6a8, roughness: 1, side: THREE.DoubleSide }),
  );
  const pos = blanket.geometry.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    pos.setZ(i, Math.sin(y * 3) * 0.05);
  }
  blanket.position.set(-0.5, 1.6, 0.55);
  blanket.rotation.x = 0.3;
  blanket.castShadow = true;
  g.add(blanket);

  // ---- Desk lamp (capsule + PointLight) ----
  const lampBase = new THREE.Mesh(
    new THREE.CylinderGeometry(0.15, 0.2, 0.05, 16),
    new THREE.MeshStandardMaterial({ color: 0x8b6440 }),
  );
  lampBase.position.set(-0.5, 1.36, -2.3);
  g.add(lampBase);
  const lampPost = new THREE.Mesh(
    new THREE.CylinderGeometry(0.03, 0.03, 0.6, 10),
    new THREE.MeshStandardMaterial({ color: 0x8b6440 }),
  );
  lampPost.position.set(-0.5, 1.66, -2.3);
  g.add(lampPost);
  const lampMat = new THREE.MeshStandardMaterial({
    color: 0xffd9a8, emissive: 0xff9a55, emissiveIntensity: 0.9, roughness: 0.3,
  });
  const lampShade = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.3, 6, 12), lampMat);
  lampShade.position.set(-0.5, 2.05, -2.3);
  g.add(lampShade);
  const lampLight = new THREE.PointLight(0xffa458, 0.8, 3.5, 2);
  lampLight.position.set(-0.5, 1.9, -2.1);
  lampLight.castShadow = true;
  g.add(lampLight);

  // ---- Books stack ----
  const bookColors = [0xb56b46, 0xe0a063, 0xf7d6a8, 0xd07a52];
  for (let i = 0; i < 4; i++) {
    const b = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.08, 0.35),
      new THREE.MeshStandardMaterial({ color: bookColors[i], roughness: 0.8 }),
    );
    b.position.set(0.9, 1.38 + i * 0.085, -2.1);
    b.rotation.y = (Math.random() - 0.5) * 0.1;
    b.castShadow = true;
    g.add(b);
  }

  // ---- Plant in pot ----
  const pot = new THREE.Mesh(
    new THREE.CylinderGeometry(0.15, 0.12, 0.28, 16),
    new THREE.MeshStandardMaterial({ color: 0xcf7a52, roughness: 0.7 }),
  );
  pot.position.set(1.35, 1.45, -2.25);
  pot.castShadow = true;
  g.add(pot);
  for (let i = 0; i < 10; i++) {
    const leaf = new THREE.Mesh(
      new THREE.SphereGeometry(0.09 + Math.random() * 0.06, 8, 6),
      new THREE.MeshStandardMaterial({ color: 0x6db26b + Math.floor(Math.random() * 0x222), roughness: 0.9 }),
    );
    leaf.position.set(
      1.35 + (Math.random() - 0.5) * 0.2,
      1.65 + Math.random() * 0.2,
      -2.25 + (Math.random() - 0.5) * 0.2,
    );
    leaf.castShadow = true;
    g.add(leaf);
  }

  // ---- Open notebook + coffee cup ----
  const notebook = new THREE.Mesh(
    new THREE.BoxGeometry(0.7, 0.04, 0.5),
    new THREE.MeshStandardMaterial({ color: CREAM, roughness: 0.9 }),
  );
  notebook.position.set(0.1, 1.36, -1.75);
  notebook.rotation.y = -0.2;
  g.add(notebook);
  // spine
  const spine = new THREE.Mesh(
    new THREE.BoxGeometry(0.04, 0.05, 0.5),
    new THREE.MeshStandardMaterial({ color: 0xb58662 }),
  );
  spine.position.set(0.1, 1.39, -1.75);
  spine.rotation.y = -0.2;
  g.add(spine);

  const cup = new THREE.Mesh(
    new THREE.CylinderGeometry(0.11, 0.09, 0.18, 20),
    new THREE.MeshStandardMaterial({ color: CREAM, roughness: 0.5 }),
  );
  cup.position.set(-0.2, 1.44, -1.7);
  cup.castShadow = true;
  g.add(cup);
  const handle = new THREE.Mesh(
    new THREE.TorusGeometry(0.05, 0.015, 8, 16),
    new THREE.MeshStandardMaterial({ color: CREAM }),
  );
  handle.position.set(-0.08, 1.44, -1.7);
  handle.rotation.y = Math.PI / 2;
  g.add(handle);

  // Steam (3 wavy transparent shapes)
  const steam: THREE.Mesh[] = [];
  for (let i = 0; i < 3; i++) {
    const s = new THREE.Mesh(
      new THREE.PlaneGeometry(0.12, 0.35, 1, 6),
      new THREE.MeshStandardMaterial({
        color: 0xffffff, transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false,
      }),
    );
    s.position.set(-0.2 + (i - 1) * 0.05, 1.75 + i * 0.08, -1.7);
    s.userData.base = s.position.clone();
    s.userData.phase = i * 1.1;
    g.add(s);
    steam.push(s);
  }

  // ---- Laptop on desk (above cabinet) ----
  const laptop = new THREE.Group();
  const laptopBase = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.04, 0.55),
    new THREE.MeshStandardMaterial({ color: 0xe8d5c4, roughness: 0.4, metalness: 0.3 }),
  );
  laptopBase.position.y = 0.02;
  laptopBase.castShadow = true;
  laptop.add(laptopBase);
  const laptopKb = new THREE.Mesh(
    new THREE.BoxGeometry(0.68, 0.005, 0.32),
    new THREE.MeshStandardMaterial({ color: 0x3a2a22, roughness: 0.7 }),
  );
  laptopKb.position.set(0, 0.043, 0.05);
  laptop.add(laptopKb);
  const trackpad = new THREE.Mesh(
    new THREE.BoxGeometry(0.26, 0.006, 0.14),
    new THREE.MeshStandardMaterial({ color: 0xd4b99f, roughness: 0.5 }),
  );
  trackpad.position.set(0, 0.044, 0.22);
  laptop.add(trackpad);
  // hinged lid: pivot at back edge (z = -0.275)
  const lidPivot = new THREE.Group();
  lidPivot.position.set(0, 0.04, -0.275);
  const laptopLid = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.03, 0.55),
    new THREE.MeshStandardMaterial({ color: 0xe8d5c4, roughness: 0.4, metalness: 0.3 }),
  );
  laptopLid.position.set(0, 0, 0.275);
  laptopLid.castShadow = true;
  lidPivot.add(laptopLid);
  const laptopScreenMat = new THREE.MeshBasicMaterial({ color: 0xffd7a8 });
  const laptopScreen = new THREE.Mesh(
    new THREE.PlaneGeometry(0.72, 0.48),
    laptopScreenMat,
  );
  laptopScreen.position.set(0, -0.018, 0.275);
  laptopScreen.rotation.x = Math.PI / 2;
  lidPivot.add(laptopScreen);
  lidPivot.rotation.x = -1.85;
  laptop.add(lidPivot);
  laptop.position.set(1.65, 1.34, -1.55);
  laptop.rotation.y = 0.1;
  g.add(laptop);

  // ---- Back-wall decor ----
  const WALL_Z = -2.7;

  // Floating shelf with leaning books
  const shelf = new THREE.Mesh(
    new THREE.BoxGeometry(2.0, 0.08, 0.35),
    new THREE.MeshStandardMaterial({ color: 0xfff1de, roughness: 0.7 }),
  );
  shelf.position.set(1.0, 3.35, WALL_Z);
  shelf.castShadow = true;
  g.add(shelf);
  const shelfBookColors = [0xb56b46, 0xe0a063, 0xf7d6a8, 0xd07a52, 0xc08060];
  for (let i = 0; i < 5; i++) {
    const book = new THREE.Mesh(
      new THREE.BoxGeometry(0.15, 0.4 + Math.random() * 0.12, 0.22),
      new THREE.MeshStandardMaterial({ color: shelfBookColors[i], roughness: 0.85 }),
    );
    book.position.set(0.1 + i * 0.18, 3.6, WALL_Z - 0.05);
    book.rotation.z = (Math.random() - 0.5) * 0.15;
    book.castShadow = true;
    g.add(book);
  }

  // String lights draped across the back wall
  const stringLights: THREE.MeshStandardMaterial[] = [];
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.2, 3.9, WALL_Z),
    new THREE.Vector3(0.6, 3.55, WALL_Z),
    new THREE.Vector3(1.4, 3.85, WALL_Z),
    new THREE.Vector3(2.2, 3.5, WALL_Z),
  ]);
  const cable = new THREE.Mesh(
    new THREE.TubeGeometry(curve, 40, 0.015, 6, false),
    new THREE.MeshStandardMaterial({ color: 0x333, roughness: 0.6 }),
  );
  g.add(cable);
  for (let i = 0; i < 14; i++) {
    const t = i / 13;
    const p = curve.getPointAt(t);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xfff2a8, emissive: 0xffd166, emissiveIntensity: 1.4,
    });
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), mat);
    bulb.position.set(p.x, p.y - 0.06, p.z + 0.04);
    g.add(bulb);
    stringLights.push(mat);
  }

  // Boho posters on back wall (facing +Z)
  const posterA = makePoster("desert", [0xf4c99a, 0xe89063, 0x6b4a3a]);
  posterA.position.set(-0.2, 2.6, WALL_Z);
  g.add(posterA);
  const posterB = makePoster("boho", [0xe9c7a0, 0xd08660, 0xf3e0c7]);
  posterB.position.set(1.3, 2.6, WALL_Z);
  g.add(posterB);

  // ---- Cozy floor rug ----
  const rugR = new THREE.Mesh(
    new THREE.BoxGeometry(3.0, 0.02, 2.6),
    new THREE.MeshStandardMaterial({ color: 0xe9c7a0, roughness: 1 }),
  );
  rugR.position.set(-0.2, 0.01, 0.0);
  rugR.receiveShadow = true;
  g.add(rugR);
  const rugRTrim = new THREE.Mesh(
    new THREE.BoxGeometry(2.6, 0.022, 2.2),
    new THREE.MeshStandardMaterial({ color: 0xf7d6a8, roughness: 1 }),
  );
  rugRTrim.position.set(-0.2, 0.012, 0.0);
  g.add(rugRTrim);

  // ---- Side table with candles ----
  const sideTable = new THREE.Mesh(
    new THREE.CylinderGeometry(0.35, 0.35, 0.05, 20),
    new THREE.MeshStandardMaterial({ color: WOOD_DARK, roughness: 0.7 }),
  );
  sideTable.position.set(-1.9, 0.9, -0.3);
  sideTable.castShadow = true;
  g.add(sideTable);
  const sideLeg = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.04, 0.9, 10),
    new THREE.MeshStandardMaterial({ color: WOOD_DARK }),
  );
  sideLeg.position.set(-1.9, 0.45, -0.3);
  g.add(sideLeg);
  [[-2.05, -0.35, 0.12], [-1.85, -0.25, 0.15], [-1.75, -0.4, 0.1]].forEach(p => {
    const candle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, p[2] * 2, 10),
      new THREE.MeshStandardMaterial({ color: CREAM, roughness: 0.8 }),
    );
    candle.position.set(p[0], 0.93 + p[2], p[1]);
    g.add(candle);
    const flame = new THREE.Mesh(
      new THREE.ConeGeometry(0.02, 0.06, 8),
      new THREE.MeshStandardMaterial({ color: 0xffd166, emissive: 0xffa34a, emissiveIntensity: 1.5 }),
    );
    flame.position.set(p[0], 0.93 + p[2] * 2 + 0.04, p[1]);
    g.add(flame);
  });

  // ---- Floor lamp in corner ----
  const flBase = new THREE.Mesh(
    new THREE.CylinderGeometry(0.25, 0.3, 0.08, 18),
    new THREE.MeshStandardMaterial({ color: WOOD_DARK }),
  );
  flBase.position.set(-2.1, 0.04, -1.8);
  g.add(flBase);
  const flPost = new THREE.Mesh(
    new THREE.CylinderGeometry(0.04, 0.04, 2.8, 10),
    new THREE.MeshStandardMaterial({ color: WOOD_DARK }),
  );
  flPost.position.set(-2.1, 1.4, -1.8);
  g.add(flPost);
  const flShade = new THREE.Mesh(
    new THREE.CylinderGeometry(0.35, 0.45, 0.55, 18, 1, true),
    new THREE.MeshStandardMaterial({
      color: 0xfff1de, emissive: 0xffb266, emissiveIntensity: 0.6,
      roughness: 0.8, side: THREE.DoubleSide,
    }),
  );
  flShade.position.set(-2.1, 2.95, -1.8);
  g.add(flShade);
  const floorLampLight = new THREE.PointLight(0xffb266, 0.8, 4, 2);
  floorLampLight.position.set(-2.1, 2.7, -1.8);
  g.add(floorLampLight);
  const floorLampMat = flShade.material as THREE.MeshStandardMaterial;

  // ---- Extra potted plant ----
  const potR2 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.25, 0.2, 0.5, 16),
    new THREE.MeshStandardMaterial({ color: 0xcf7a52, roughness: 0.7 }),
  );
  potR2.position.set(2.1, 0.25, 0.4);
  potR2.castShadow = true;
  g.add(potR2);
  for (let i = 0; i < 12; i++) {
    const leaf = new THREE.Mesh(
      new THREE.SphereGeometry(0.16 + Math.random() * 0.05, 8, 6),
      new THREE.MeshStandardMaterial({ color: 0x6db26b, roughness: 0.9 }),
    );
    leaf.position.set(
      2.1 + (Math.random() - 0.5) * 0.3,
      0.6 + Math.random() * 0.5,
      0.4 + (Math.random() - 0.5) * 0.3,
    );
    g.add(leaf);
  }

  // ---- Magazine stack on floor ----
  [0xd08660, 0xf7d6a8, 0xb56b46].forEach((c, i) => {
    const mag = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.04, 0.35),
      new THREE.MeshStandardMaterial({ color: c, roughness: 0.85 }),
    );
    mag.position.set(-1.6, 0.05 + i * 0.045, 0.9);
    mag.rotation.y = (Math.random() - 0.5) * 0.3;
    g.add(mag);
  });

  // ---- Cushion on armchair ----
  const pillow = new THREE.Mesh(
    new THREE.BoxGeometry(0.55, 0.2, 0.4),
    new THREE.MeshStandardMaterial({ color: 0xf7d6a8, roughness: 1 }),
  );
  pillow.position.set(-1.0, 1.3, -0.5);
  pillow.rotation.y = 0.3;
  pillow.castShadow = true;
  g.add(pillow);

  // ---- Pick zone ----
  const pickZone = new THREE.Mesh(
    new THREE.BoxGeometry(6, 0.05, 6),
    new THREE.MeshBasicMaterial({ visible: false }),
  );
  pickZone.position.set(0, 0.05, 0);
  pickZone.userData.pickId = "almeira";
  g.add(pickZone);

  scene.add(g);

  return {
    group: g,
    lampLight,
    lampMat,
    steam,
    stringLights,
    floorLampLight,
    floorLampMat,
    laptopScreen: laptopScreenMat,
    pickZone,
    deskCenter: new THREE.Vector3(3 + 0.1, 2.4, -3 + -1.8),
  };
}

function makePoster(kind: string, colors: number[]) {
  const gr = new THREE.Group();
  const frame = new THREE.Mesh(
    new THREE.BoxGeometry(1.0, 1.4, 0.05),
    new THREE.MeshStandardMaterial({ color: 0x6b4a3a }),
  );
  gr.add(frame);
  const c = document.createElement("canvas");
  c.width = 256; c.height = 360;
  const ctx = c.getContext("2d")!;
  const g2 = ctx.createLinearGradient(0, 0, 0, 360);
  g2.addColorStop(0, "#" + colors[2].toString(16).padStart(6, "0"));
  g2.addColorStop(0.6, "#" + colors[0].toString(16).padStart(6, "0"));
  g2.addColorStop(1, "#" + colors[1].toString(16).padStart(6, "0"));
  ctx.fillStyle = g2;
  ctx.fillRect(0, 0, 256, 360);
  // desert arches
  ctx.fillStyle = "#" + colors[1].toString(16).padStart(6, "0");
  ctx.beginPath();
  ctx.arc(80, 260, 60, Math.PI, 0);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(170, 280, 80, Math.PI, 0);
  ctx.fill();
  ctx.fillStyle = "rgba(255,230,200,0.6)";
  ctx.beginPath();
  ctx.arc(180, 120, 28, 0, Math.PI * 2);
  ctx.fill();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const art = new THREE.Mesh(
    new THREE.PlaneGeometry(0.88, 1.28),
    new THREE.MeshBasicMaterial({ map: tex }),
  );
  art.position.z = 0.03;
  gr.add(art);
  return gr;
}
