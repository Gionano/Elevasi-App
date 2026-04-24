import * as THREE from "three";

export type GioState = "studying" | "idle" | "sleep";
export type AlmeiraState = "studying" | "idle" | "sleep";

export interface DioramaAPI {
  setGioState: (s: GioState) => void;
  setAlmeiraState: (s: AlmeiraState) => void;
  triggerIncomingNote: (noteId: string) => void;
}

export interface LeftRoomRefs {
  group: THREE.Group;
  screens: THREE.MeshBasicMaterial[];
  serverLEDs: THREE.MeshStandardMaterial[];
  pickZone: THREE.Mesh;
  deskCenter: THREE.Vector3;
}

export interface RightRoomRefs {
  group: THREE.Group;
  lampLight: THREE.PointLight;
  lampMat: THREE.MeshStandardMaterial;
  steam: THREE.Mesh[];
  stringLights: THREE.MeshStandardMaterial[];
  floorLampLight: THREE.PointLight;
  floorLampMat: THREE.MeshStandardMaterial;
  laptopScreen: THREE.MeshBasicMaterial;
  pickZone: THREE.Mesh;
  deskCenter: THREE.Vector3;
}

declare global {
  interface Window {
    ElevasiDiorama?: DioramaAPI;
    Android?: {
      onDeskInteraction?: (who: "gio" | "almeira") => void;
      onNoteOpened?: (noteId: string) => void;
    };
  }
}
