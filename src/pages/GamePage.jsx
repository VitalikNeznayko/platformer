import GameBoard from "../components/Game/GameBoard";
import Button from "../components/UI/Button";
import { useGameLogic } from "../hooks/useGameLogic";

const GamePage = ({ onFinish }) => {
  const { level, score, addScore, completeLevel } = useGameLogic(onFinish);

  return (
    <div className="game-page">
      <p>Level: {level}</p>
      <p>Score: {score}</p>

      <GameBoard level={level} score={score} onBonus={addScore} />

      <Button
        text={level === 2 ? "Finish Game" : `Next level (${level + 1})`}
        onClick={completeLevel}
      />
    </div>
  );
};

export default GamePage;
