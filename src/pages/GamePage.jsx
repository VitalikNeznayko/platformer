import GameBoard from "../components/Game/GameBoard/GameBoard";
import Button from "../components/UI/Button/Button";
import { useGameLogic } from "../hooks/useGameLogic";

const obstacles = [
  { x: 300, y: 550, width: 150, height: 70 },
  { x: 700, y: 500, width: 200, height: 50 },
];

const deadly = [
  { id: 100, x: 500, y: 580, width: 40, height: 30 },
  { id: 101, x: 900, y: 580, width: 40, height: 30 },
];

const exitDoor = { x: 1100, y: 560, width: 40, height: 80 };


const GamePage = ({ onFinish }) => {
  const { pos, score, level, money, nextLevel } = useGameLogic(
    onFinish,
    obstacles,
    deadly,
    exitDoor
  );

  return (
    <div>
      <p>Level: {level}</p>
      <p>Score: {score}</p>

      <GameBoard
        pos={pos}
        obstacles={obstacles}
        deadly={deadly}
        money={money}
        exitDoor={exitDoor}
      />

      <Button
        text={level === 2 ? "Finish Game" : `Next level (${level + 1})`}
        onClick={nextLevel}
      />
    </div>
  );
};

export default GamePage;
