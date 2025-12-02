import { useState } from "react";

export const useGameLogic = (onFinish) => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);

  const addScore = (amount = 10) => {
    setScore((prev) => prev + amount);
  };

  const completeLevel = () => {
    if (level < 2) {
      setLevel((prev) => prev + 1);
    } else {
      onFinish(score);
    }
  };

  const resetGame = () => {
    setLevel(1);
    setScore(0);
  };

  return {
    level,
    score,
    addScore,
    completeLevel,
    resetGame,
  };
};

export default useGameLogic;
