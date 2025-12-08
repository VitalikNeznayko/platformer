import { useEffect } from "react";
import { useScore } from "./useScore";
import { useLevelFlow } from "./useLevelFlow";
import { usePlayerMovement } from "./usePlayerMovement";
import { useMoney } from "./useMoney";

export const useGameLogic = (onFinish, obstacles = []) => {
  const { score, addScore } = useScore();
  const { level, nextLevel } = useLevelFlow(onFinish);
  const { pos, setPos } = usePlayerMovement(obstacles);

  const { money, setMoney, updateMoney } = useMoney(addScore);

  useEffect(() => {
    setMoney([
      { id: 1, x: 200, y: 580 },
      { id: 2, x: 400, y: 480 },
      { id: 3, x: 700, y: 580 },
    ]);
  }, [level, setMoney]);

  useEffect(() => {
    updateMoney(pos);
  }, [pos]);

  const goNextLevel = () => {
    nextLevel(score);

    if (level === 1) {
      setPos({ x: 100, y: 610 });
    }
  };

  return {
    pos,
    level,
    score,
    money,
    nextLevel: goNextLevel,
  };
};
