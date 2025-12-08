import { useState } from "react";

export const useLevelFlow = (onFinish) => {
  const [level, setLevel] = useState(1);

  const nextLevel = (score) => {
    if (level === 1) {
      setLevel(2);
    } else {
      onFinish(score);
    }
  };

  return { level, nextLevel };
};
