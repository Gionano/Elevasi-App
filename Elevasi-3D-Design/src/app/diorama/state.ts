import type {
  AlmeiraState, DioramaAPI, GioState, LeftRoomRefs, RightRoomRefs,
} from "./types";

export interface StateStore {
  gio: GioState;
  almeira: AlmeiraState;
}

export function createStateStore(
  left: LeftRoomRefs,
  right: RightRoomRefs,
  triggerIncomingNote: (noteId: string) => void,
): { store: StateStore; api: DioramaAPI } {
  const store: StateStore = { gio: "idle", almeira: "idle" };

  const applyGio = (s: GioState) => {
    store.gio = s;
    left.screens.forEach(m => {
      if (s === "sleep") {
        m.color.set(0x101010);
        m.opacity = 1;
      } else {
        m.color.set(s === "studying" ? 0x9dffcf : 0x66ffb2);
      }
    });
  };

  const applyAlmeira = (s: AlmeiraState) => {
    store.almeira = s;
    if (s === "studying") {
      right.lampLight.intensity = 1.6;
      right.lampMat.emissiveIntensity = 1.3;
      right.floorLampLight.intensity = 1.2;
      right.floorLampMat.emissiveIntensity = 1.1;
    } else if (s === "idle") {
      right.lampLight.intensity = 0.8;
      right.lampMat.emissiveIntensity = 0.9;
      right.floorLampLight.intensity = 0.7;
      right.floorLampMat.emissiveIntensity = 0.7;
    } else {
      right.lampLight.intensity = 0.0;
      right.lampMat.emissiveIntensity = 0.1;
      right.floorLampLight.intensity = 0.0;
      right.floorLampMat.emissiveIntensity = 0.1;
    }
    const dim = s === "sleep" ? 0.25 : 1.0;
    right.stringLights.forEach(m => (m.emissiveIntensity = 1.4 * dim));
    right.laptopScreen.color.set(s === "studying" ? 0xbfe4ff : 0x151515);
  };

  applyGio(store.gio);
  applyAlmeira(store.almeira);

  const api: DioramaAPI = {
    setGioState: applyGio,
    setAlmeiraState: applyAlmeira,
    triggerIncomingNote,
  };

  window.ElevasiDiorama = api;
  return { store, api };
}
