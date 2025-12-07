import GameBoard from "../components/Game/GameBoard/GameBoard";
import Button from "../components/UI/Button/Button";
import { useGameLogic } from "../hooks/useGameLogic";

const obstacles = [
  { x: 300, y: 550, width: 150, height: 70 },
  { x: 700, y: 500, width: 200, height: 50 },
];

const GamePage = ({ onFinish }) => {
  const { pos, level, score, nextLevel } = useGameLogic(onFinish, obstacles);

  return (
    <div>
      <p>Level: {level}</p>
      <p>Score: {score}</p>

      <GameBoard pos={pos} obstacles={obstacles} />

      <Button
        text={level === 2 ? "Finish Game" : `Next level (${level + 1})`}
        onClick={nextLevel}
      />
    </div>
  );
};

export default GamePage;
