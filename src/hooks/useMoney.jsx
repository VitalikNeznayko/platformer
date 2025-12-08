import { useState, useRef } from "react";

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
      })
    );
  };

   const resetCollected = () => {
     setCollected(0);
     collectedSet.current.clear();
   };

  return { money, setMoney, updateMoney, collected, resetCollected };
};
