import { useState } from "react";

export const useScore = () => {
  const [score, setScore] = useState(0);

  const addScore = (value) => setScore((s) => s + value);

  const resetScore = () => setScore(0);

  return { score, addScore, resetScore };
};
