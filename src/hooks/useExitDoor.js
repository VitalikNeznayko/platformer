import { useEffect } from "react";

export const useExitDoor = (pos, exitZone, onExit, isActive) => {
  const playerSize = 40;

  const collide = (p, z) =>
    p.x < z.x + z.width &&
    p.x + playerSize > z.x &&
    p.y < z.y + z.height &&
    p.y + playerSize > z.y;

  useEffect(() => {
    if (!isActive) return;
    if (exitZone && collide(pos, exitZone)) {
      onExit();
    }
  }, [pos, exitZone, isActive, onExit]);
};
