import { useEffect, useState } from "react";
import { useLevelFlow } from "./useLevelFlow";
import { usePlayerMovement } from "./usePlayerMovement";
import { useMoney } from "./useMoney";
import { useDeadlyCollisions } from "./useDeadlyCollisions";
import { useExitDoor } from "./useExitDoor";

export const useGameLogic = (onFinish, obstacles, deadly, exitDoor) => {
  const { level, nextLevel } = useLevelFlow(onFinish);
  const { pos, setPos } = usePlayerMovement(obstacles);

  const { money, setMoney, updateMoney, collected, resetCollected } =
    useMoney();

  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    resetCollected();
    setTime(0);

      setMoney([
        { id: 1, x: 200, y: 680 },
        { id: 2, x: 400, y: 580 },
        { id: 3, x: 700, y: 720 },
        { id: 4, x: 700, y: 480 },
      ]);

  }, [level]);

  useEffect(() => {
    updateMoney(pos);
  }, [pos]);

  useDeadlyCollisions(pos, deadly, () => setPos({ x: 100, y: 610 }));

  useExitDoor(pos, exitDoor, () => {
    if (collected === money.length + collected) {
      nextLevel();
      setPos({ x: 100, y: 610 });
    }
  });

  const totalCoins = money.length + collected;

  return {
    pos,
    level,
    money,
    collected,
    totalCoins,
    time,
  };
};
