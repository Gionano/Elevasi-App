import * as THREE from "three";
import type { LeftRoomRefs } from "./types";

const PINK = 0xf5b8c5;
const PINK_SOFT = 0xfad5dd;
const IVORY = 0xfff6e6;
const WOOD = 0xd9b98a;

export function buildLeftRoom(scene: THREE.Scene): LeftRoomRefs {
  const g = new THREE.Group();
  g.name = "leftRoom";
  g.position.set(-3, 0.15, -3); // center of left floor (on top of plinth + floor)

  const screens: THREE.MeshBasicMaterial[] = [];
  const serverLEDs: THREE.MeshStandardMaterial[] = [];

  // ---- L-shaped desk ----
  const deskTopMat = new THREE.MeshStandardMaterial({ color: IVORY, roughness: 0.7 });
  const deskLegMat = new THREE.MeshStandardMaterial({ color: WOOD, roughness: 0.8 });

  const long = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.12, 1.2), deskTopMat);
  long.position.set(-0.2, 1.2, -2.3);
  long.castShadow = long.receiveShadow = true;
  g.add(long);

  const sh = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.12, 3.0), deskTopMat);
  sh.position.set(-1.9, 1.2, -0.9);
  sh.castShadow = sh.receiveShadow = true;
  g.add(sh);

  // legs
  const legGeo = new THREE.BoxGeometry(0.12, 1.2, 0.12);
  const legPositions: THREE.Vector3Tuple[] = [
    [1.95, 0.6, -2.3], [1.95, 0.6, -1.3],
    [-2.4, 0.6, -2.3], [-2.4, 0.6, 0.5],
    [-1.4, 0.6, -0.6], [-1.4, 0.6, 0.5],
  ];
  legPositions.forEach(p => {
    const l = new THREE.Mesh(legGeo, deskLegMat);
    l.position.set(...p);
    l.castShadow = true;
    g.add(l);
  });

  // ---- Two Monitors ----
  const monitorStand = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.5 });
  const bezel = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.5 });

  const makeMonitor = (x: number) => {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.5, 0.1), monitorStand);
    arm.position.set(x, 1.55, -2.7);
    arm.castShadow = true;
    g.add(arm);
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.05, 0.3), monitorStand);
    base.position.set(x, 1.28, -2.7);
    g.add(base);
    const frame = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.9, 0.08), bezel);
    frame.position.set(x, 2.2, -2.68);
    frame.castShadow = true;
    g.add(frame);
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x0fff7a });
    // use emissive via StandardMaterial instead? Basic material glows w/ bloom — keep per spec
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 0.8), screenMat);
    screen.position.set(x, 2.2, -2.63);
    g.add(screen);
    screens.push(screenMat);
    // draw code lines texture
    const tex = makeCodeScreenTexture();
    screenMat.map = tex;
    screenMat.color = new THREE.Color(0x66ffb2);
  };
  makeMonitor(0.0);

  // ---- PC Tower ----
  const tower = new THREE.Mesh(
    new THREE.BoxGeometry(0.6, 1.2, 0.5),
    new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.4 }),
  );
  tower.position.set(1.6, 0.6, -2.3);
  tower.castShadow = true;
  g.add(tower);
  // accent LED
  const towerLED = new THREE.Mesh(
    new THREE.BoxGeometry(0.02, 0.8, 0.02),
    new THREE.MeshStandardMaterial({ color: 0xff7ab8, emissive: 0xff7ab8, emissiveIntensity: 1.2 }),
  );
  towerLED.position.set(1.3, 0.7, -2.05);
  g.add(towerLED);

  // ---- Keyboard (mechanical, pastel keycaps) ----
  const kb = new THREE.Mesh(
    new THREE.BoxGeometry(1.4, 0.08, 0.45),
    new THREE.MeshStandardMaterial({ color: 0x2b2b30, roughness: 0.6 }),
  );
  kb.position.set(0.0, 1.3, -2.0);
  kb.castShadow = true;
  g.add(kb);
  const capColors = [0xf5b8c5, 0xc9e4ff, 0xffe3a3, 0xc7f0d1, 0xd9c4f3];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 12; c++) {
      const mat = new THREE.MeshStandardMaterial({
        color: capColors[(r + c) % capColors.length],
        roughness: 0.5,
      });
      const cap = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.04, 0.09), mat);
      cap.position.set(-0.6 + c * 0.11, 1.36, -2.15 + r * 0.1);
      g.add(cap);
    }
  }

  // Mouse
  const mouse = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 12, 8),
    new THREE.MeshStandardMaterial({ color: 0xfad5dd, roughness: 0.3 }),
  );
  mouse.scale.set(1, 0.5, 1.4);
  mouse.position.set(0.9, 1.3, -1.9);
  g.add(mouse);

  // ---- Open book on desk ----
  const bookGroup = new THREE.Group();
  const bookCover = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.04, 0.55),
    new THREE.MeshStandardMaterial({ color: 0xd07a8a, roughness: 0.8 }),
  );
  bookCover.position.y = 0;
  bookGroup.add(bookCover);
  const pageL = new THREE.Mesh(
    new THREE.BoxGeometry(0.38, 0.02, 0.5),
    new THREE.MeshStandardMaterial({ color: 0xfff8ea, roughness: 0.9 }),
  );
  pageL.position.set(-0.2, 0.03, 0);
  pageL.rotation.z = 0.06;
  bookGroup.add(pageL);
  const pageR = new THREE.Mesh(
    new THREE.BoxGeometry(0.38, 0.02, 0.5),
    new THREE.MeshStandardMaterial({ color: 0xfff8ea, roughness: 0.9 }),
  );
  pageR.position.set(0.2, 0.03, 0);
  pageR.rotation.z = -0.06;
  bookGroup.add(pageR);
  const spine = new THREE.Mesh(
    new THREE.BoxGeometry(0.04, 0.05, 0.52),
    new THREE.MeshStandardMaterial({ color: 0xb56070 }),
  );
  spine.position.set(0, 0.04, 0);
  bookGroup.add(spine);
  // text lines on pages
  for (let r = 0; r < 5; r++) {
    for (const side of [-1, 1]) {
      const line = new THREE.Mesh(
        new THREE.BoxGeometry(0.28, 0.005, 0.02),
        new THREE.MeshStandardMaterial({ color: 0xb0a090 }),
      );
      line.position.set(side * 0.2, 0.045, -0.18 + r * 0.08);
      line.rotation.z = side > 0 ? -0.06 : 0.06;
      bookGroup.add(line);
    }
  }
  bookGroup.position.set(-0.9, 1.27, -1.95);
  bookGroup.rotation.y = 0.25;
  g.add(bookGroup);

  // ---- Server Rack (on right side of L desk, near x ~ 1.6, z ~ -1.2) ----
  const rackGroup = new THREE.Group();
  const rackBody = new THREE.Mesh(
    new THREE.BoxGeometry(0.55, 0.9, 0.5),
    new THREE.MeshStandardMaterial({ color: 0x1d1d22, roughness: 0.5 }),
  );
  rackBody.castShadow = true;
  rackGroup.add(rackBody);
  // units
  for (let i = 0; i < 4; i++) {
    const unit = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.15, 0.02),
      new THREE.MeshStandardMaterial({ color: 0x2d2d35, roughness: 0.4 }),
    );
    unit.position.set(0, -0.3 + i * 0.2, 0.26);
    rackGroup.add(unit);
    // LEDs per unit
    for (let j = 0; j < 5; j++) {
      const ledMat = new THREE.MeshStandardMaterial({
        color: 0x66ff99, emissive: 0x22ff55, emissiveIntensity: 1.2,
      });
      const led = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.02), ledMat);
      led.position.set(-0.18 + j * 0.08, -0.3 + i * 0.2, 0.28);
      rackGroup.add(led);
      serverLEDs.push(ledMat);
    }
  }
  rackGroup.position.set(1.7, 1.71, -2.15);
  g.add(rackGroup);

  // ---- Chair (pink ergonomic) ----
  const chairMat = new THREE.MeshStandardMaterial({ color: 0xffb487, roughness: 0.7 });
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.15, 0.9), chairMat);
  seat.position.set(0.0, 0.9, -0.2);
  seat.castShadow = true;
  g.add(seat);
  const back = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.1, 0.15), chairMat);
  back.position.set(0.0, 1.4, 0.15);
  back.castShadow = true;
  g.add(back);
  const stem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 0.6, 12),
    new THREE.MeshStandardMaterial({ color: 0x555, roughness: 0.5 }),
  );
  stem.position.set(0, 0.55, -0.2);
  g.add(stem);
  // wheels
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const w = new THREE.Mesh(
      new THREE.SphereGeometry(0.07, 10, 8),
      new THREE.MeshStandardMaterial({ color: 0x333, roughness: 0.5 }),
    );
    w.position.set(Math.cos(a) * 0.3, 0.12, -0.2 + Math.sin(a) * 0.3);
    g.add(w);
  }

  // ---- Wall decor on LEFT-solid portion of back wall ----
  // Back-wall inner face is at local z ≈ -2.25; solid portion is local x ∈ [-2.4, -0.1].
  const WALL_Z = -2.7; // item center; shelves stick out slightly into the room
  // Upper shelf with CODE sign
  const shelfTop = new THREE.Mesh(
    new THREE.BoxGeometry(2.0, 0.08, 0.35),
    new THREE.MeshStandardMaterial({ color: IVORY, roughness: 0.7 }),
  );
  shelfTop.position.set(-1.3, 3.35, WALL_Z);
  shelfTop.castShadow = true;
  g.add(shelfTop);

  // CODE sign on top shelf
  const sign = new THREE.Mesh(
    new THREE.BoxGeometry(0.7, 0.35, 0.06),
    new THREE.MeshStandardMaterial({ color: PINK_SOFT, roughness: 0.8 }),
  );
  sign.position.set(-2.0, 3.58, WALL_Z);
  g.add(sign);
  const signTex = makeTextTexture("CODE", "#2a2a2a", "#fad5dd");
  const signFace = new THREE.Mesh(
    new THREE.PlaneGeometry(0.66, 0.31),
    new THREE.MeshBasicMaterial({ map: signTex }),
  );
  signFace.position.set(-2.0, 3.58, WALL_Z + 0.035);
  g.add(signFace);
  // speaker on top shelf
  const speaker = new THREE.Mesh(
    new THREE.BoxGeometry(0.26, 0.36, 0.26),
    new THREE.MeshStandardMaterial({ color: 0x222, roughness: 0.6 }),
  );
  speaker.position.set(-1.4, 3.57, WALL_Z);
  speaker.castShadow = true;
  g.add(speaker);
  // headphone stand on top shelf
  const standPost = new THREE.Mesh(
    new THREE.CylinderGeometry(0.035, 0.035, 0.5, 10),
    new THREE.MeshStandardMaterial({ color: 0xbbb, roughness: 0.6 }),
  );
  standPost.position.set(-0.75, 3.64, WALL_Z);
  g.add(standPost);
  const hp = new THREE.Mesh(
    new THREE.TorusGeometry(0.13, 0.035, 10, 20, Math.PI),
    new THREE.MeshStandardMaterial({ color: PINK, roughness: 0.5 }),
  );
  hp.position.set(-0.75, 3.9, WALL_Z);
  hp.rotation.x = Math.PI / 2;
  g.add(hp);

  // Lower shelf with leaning books
  const shelfLow = new THREE.Mesh(
    new THREE.BoxGeometry(1.6, 0.08, 0.3),
    new THREE.MeshStandardMaterial({ color: IVORY, roughness: 0.7 }),
  );
  shelfLow.position.set(-1.5, 2.55, WALL_Z);
  shelfLow.castShadow = true;
  g.add(shelfLow);
  const bookColors = [0xf5b8c5, 0xffd6a5, 0xc9e4ff, 0xd9c4f3, 0xffe3a3];
  for (let i = 0; i < 5; i++) {
    const book = new THREE.Mesh(
      new THREE.BoxGeometry(0.15, 0.42 + Math.random() * 0.12, 0.22),
      new THREE.MeshStandardMaterial({ color: bookColors[i], roughness: 0.8 }),
    );
    book.position.set(-2.15 + i * 0.18, 2.82, WALL_Z);
    book.rotation.z = (Math.random() - 0.5) * 0.12;
    book.castShadow = true;
    g.add(book);
  }

  // ---- Floor rug under desk chair ----
  const rug = new THREE.Mesh(
    new THREE.BoxGeometry(3.2, 0.02, 2.2),
    new THREE.MeshStandardMaterial({ color: 0xf7c6cf, roughness: 1 }),
  );
  rug.position.set(0.2, 0.01, 0.3);
  rug.receiveShadow = true;
  g.add(rug);
  const rugTrim = new THREE.Mesh(
    new THREE.BoxGeometry(2.8, 0.022, 1.8),
    new THREE.MeshStandardMaterial({ color: 0xfad5dd, roughness: 1 }),
  );
  rugTrim.position.set(0.2, 0.012, 0.3);
  g.add(rugTrim);

