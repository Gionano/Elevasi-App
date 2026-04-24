import { useState } from "react";
import { Diorama } from "./components/Diorama";

type GioState = "studying" | "idle" | "sleep";
type AlmeiraState = "studying" | "idle" | "sleep";

export default function App() {
  const [gio, setGio] = useState<GioState>("idle");
  const [almeira, setAlmeira] = useState<AlmeiraState>("idle");

  const pushGio = (s: GioState) => {
    setGio(s);
    window.ElevasiDiorama?.setGioState(s);
  };
  const pushAlmeira = (s: AlmeiraState) => {
    setAlmeira(s);
    window.ElevasiDiorama?.setAlmeiraState(s);
  };

  return (
    <div className="relative size-full overflow-hidden bg-gradient-to-b from-[#ffe8d6] to-[#fbd5c9]">
      <Diorama />

      <div className="pointer-events-none absolute inset-0">
        <div className="pointer-events-auto absolute left-4 top-4 rounded-2xl bg-white/70 px-3 py-2 shadow-lg backdrop-blur-md">
          <div className="mb-1 text-pink-700">Varel Giovano</div>
          <div className="flex gap-1.5">
            {(["studying", "idle", "sleep"] as GioState[]).map(s => (
              <button
                key={s}
                onClick={() => pushGio(s)}
                className={`rounded-full px-2.5 py-0.5 text-xs transition ${
                  gio === s
                    ? "bg-pink-400 text-white"
                    : "bg-pink-100 text-pink-700 hover:bg-pink-200"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="pointer-events-auto absolute right-4 top-4 rounded-2xl bg-white/70 px-3 py-2 shadow-lg backdrop-blur-md">
          <div className="mb-1 text-orange-700">Almeira Dewi</div>
          <div className="flex gap-1.5">
            {(["studying", "idle", "sleep"] as AlmeiraState[]).map(s => (
              <button
                key={s}
                onClick={() => pushAlmeira(s)}
                className={`rounded-full px-2.5 py-0.5 text-xs transition ${
                  almeira === s
                    ? "bg-orange-400 text-white"
                    : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/70 px-4 py-1.5 text-xs text-neutral-600 shadow backdrop-blur-md">
          Drag to orbit · Scroll to zoom · Click desk for ❤️
        </div>
      </div>
    </div>
  );
}
