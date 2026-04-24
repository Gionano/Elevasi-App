import * as THREE from "three";

export interface OrbitState {
  target: THREE.Vector3;
  distance: number;
  theta: number; // azimuth (around Y), radians
  phi: number;   // polar (from Y), radians
  zoom: number;
}

export interface OrbitHandles {
  state: OrbitState;
  apply: () => void;
  dispose: () => void;
  wasDragging: () => boolean;
}

export function createOrbitControls(
  camera: THREE.OrthographicCamera,
  dom: HTMLElement,
  target: THREE.Vector3,
): OrbitHandles {
  const state: OrbitState = {
    target: target.clone(),
    distance: 30,
    theta: Math.PI / 4,
    phi: Math.PI / 3.4, // ~53°, classic iso-ish
    zoom: 1,
  };

  const apply = () => {
    const { theta, phi, distance } = state;
    const sinPhi = Math.sin(phi);
    camera.position.set(
      state.target.x + distance * sinPhi * Math.sin(theta),
      state.target.y + distance * Math.cos(phi),
      state.target.z + distance * sinPhi * Math.cos(theta),
    );
    // Flip up when phi crosses into the lower hemisphere so the camera
    // can roll past the poles smoothly (true 360°).
    const flipped = state.phi > Math.PI;
    camera.up.set(0, flipped ? -1 : 1, 0);
    camera.lookAt(state.target);
    camera.zoom = state.zoom;
    camera.updateProjectionMatrix();
  };
  apply();

  let dragged = false;
  const pointers = new Map<number, { x: number; y: number }>();
  let lastX = 0;
  let lastY = 0;
  let pinchDist = 0;

  const pinchDistance = () => {
    const pts = Array.from(pointers.values());
    if (pts.length < 2) return 0;
    const dx = pts[0].x - pts[1].x;
    const dy = pts[0].y - pts[1].y;
    return Math.hypot(dx, dy);
  };

  const onDown = (e: PointerEvent) => {
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    (e.target as Element).setPointerCapture?.(e.pointerId);
    if (pointers.size === 1) {
      dragged = false;
      lastX = e.clientX;
      lastY = e.clientY;
    } else if (pointers.size === 2) {
      pinchDist = pinchDistance();
      dragged = true;
    }
  };
  const onMove = (e: PointerEvent) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.size >= 2) {
      // pinch zoom
      const d = pinchDistance();
      if (pinchDist > 0 && d > 0) {
        const ratio = d / pinchDist;
        state.zoom = Math.max(0.4, Math.min(2.5, state.zoom * ratio));
        apply();
      }
      pinchDist = d;
      return;
    }

    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    if (Math.abs(dx) + Math.abs(dy) > 3) dragged = true;
    lastX = e.clientX;
    lastY = e.clientY;
    state.theta -= dx * 0.008;
    state.phi -= dy * 0.008;
    const twoPi = Math.PI * 2;
    state.phi = ((state.phi % twoPi) + twoPi) % twoPi;
    state.theta = ((state.theta % twoPi) + twoPi) % twoPi;
    apply();
  };
  const onUp = (e: PointerEvent) => {
    pointers.delete(e.pointerId);
    (e.target as Element).releasePointerCapture?.(e.pointerId);
    if (pointers.size < 2) pinchDist = 0;
    if (pointers.size === 1) {
      const p = pointers.values().next().value!;
      lastX = p.x;
      lastY = p.y;
    }
  };
  const onWheel = (e: WheelEvent) => {
    e.preventDefault();
    const factor = Math.pow(0.95, -e.deltaY * 0.01);
    state.zoom = Math.max(0.4, Math.min(2.5, state.zoom * factor));
    apply();
  };

  dom.style.touchAction = "none";
  dom.style.cursor = "grab";
  dom.addEventListener("pointerdown", onDown);
  window.addEventListener("pointermove", onMove);
  window.addEventListener("pointerup", onUp);
  window.addEventListener("pointercancel", onUp);
  dom.addEventListener("wheel", onWheel, { passive: false });

  return {
    state,
    apply,
    wasDragging: () => dragged,
    dispose: () => {
      dom.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      dom.removeEventListener("wheel", onWheel);
    },
  };
}