// ---- Potted plant on floor beside desk ----
  const potL = new THREE.Mesh(
    new THREE.CylinderGeometry(0.25, 0.2, 0.5, 16),
    new THREE.MeshStandardMaterial({ color: 0xe08a9a, roughness: 0.8 }),
  );
  potL.position.set(2.3, 0.25, -1.0);
  potL.castShadow = true;
  g.add(potL);
  for (let i = 0; i < 14; i++) {
    const leaf = new THREE.Mesh(
      new THREE.SphereGeometry(0.16 + Math.random() * 0.06, 8, 6),
      new THREE.MeshStandardMaterial({ color: 0x7cc47a, roughness: 0.9 }),
    );
    leaf.position.set(
      2.3 + (Math.random() - 0.5) * 0.3,
      0.6 + Math.random() * 0.5,
      -1.0 + (Math.random() - 0.5) * 0.3,
    );
    leaf.castShadow = true;
    g.add(leaf);
  }

  // ---- Coffee mug on desk ----
  const mug = new THREE.Mesh(
    new THREE.CylinderGeometry(0.1, 0.09, 0.16, 16),
    new THREE.MeshStandardMaterial({ color: 0xf5b8c5, roughness: 0.5 }),
  );
  mug.position.set(1.25, 1.34, -1.85);
  mug.castShadow = true;
  g.add(mug);
  const mugHandle = new THREE.Mesh(
    new THREE.TorusGeometry(0.05, 0.014, 8, 14),
    new THREE.MeshStandardMaterial({ color: 0xf5b8c5 }),
  );
  mugHandle.position.set(1.35, 1.34, -1.85);
  mugHandle.rotation.y = Math.PI / 2;
  g.add(mugHandle);

  // ---- Pen cup ----
  const penCup = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.08, 0.2, 14),
    new THREE.MeshStandardMaterial({ color: 0xfad5dd, roughness: 0.6 }),
  );
  penCup.position.set(-1.9, 1.36, -1.6);
  g.add(penCup);
  [0xff6b7a, 0x7a9dff, 0xffcf6b].forEach((c, i) => {
    const pen = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 0.28, 8),
      new THREE.MeshStandardMaterial({ color: c }),
    );
    pen.position.set(-1.9 + (i - 1) * 0.03, 1.48, -1.6);
    pen.rotation.z = (i - 1) * 0.15;
    g.add(pen);
  });

  // ---- Pick zone (invisible) ----
  const pickZone = new THREE.Mesh(
    new THREE.BoxGeometry(6, 0.05, 6),
    new THREE.MeshBasicMaterial({ visible: false }),
  );
  pickZone.position.set(0, 0.05, 0);
  pickZone.userData.pickId = "gio";
  g.add(pickZone);

  scene.add(g);

  return {
    group: g,
    screens,
    serverLEDs,
    pickZone,
    deskCenter: new THREE.Vector3(-3 + 0.0, 2.6, -3 + -1.8),
  };
}

function makeCodeScreenTexture(): THREE.Texture {
  const c = document.createElement("canvas");
  c.width = 512; c.height = 320;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#0a0f10";
  ctx.fillRect(0, 0, 512, 320);
  ctx.font = "14px monospace";
  const palette = ["#66ffb2", "#9dffcf", "#4ade80", "#a7f3d0"];
  for (let i = 0; i < 18; i++) {
    ctx.fillStyle = palette[i % palette.length];
    const len = 10 + Math.floor(Math.random() * 30);
    const indent = (i % 4) * 16;
    let s = "";
    const syms = "abcdefghijklmnopqrstuvwxyz(){};=><*.,+-";
    for (let k = 0; k < len; k++) s += syms[Math.floor(Math.random() * syms.length)];
    ctx.fillText(s, 10 + indent, 20 + i * 16);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function makeTextTexture(text: string, fg: string, bg: string): THREE.Texture {
  const c = document.createElement("canvas");
  c.width = 256; c.height = 128;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 256, 128);
  ctx.fillStyle = fg;
  ctx.font = "bold 72px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 128, 68);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
