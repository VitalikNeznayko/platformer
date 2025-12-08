import { useEffect, useRef, useState } from "react";
import { useKeyboardControls } from "./useKeyboardControls";

export const usePlayerMovement = (obstacles = [], startPos) => {
  const keys = useKeyboardControls();

  const [pos, setPos] = useState(startPos);
  const posRef = useRef(pos);
  useEffect(() => {
    posRef.current = pos;
  }, [pos]);

  const keysRef = useRef(keys);
  useEffect(() => {
    keysRef.current = keys;
  }, [keys]);

  const vel = useRef({ x: 0, y: 0 });

  const playerSize = 40;
  const mapLeft = 0;
  const mapRight = 1560;
  const groundY = 760;

  const speed = 4;
  const jumpForce = 9;

  const gravity = 0.5;
  const fallGravity = 0.25;

  const holdBoost = 0.3;
  const maxHold = 25;
  const jumpHold = useRef(0);

  const isColliding = (p, o) =>
    p.x < o.x + o.width &&
    p.x + p.size > o.x &&
    p.y < o.y + o.height &&
    p.y + p.size > o.y;

  useEffect(() => {
    let frame;

    const loop = () => {
      const k = keysRef.current;
      const prev = posRef.current;

      if (k.left) vel.current.x = -speed;
      else if (k.right) vel.current.x = speed;
      else vel.current.x = 0;

      let newX = prev.x + vel.current.x;
      let newY = prev.y + vel.current.y;

      let onPlatform = false;

      for (const o of obstacles) {
        const standsOnTop =
          prev.y + playerSize <= o.y &&
          newY + playerSize >= o.y &&
          prev.x + playerSize > o.x &&
          prev.x < o.x + o.width;

        if (standsOnTop) {
          newY = o.y - playerSize;
          vel.current.y = 0;
          onPlatform = true;
        }
      }

      const grounded = prev.y >= groundY - 1 || onPlatform;

      if (k.jump && grounded) {
        vel.current.y = -jumpForce;
        jumpHold.current = 0;
      }

      if (k.jump && vel.current.y < 0 && jumpHold.current < maxHold) {
        vel.current.y -= holdBoost;
        jumpHold.current++;
      }

      if (!k.jump && vel.current.y < 0) {
        vel.current.y += fallGravity;
      }

      vel.current.y += gravity;

      newY = prev.y + vel.current.y;

      if (newX < mapLeft) newX = mapLeft;
      if (newX > mapRight) newX = mapRight;

      if (newY > groundY) {
        newY = groundY;
        vel.current.y = 0;
      }

      const playerBox = { x: newX, y: newY, size: playerSize };

      for (const o of obstacles) {
        if (isColliding(playerBox, o)) {
          if (prev.y + playerSize <= o.y) {
            newY = o.y - playerSize;
            vel.current.y = 0;
          } else if (prev.x + playerSize <= o.x) {
            newX = o.x - playerSize;
          } else if (prev.x >= o.x + o.width) {
            newX = o.x + o.width;
          } else {
            newY = o.y + o.height;
            vel.current.y = 1;
          }
        }
      }

      setPos({ x: newX, y: newY });

      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [obstacles]);

  return { pos, setPos };
};
