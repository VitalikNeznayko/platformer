import { useState } from "react";
import { LEVELS } from "../config/levels";

export const useLevelFlow = (onFinish) => {
  const [level, setLevel] = useState(1);

  const nextLevel = (currentLevel) => {
    const maxLevel = Object.keys(LEVELS).length;

    if (currentLevel < maxLevel) {
      setLevel(currentLevel + 1);
    } else {
      onFinish(); 
    }
  };

  const goToLevel = (n) => {
    if (LEVELS[n]) setLevel(n);
  };

  return { level, nextLevel, goToLevel };
};
