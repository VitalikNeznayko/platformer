import { useState } from "react";

export const useMoney = (addScore) => {
  const [money, setMoney] = useState([]);

  const coinSize = 20;
  const playerSize = 40;

  const isColliding = (p, c) =>
    p.x < c.x + coinSize &&
    p.x + playerSize > c.x &&
    p.y < c.y + coinSize &&
    p.y + playerSize > c.y;

  const updateMoney = (playerPos) => {
    setMoney((prev) =>
      prev.filter((coin) => {
        if (isColliding(playerPos, coin)) {
          addScore(1);
          return false;
        }
        return true;
      })
    );
  };

  return { money, setMoney, updateMoney };
};
