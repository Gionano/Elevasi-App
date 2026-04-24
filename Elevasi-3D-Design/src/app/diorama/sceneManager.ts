import * as THREE from "three";
import { setupLighting } from "./lighting";
import { buildPlatform } from "./platform";
import { buildLeftRoom } from "./leftRoom";
import { buildRightRoom } from "./rightRoom";
import { HeartBurstSystem, setupRaycaster } from "./interactions";
import { createStateStore } from "./state";
import { createOrbitControls } from "./orbitControls";
import { PaperAirplane } from "./paperAirplane";

export interface DioramaHandles {
  dispose: () => void;
}

export function initDiorama(container: HTMLElement): DioramaHandles {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xfbe9d8);

  // Orthographic isometric camera
  const aspect = container.clientWidth / container.clientHeight;
  const frustum = 13;
  const camera = new THREE.OrthographicCamera(
    (-frustum * aspect) / 2, (frustum * aspect) / 2,
    frustum / 2, -frustum / 2,
    -200, 200,
  );
  const target = new THREE.Vector3(0, 1.6, -2.5);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  const lights = setupLighting(scene);
  const { skyMat } = buildPlatform(scene);
  const left = buildLeftRoom(scene);
  const right = buildRightRoom(scene);

  const airplane = new PaperAirplane(scene);
  const { store } = createStateStore(left, right, (noteId) => airplane.triggerDrop(noteId));
  const hearts = new HeartBurstSystem(scene);

  const orbit = createOrbitControls(camera, renderer.domElement, target);

  const unbind = setupRaycaster(renderer, camera, {
    leftZone: left.pickZone,
    rightZone: right.pickZone,
    leftBurstOrigin: left.deskCenter,
    rightBurstOrigin: right.deskCenter,
    paperPlane: {
      mesh: airplane.mesh,
      isIdle: () => airplane.isIdle(),
      dismiss: () => airplane.dismiss(),
    },
  }, hearts, () => orbit.wasDragging());

  const onResize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    const a = w / h;
    camera.left = (-frustum * a) / 2;
    camera.right = (frustum * a) / 2;
    camera.top = frustum / 2;
    camera.bottom = -frustum / 2;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  window.addEventListener("resize", onResize);

  const startMs = performance.now();
  let lastMs = startMs;
  let rafId = 0;

  // Jakarta (WIB, UTC+7) hour 0-24
  const jakartaHour = () => {
    const now = new Date();
    const utcMs = now.getTime() + now.getTimezoneOffset() * 60_000;
    const jkt = new Date(utcMs + 7 * 3600_000);
    return jkt.getHours() + jkt.getMinutes() / 60 + jkt.getSeconds() / 3600;
  };

  // Ambient + directional intensity/tint based on hour
  const applyTimeLighting = (hour: number) => {
    const sunAngle = Math.max(0, Math.sin(((hour - 6) / 12) * Math.PI));
    const isDay = hour >= 6 && hour <= 18 ? 1 : 0;
    lights.dir.intensity = 0.2 + 1.0 * sunAngle;
    lights.ambient.intensity = 0.25 + 0.45 * sunAngle;
    // Warm golden at sunrise/sunset, cool at midday, moonlit blue at night
    const c = new THREE.Color();
    if (isDay) {
      const warmth = 1 - Math.abs(hour - 12) / 6; // 0 at 6/18, 1 at 12
      c.setRGB(1.0, 0.85 + 0.1 * warmth, 0.6 + 0.35 * warmth);
    } else {
      c.setRGB(0.45, 0.5, 0.75);
    }
    lights.dir.color.copy(c);
  };

  const tick = () => {
    const nowMs = performance.now();
    const dt = Math.min(0.1, (nowMs - lastMs) / 1000);
    const t = (nowMs - startMs) / 1000;
    lastMs = nowMs;

    const hour = jakartaHour();
    skyMat.uniforms.uHour.value = hour;
    applyTimeLighting(hour);

    // Server LED blink
    const blinkSpeed = store.gio === "studying" ? 6.0 : 2.0;
    const isOff = store.gio === "sleep";
    left.serverLEDs.forEach((m, i) => {
      if (isOff) {
        m.emissiveIntensity = 0.05;
      } else {
        const v = (Math.sin(t * blinkSpeed + i * 0.7) * 0.5 + 0.5);
        m.emissiveIntensity = 0.4 + v * 1.2;
      }
    });

    // Monitor emission pulse while coding
    if (store.gio !== "sleep") {
      const pulse = store.gio === "studying"
        ? 0.85 + Math.sin(t * 4) * 0.15
        : 0.7;
      left.screens.forEach(m => {
        // MeshBasicMaterial doesn't truly emit in lighting, but adjust via color brightness
        const base = store.gio === "studying" ? 0x9dffcf : 0x66ffb2;
        const c = new THREE.Color(base);
        c.multiplyScalar(pulse);
        m.color.copy(c);
      });
    }

    // Coffee steam animation
    if (store.almeira === "studying" || store.almeira === "idle") {
      right.steam.forEach((s, i) => {
        const base = s.userData.base as THREE.Vector3;
        const phase = s.userData.phase as number;
        s.visible = true;
        s.position.x = base.x + Math.sin(t * 2 + phase) * 0.05;
        s.position.y = base.y + ((t * 0.4 + i * 0.3) % 1.0) * 0.4;
        (s.material as THREE.MeshStandardMaterial).opacity =
          0.45 * (1 - ((t * 0.4 + i * 0.3) % 1.0));
      });
    } else {
      right.steam.forEach(s => (s.visible = false));
    }

    hearts.update(dt);
    airplane.update(t, dt);
    renderer.render(scene, camera);
    rafId = requestAnimationFrame(tick);
  };
  tick();

  return {
    dispose: () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      unbind();
      orbit.dispose();
      airplane.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
      if (window.ElevasiDiorama) delete window.ElevasiDiorama;
    },
  };
}
