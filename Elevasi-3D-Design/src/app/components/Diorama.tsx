import { useEffect, useRef } from "react";
import { initDiorama } from "../diorama/sceneManager";

export function Diorama() {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hostRef.current) return;
    const handles = initDiorama(hostRef.current);
    return () => handles.dispose();
  }, []);

  return <div ref={hostRef} className="absolute inset-0" />;
}
