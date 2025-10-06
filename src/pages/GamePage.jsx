import { useState } from "react";
import GameBoard from "../components/Game/GameBoard";
import Button from "../components/UI/Button";

const GamePage = ({ onFinish }) => {
  const [level, setLevel] = useState(1);

  const handleFinishLevel = () => {
    if (level < 2) setLevel(level + 1);
    else onFinish();
  };

  return (
    <div className="page game-page">
      <GameBoard level={level} />
      <Button
        text={level === 2 ? "Завершити гру" : `Перейти на рівень ${level + 1}`}
        onClick={handleFinishLevel}
      />
    </div>
  );
};

export default GamePage;
