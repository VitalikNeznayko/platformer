import { useEffect } from "react";
import { useScore } from "./useScore";
import { useLevelFlow } from "./useLevelFlow";
import { usePlayerMovement } from "./usePlayerMovement";
import { useMoney } from "./useMoney";
import { useDeadlyCollisions } from "./useDeadlyCollisions";
import { useExitDoor } from "./useExitDoor";

export const useGameLogic = (
  onFinish,
  obstacles = [],
  deadly = [],
  exitDoor
) => {
  const { score, addScore, resetScore } = useScore();
  const { level, nextLevel } = useLevelFlow(onFinish);
  const { pos, setPos } = usePlayerMovement(obstacles);
  const { money, setMoney, updateMoney } = useMoney(addScore);

  const exitActive = money.length === 0;

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

  useExitDoor(
    pos,
    exitDoor,
    () => {
      nextLevel(score);
      setPos({ x: 100, y: 610 });
    },
    exitActive
  );

  return {
    pos,
    level,
    score,
    money,
    nextLevel:() => {
      nextLevel(score);
      setPos({ x: 100, y: 610 });
      
    } 
  };
};

