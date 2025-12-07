import GameBoard from "../components/Game/GameBoard/GameBoard";
import Button from "../components/UI/Button/Button";
import { useGameLogic } from "../hooks/useGameLogic";

const GamePage = ({ onFinish }) => {
  const { pos, level, score, nextLevel } = useGameLogic(onFinish);

  return (
    <div>
      <p>Level: {level}</p>
      <p>Score: {score}</p>

      <GameBoard pos={pos} />

      <Button
        text={level === 2 ? "Finish Game" : `Next level (${level + 1})`}
        onClick={nextLevel}
      />
    </div>
  );
};

export default GamePage;
