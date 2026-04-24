import * as THREE from "three";

export function setupLighting(scene: THREE.Scene) {
  const ambient = new THREE.AmbientLight(0xfff4e6, 0.6);
  scene.add(ambient);

  const dir = new THREE.DirectionalLight(0xffe8c9, 1.1);
  dir.position.set(8, 14, 6);
  dir.castShadow = true;
  dir.shadow.mapSize.set(2048, 2048);
  dir.shadow.camera.near = 0.5;
  dir.shadow.camera.far = 40;
  const s = 14;
  dir.shadow.camera.left = -s;
  dir.shadow.camera.right = s;
  dir.shadow.camera.top = s;
  dir.shadow.camera.bottom = -s;
  dir.shadow.bias = -0.0005;
  dir.shadow.radius = 6;
  scene.add(dir);

  const fill = new THREE.HemisphereLight(0xffd8e8, 0xf4c9a8, 0.35);
  scene.add(fill);

  return { ambient, dir, fill };
}
