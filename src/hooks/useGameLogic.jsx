import { useEffect, useRef, useState } from "react";
import { useKeyboardControls } from "./useKeyboardControls";

export const useGameLogic = (onFinish, obstacles = []) => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [pos, setPos] = useState({ x: 100, y: 610 });

  const vel = useRef({ x: 0, y: 0 });

  const keys = useKeyboardControls();
  const keysRef = useRef(keys);

  useEffect(() => {
    keysRef.current = keys;
  }, [keys]);

  const posRef = useRef(pos);
  useEffect(() => {
    posRef.current = pos;
  }, [pos]);

  const playerSize = 40;
  const mapLeft = 0;
  const mapRight = 1160;
  const groundY = 610;

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

    const gameLoop = () => {
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

      frame = requestAnimationFrame(gameLoop);
    };

    frame = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(frame);
  }, [obstacles]);

  const addScore = (v) => setScore((s) => s + v);

  const nextLevel = () => {
    if (level === 1) {
      setLevel(2);
      setPos({ x: 100, y: 610 });
    } else {
      onFinish(score);
    }
  };

  return { pos, level, score, nextLevel, addScore };
};

export default useGameLogic;
