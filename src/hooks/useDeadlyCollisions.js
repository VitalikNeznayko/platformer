import { useEffect } from "react";

export const useDeadlyCollisions = (pos, deadly, onDeath) => {
  useEffect(() => {
    const playerSize = 40;

    const collide = (p, o) =>
      p.x < o.x + o.width &&
      p.x + playerSize > o.x &&
      p.y < o.y + o.height &&
      p.y + playerSize > o.y;

    for (const d of deadly) {
      if (collide(pos, d)) {
        onDeath();
        break;
      }
    }
  }, [pos, deadly, onDeath]);
};
