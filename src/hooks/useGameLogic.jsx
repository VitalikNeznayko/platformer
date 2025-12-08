import { useEffect } from "react";
import { useScore } from "./useScore";
import { useLevelFlow } from "./useLevelFlow";
import { usePlayerMovement } from "./usePlayerMovement";
import { useMoney } from "./useMoney";
import { useDeadlyCollisions } from "./useDeadlyCollisions";

export const useGameLogic = (onFinish, obstacles = [], deadly = []) => {
  const { score, addScore, resetScore } = useScore();
  const { level, nextLevel } = useLevelFlow(onFinish);
  const { pos, setPos } = usePlayerMovement(obstacles);
  const { money, setMoney, updateMoney } = useMoney(addScore);

  useEffect(() => {
    setMoney([
      { id: 1, x: 200, y: 580 },
      { id: 2, x: 400, y: 480 },
      { id: 3, x: 700, y: 580 },
    ]);
  }, [level]);

  useEffect(() => {
    updateMoney(pos);
  }, [pos]);

  const restartLevel = () => {
    resetScore(); 
    setPos({ x: 100, y: 610 }); 
    setMoney([
      { id: 1, x: 200, y: 580 },
      { id: 2, x: 400, y: 480 },
      { id: 3, x: 700, y: 580 },
    ]);
  };

  useDeadlyCollisions(pos, deadly, restartLevel);

  const goNextLevel = () => {
    nextLevel(score);
    setPos({ x: 100, y: 610 });
  };

  return {
    pos,
    level,
    score,
    money,
    nextLevel: goNextLevel,
  };
};
