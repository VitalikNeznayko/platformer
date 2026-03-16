import { useState } from "react";
import { LEVELS } from "../config/levels";

/**
 * @module Hooks
 */

/**
 * useLevelFlow hook for managing level flow in the game
 *
 * @param {Function} onFinish - Callback fired when the last level is completed
 * @returns {Object} - Hook API
 * @returns {number} return.level - Current level
 * @returns {Function} return.nextLevel - Move to next level
 * @returns {Function} return.goToLevel - Jump to specific level
 * @returns {Function} return.restartGame - Restart the game from level 1
 */
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

  const restartGame = () => {
    setLevel(1);
  };

  return { level, nextLevel, goToLevel, restartGame };
};
