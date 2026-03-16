import { useEffect } from "react";

/**
 * @module Hooks
 */

/**
 * useExitDoor hook for detecting collisions with the exit door in the game
 *
 * @param {Object} pos - Player position
 * @param {Object} exitZone - Exit door bounding box
 * @param {Function} onExit - Callback when player reaches the exit
 * @param {boolean} [isActive=true] - Whether the exit is active
 * @returns {void}
 */
export const useExitDoor = (pos, exitZone, onExit, isActive) => {
  const playerSize = 40;

  const collide = (p, z) =>
    p.x < z.x + z.width &&
    p.x + playerSize > z.x &&
    p.y < z.y + z.height &&
    p.y + playerSize > z.y;

  useEffect(() => {
    if (exitZone && collide(pos, exitZone)) {
      onExit();
    }
  }, [pos, exitZone, isActive, onExit]);
};
