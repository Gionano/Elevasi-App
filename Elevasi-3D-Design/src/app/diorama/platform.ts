import * as THREE from "three";

// Two square rooms forming an L when viewed in plan, sharing a back corner
// where a large corner window sits. Each room sits on a visible thick plinth.
// Left room: X ∈ [-5, 0], Z ∈ [-5, 0]; back wall at z = -5 (pink).
// Right room: X ∈ [0, 5], Z ∈ [-5, 0]; back wall at x = 5 (peach).
// Open front (+Z) and open right/left sides expose interiors to the camera.

// Gio (left) = peach walls; Almeira (right) = pink walls
const WALL_PEACH = 0xf5b79a;
const WALL_PINK = 0xf7c6cf;
const PLINTH_PEACH = 0xd98a6a;
const PLINTH_PINK = 0xe89aa8;
const PEACH_FLOOR = 0xffd0b5;
const PINK_RUG = 0xf3a3a0;
const ROOM = 6; // room side length
const WALL_H = 5.0;
const PLINTH_H = 0.6;
const FLOOR_T = 0.15;

export function buildPlatform(scene: THREE.Scene) {
  const root = new THREE.Group();
  root.name = "platform";

  // ---------- PLINTHS (visible thick bases) ----------
  const leftPlinth = new THREE.Mesh(
    new THREE.BoxGeometry(ROOM, PLINTH_H, ROOM),
    new THREE.MeshStandardMaterial({ color: PLINTH_PEACH, roughness: 0.9 }),
  );
  leftPlinth.position.set(-ROOM / 2, -PLINTH_H / 2, -ROOM / 2);
  leftPlinth.receiveShadow = true;
  leftPlinth.castShadow = true;
  root.add(leftPlinth);

  const rightPlinth = new THREE.Mesh(
    new THREE.BoxGeometry(ROOM, PLINTH_H, ROOM),
    new THREE.MeshStandardMaterial({ color: PLINTH_PINK, roughness: 0.9 }),
  );
  rightPlinth.position.set(ROOM / 2, -PLINTH_H / 2, -ROOM / 2);
  rightPlinth.receiveShadow = true;
  rightPlinth.castShadow = true;
  root.add(rightPlinth);

  // ---------- FLOORS ----------
  const plankTex = makePlankTexture();
  const leftFloor = new THREE.Mesh(
    new THREE.BoxGeometry(ROOM, FLOOR_T, ROOM),
    new THREE.MeshStandardMaterial({ map: plankTex, roughness: 0.85 }),
  );
  leftFloor.position.set(-ROOM / 2, FLOOR_T / 2, -ROOM / 2);
  leftFloor.receiveShadow = true;
  root.add(leftFloor);

  const rightFloor = new THREE.Mesh(
    new THREE.BoxGeometry(ROOM, FLOOR_T, ROOM),
    new THREE.MeshStandardMaterial({ color: PEACH_FLOOR, roughness: 0.95 }),
  );
  rightFloor.position.set(ROOM / 2, FLOOR_T / 2, -ROOM / 2);
  rightFloor.receiveShadow = true;
  root.add(rightFloor);

  // Pink rounded rug on right
  const rug = new THREE.Mesh(
    roundedRectGeo(3.5, 2.8, 0.4),
    new THREE.MeshStandardMaterial({ color: PINK_RUG, roughness: 1 }),
  );
  rug.rotation.x = -Math.PI / 2;
  rug.position.set(ROOM / 2, FLOOR_T + 0.005, -ROOM / 2 + 0.2);
  rug.receiveShadow = true;
  root.add(rug);

  // ---------- BACK WALLS with real window holes (cut into segments) ----------
  const wallThick = 0.25;
  const floorTop = FLOOR_T;
  const winW = 2.6;
  const winH = 2.4;
  const winBottom = floorTop + 1.0;
  const winTop = winBottom + winH;

  // Left (Gio) = peach, Right (Almeira) = pink
  const pinkMat = new THREE.MeshStandardMaterial({ color: WALL_PEACH, roughness: 0.95 });
  const peachMat = new THREE.MeshStandardMaterial({ color: WALL_PINK, roughness: 0.95 });

  const segment = (
    mat: THREE.Material,
    w: number, h: number, d: number,
    x: number, y: number, z: number,
  ) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z);
    m.castShadow = true;
    m.receiveShadow = true;
    root.add(m);
    return m;
  };

  // LEFT back wall (along X at z=-ROOM). Wall occupies x ∈ [-ROOM, 0].
  // Window occupies x ∈ [-winW, 0] (flush to corner), y ∈ [winBottom, winTop].
  const leftWallLen = ROOM - winW; // segment width left of window
  // Left segment (fully solid, left of window)
  segment(pinkMat, leftWallLen, WALL_H, wallThick,
    -ROOM + leftWallLen / 2, floorTop + WALL_H / 2, -ROOM + wallThick / 2);
  // Below window
  segment(pinkMat, winW, winBottom - floorTop, wallThick,
    -winW / 2, floorTop + (winBottom - floorTop) / 2, -ROOM + wallThick / 2);
  // Above window
  const topHL = (floorTop + WALL_H) - winTop;
  segment(pinkMat, winW, topHL, wallThick,
    -winW / 2, winTop + topHL / 2, -ROOM + wallThick / 2);

  // RIGHT ROOM back wall along X at z=-ROOM, x ∈ [0, ROOM] (solid, no window)
  segment(peachMat, ROOM, WALL_H, wallThick,
    ROOM / 2, floorTop + WALL_H / 2, -ROOM + wallThick / 2);

  // RIGHT side wall (along Z at x=ROOM). Wall occupies z ∈ [-ROOM, 0].
  // Window occupies z ∈ [-winW, 0] (flush to corner).
  const rightWallLen = ROOM - winW;
  // Back segment (far from window)
  segment(peachMat, wallThick, WALL_H, rightWallLen,
    ROOM - wallThick / 2, floorTop + WALL_H / 2, -ROOM + rightWallLen / 2);
  // Below window
  segment(peachMat, wallThick, winBottom - floorTop, winW,
    ROOM - wallThick / 2, floorTop + (winBottom - floorTop) / 2, -winW / 2);
  // Above window
  const topHR = (floorTop + WALL_H) - winTop;
  segment(peachMat, wallThick, topHR, winW,
    ROOM - wallThick / 2, winTop + topHR / 2, -winW / 2);

  // ---------- WINDOW FRAMES (cleanly wrap the openings) ----------
  const frameMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
  const frameBox = (w: number, h: number, d: number, x: number, y: number, z: number) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), frameMat);
    m.position.set(x, y, z);
    m.castShadow = true;
    root.add(m);
  };
  const zInner = -ROOM + wallThick;   // inner face of left wall (room-side)
  const xInner = ROOM - wallThick;    // inner face of right wall
  const midX = -winW / 2;
  const midZ = -winW / 2;
  const midY = (winBottom + winTop) / 2;
  const fd = wallThick + 0.04;        // frame depth wraps wall thickness

  // LEFT window frame (sill, header, left jamb, mullions)
  frameBox(winW + 0.1, 0.14, fd, midX, winBottom + 0.07, zInner - wallThick / 2);
  frameBox(winW + 0.1, 0.14, fd, midX, winTop - 0.07, zInner - wallThick / 2);
  frameBox(0.14, winH, fd, -winW, midY, zInner - wallThick / 2);
  frameBox(winW, 0.06, 0.08, midX, midY, zInner + 0.06); // horizontal mullion (room-side)
  frameBox(0.06, winH, 0.08, midX, midY, zInner + 0.06); // vertical mullion

  // RIGHT window frame
  frameBox(fd, 0.14, winW + 0.1, xInner + wallThick / 2, winBottom + 0.07, midZ);
  frameBox(fd, 0.14, winW + 0.1, xInner + wallThick / 2, winTop - 0.07, midZ);
  frameBox(fd, winH, 0.14, xInner + wallThick / 2, midY, -winW);
  frameBox(0.08, 0.06, winW, xInner - 0.06, midY, midZ); // horizontal mullion (room-side)
  frameBox(0.08, winH, 0.06, xInner - 0.06, midY, midZ); // vertical mullion

  // Shared corner post (vertical, where both windows meet)
  frameBox(0.22, winH + 0.28, 0.22, 0.02, midY, -ROOM + 0.12);

  // ---------- SUNSET BACKDROP (full 360° so it shows through both windows) ----------
  const skyGeo = new THREE.CylinderGeometry(24, 24, 18, 96, 1, true);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: {
      uHour: { value: 17.5 }, // 0-24, initialized; updated from render loop
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      uniform float uHour;

      // 5 keyframes around the clock: night -> dawn -> day -> sunset -> dusk
      // Each keyframe has (bottom, mid, top) colors.
      vec3 palette(float h, int which) {
        // which: 0=bottom, 1=mid, 2=top
        // Normalize hour to 0..1 of day
        // Keyframe anchors (hour, colors)
        // 0h  night:   dark navy
        // 6h  dawn:    pink/orange horizon, purple top
        // 12h midday:  bright blue
        // 18h sunset:  warm gold/pink/blue
        // 22h dusk:    deep blue/violet
        vec3 b[5]; vec3 m[5]; vec3 t[5];
        // Night (0h / 24h)
        b[0]=vec3(0.06,0.08,0.22); m[0]=vec3(0.04,0.05,0.16); t[0]=vec3(0.02,0.02,0.10);
        // Dawn (6h)
        b[1]=vec3(1.00,0.78,0.55); m[1]=vec3(1.00,0.60,0.70); t[1]=vec3(0.45,0.40,0.70);
        // Midday (12h)
        b[2]=vec3(0.85,0.95,1.00); m[2]=vec3(0.60,0.82,1.00); t[2]=vec3(0.35,0.62,0.95);
        // Sunset (18h)
        b[3]=vec3(1.00,0.88,0.55); m[3]=vec3(1.00,0.65,0.68); t[3]=vec3(0.62,0.70,0.95);
        // Dusk (22h)
        b[4]=vec3(0.35,0.30,0.55); m[4]=vec3(0.18,0.16,0.38); t[4]=vec3(0.06,0.06,0.22);

        float anchors[5];
        anchors[0]=0.0; anchors[1]=6.0; anchors[2]=12.0; anchors[3]=18.0; anchors[4]=22.0;

        // Wrap hour into [0, 24]
        float hh = mod(h, 24.0);
        // find segment
        int i0 = 0; int i1 = 0;
        float seg = 0.0;
        if (hh < anchors[1])       { i0=0; i1=1; seg=(hh-0.0)/6.0; }
        else if (hh < anchors[2])  { i0=1; i1=2; seg=(hh-6.0)/6.0; }
        else if (hh < anchors[3])  { i0=2; i1=3; seg=(hh-12.0)/6.0; }
        else if (hh < anchors[4])  { i0=3; i1=4; seg=(hh-18.0)/4.0; }
        else                        { i0=4; i1=0; seg=(hh-22.0)/2.0; } // wrap to night
        vec3 c0 = which==0 ? b[i0] : (which==1 ? m[i0] : t[i0]);
        vec3 c1 = which==0 ? b[i1] : (which==1 ? m[i1] : t[i1]);
        return mix(c0, c1, smoothstep(0.0, 1.0, seg));
      }

      void main() {
        float y = vUv.y;
        vec3 bottom = palette(uHour, 0);
        vec3 mid    = palette(uHour, 1);
        vec3 top    = palette(uHour, 2);
        vec3 col = mix(bottom, mid, smoothstep(0.05, 0.55, y));
        col = mix(col, top, smoothstep(0.55, 1.0, y));

        // Sun / moon traverses the sky from x=0 at hour 6 to x=1 at hour 18
        float sunX = clamp((uHour - 6.0) / 12.0, 0.0, 1.0);
        float sunY = 0.32 + 0.35 * sin(clamp((uHour-6.0)/12.0, 0.0, 1.0) * 3.14159);
        float d = distance(vec2(fract(vUv.x), vUv.y), vec2(sunX, sunY));
        float sun = smoothstep(0.28, 0.0, d);
        // Day sun warm, night moon cool
        float isDay = smoothstep(5.5, 6.5, uHour) * (1.0 - smoothstep(18.5, 19.5, uHour));
        vec3 sunCol = mix(vec3(0.85, 0.88, 1.0), vec3(1.0, 0.88, 0.6), isDay);
        col += sunCol * sun * (0.5 + 0.3 * isDay);

        // Stars at night
        float night = (1.0 - isDay);
        float star = step(0.997, fract(sin(dot(floor(vUv*300.0), vec2(12.9898,78.233))) * 43758.5453));
        col += vec3(1.0) * star * night * 0.8 * step(0.45, vUv.y);

        // Cloud bands (subtle, only during day/twilight)
        float cloud = smoothstep(0.52, 0.58, y) * (1.0 - smoothstep(0.66, 0.74, y));
        float cn = sin(vUv.x * 48.0 + 1.3) * 0.5 + 0.5;
        col = mix(col, mix(vec3(0.4,0.4,0.5), vec3(1.0,0.96,0.98), isDay), cloud * cn * 0.4);
        float cloud2 = smoothstep(0.72, 0.76, y) * (1.0 - smoothstep(0.82, 0.88, y));
        float cn2 = sin(vUv.x * 28.0 + 4.2) * 0.5 + 0.5;
        col = mix(col, mix(vec3(0.3,0.3,0.45), vec3(1.0,0.95,1.0), isDay), cloud2 * cn2 * 0.3);

        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
  const sky = new THREE.Mesh(skyGeo, skyMat);
  sky.position.set(0, 4, 0);
  root.add(sky);

  scene.add(root);
  return { root, skyMat };
}

function makePlankTexture(): THREE.Texture {
  const c = document.createElement("canvas");
  c.width = 512; c.height = 512;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#ecd6b3";
  ctx.fillRect(0, 0, 512, 512);
  const plankH = 64;
  for (let y = 0; y < 512; y += plankH) {
    const shade = 210 + Math.floor(Math.random() * 28);
    ctx.fillStyle = `rgb(${shade}, ${shade - 28}, ${shade - 58})`;
    ctx.fillRect(0, y, 512, plankH - 2);
    ctx.strokeStyle = "rgba(120, 80, 50, 0.12)";
    for (let i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.moveTo(0, y + Math.random() * plankH);
      ctx.lineTo(512, y + Math.random() * plankH);
      ctx.stroke();
    }
    ctx.fillStyle = "rgba(80,50,30,0.35)";
    ctx.fillRect(0, y + plankH - 2, 512, 2);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1.5, 1.5);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function roundedRectGeo(w: number, h: number, r: number) {
  const s = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return new THREE.ShapeGeometry(s, 8);
}
