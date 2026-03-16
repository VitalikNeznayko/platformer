import { useState, useRef } from "react";

/**
 * @module Hooks
 */

/**
 * useMoney hook for managing money in the game
 *
 * @returns {Object} - Hook API
 * @returns {Array<Object>} return.money - Array of money objects
 * @returns {Function} return.setMoney - Setter for money array
 * @returns {Function} return.updateMoney - Update money based on player position
 * @returns {number} return.collected - Number of collected coins
 * @returns {Function} return.resetCollected - Reset collected coins
 */
export const useMoney = () => {
  const [money, setMoney] = useState([]);
  const [collected, setCollected] = useState(0);

  const collectedSet = useRef(new Set());

  const coinSize = 20;
  const playerSize = 40;

  const checkCollision = (p, c) =>
    p.x < c.x + coinSize &&
    p.x + playerSize > c.x &&
    p.y < c.y + coinSize &&
    p.y + playerSize > c.y;

  const updateMoney = (playerPos) => {
    setMoney((prev) =>
      prev.filter((m) => {
        if (collectedSet.current.has(m.id)) return false;

        if (checkCollision(playerPos, m)) {
          collectedSet.current.add(m.id);
          setCollected((c) => c + 1);
          return false;
        }

        return true;
      }),
    );
  };

  const resetCollected = () => {
    setCollected(0);
    collectedSet.current.clear();
  };

  return { money, setMoney, updateMoney, collected, resetCollected };
};
