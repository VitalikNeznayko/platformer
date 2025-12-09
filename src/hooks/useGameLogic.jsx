import { useEffect, useState } from "react";
import { LEVELS } from "../config/levels";

import { useLevelFlow } from "./useLevelFlow";
import { usePlayerMovement } from "./usePlayerMovement";
import { useMoney } from "./useMoney";
import { useDeadlyCollisions } from "./useDeadlyCollisions";
import { useExitDoor } from "./useExitDoor";
import { useSettings } from "../context/SettingsContext";

export const useGameLogic = (onFinish) => {
  const { settings } = useSettings();
  const [timerKey, setTimerKey] = useState(0);
  const { level, nextLevel, restartGame } = useLevelFlow(onFinish);
  const config = LEVELS[level];
  const maxLevel = Object.keys(LEVELS).length;

  const [isGameOver, setIsGameOver] = useState(false);
  const { pos, setPos } = usePlayerMovement(
    config.obstacles,
    config.playerStart,
    isGameOver
  );
  const { money, setMoney, updateMoney, collected, resetCollected } =
    useMoney();

  const [time, setTime] = useState(0);

  const [gameOverMessage, setGameOverMessage] = useState("");

  useEffect(() => {
    let interval;

    if (!settings.timeLimited) {
      interval = setInterval(() => setTime((t) => t + 1), 1000);
    } else {
      setTime(settings.timeLimit);

      interval = setInterval(() => {
        setTime((t) => {
          if (t <= 1) {
            clearInterval(interval);
            setIsGameOver(true);
            setGameOverMessage("Time is up!");
            onFinish();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerKey, settings.timeLimited]);

  useEffect(() => {
    resetCollected();
    setPos(config.playerStart);
    setMoney(config.money);
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

    if (settings.coinsRequired && collected !== totalCoins) return;

    if (level === maxLevel) {
      setIsGameOver(true);
      setGameOverMessage("All levels completed!");
      onFinish();
      return;
    }

    nextLevel(level);
  });

  const restart = () => {
    restartGame();
    setIsGameOver(false);
    setGameOverMessage("");
    setTime(settings.timeLimit);
    setTimerKey((k) => k + 1);
    resetCollected();
    setMoney(config.money);
    setPos(config.playerStart);
  };
  const totalCoins = config.money.length;
  const exitActive = !settings.coinsRequired || collected === totalCoins;

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
    exitActive,
    gameOverMessage,
    restart,
  };
};
