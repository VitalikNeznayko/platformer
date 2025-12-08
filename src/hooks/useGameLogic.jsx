import { useEffect, useState } from "react";
import { LEVELS } from "../config/levels";

import { useLevelFlow } from "./useLevelFlow";
import { usePlayerMovement } from "./usePlayerMovement";
import { useMoney } from "./useMoney";
import { useDeadlyCollisions } from "./useDeadlyCollisions";
import { useExitDoor } from "./useExitDoor";

export const useGameLogic = (onFinish) => {
  const { level, nextLevel } = useLevelFlow(onFinish);
  const config = LEVELS[level];

  const { pos, setPos } = usePlayerMovement(
    config.obstacles,
    config.playerStart
  );

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

    setMoney(config.money);
    setPos(config.playerStart);
  }, [level]);

  useEffect(() => {
    updateMoney(pos);
  }, [pos]);

  useDeadlyCollisions(pos, config.deadly, () => {
    resetCollected();
    setMoney(config.money);
    setPos(config.playerStart);
  });

  useExitDoor(pos, config.exitDoor, () => {
    const totalCoins = config.money.length;
    if (collected === totalCoins) {
      nextLevel(level);
    }
  });

  const totalCoins = config.money.length;

  return {
    pos,
    level,
    money,
    collected,
    totalCoins,
    obstacles: config.obstacles,
    deadly: config.deadly,
    exitDoor: config.exitDoor,
    time,
  };
};
