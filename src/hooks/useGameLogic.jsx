import { useEffect, useRef, useState } from "react";
import { useKeyboardControls } from "./useKeyboardControls";

export const useGameLogic = (onFinish) => {
  const [level, setLevel] = useState(1);
  const [score] = useState(0);

  const keys = useKeyboardControls();

  const [pos, setPos] = useState({ x: 100, y: 610 });
  const vel = useRef({ x: 0, y: 0 });

  const posRef = useRef(pos);
  const keysRef = useRef(keys);

  useEffect(() => {
    posRef.current = pos;
  }, [pos]);

  useEffect(() => {
    keysRef.current = keys;
  }, [keys]);

  const speed = 4;

  const jumpForce = 11;
  const gravity = 0.5;
  const fallGravity = 1;
  const holdBoost = 0.25;
  const maxHold = 12;

  const groundY = 610;

  const jumpHold = useRef(0);

  useEffect(() => {
    let frame;

    const gameLoop = () => {
      const keysNow = keysRef.current;
      const grounded = posRef.current.y >= groundY - 1;


      if (keysNow.left) vel.current.x = -speed;
      else if (keysNow.right) vel.current.x = speed;
      else vel.current.x = 0;

      if (keysNow.jump && grounded) {
        vel.current.y = -jumpForce;
        jumpHold.current = 0;
      }

      if (keysNow.jump && vel.current.y < 0 && jumpHold.current < maxHold) {
        vel.current.y -= holdBoost;
        jumpHold.current++;
      }

      if (!keysNow.jump && vel.current.y < 0) {
        vel.current.y += fallGravity;
      }

      vel.current.y += gravity;

      setPos((prev) => {
        let newX = prev.x + vel.current.x;
        let newY = prev.y + vel.current.y;

        if (newX < 0) newX = 0;
        if (newX > 1160) newX = 1160;

        if (newY > groundY) {
          newY = groundY;
          vel.current.y = 0;
        }

        return { x: newX, y: newY };
      });

      frame = requestAnimationFrame(gameLoop);
    };

    gameLoop();
    return () => cancelAnimationFrame(frame);
  }, []);

  const nextLevel = () => {
    if (level === 1) {
      setLevel(2);
      setPos({ x: 100, y: 350 });
    } else {
      onFinish(score);
    }
  };

  return {
    pos,
    level,
    score,
    nextLevel,
  };
};

export default useGameLogic;
