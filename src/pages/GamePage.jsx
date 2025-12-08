import GameBoard from "../components/Game/GameBoard/GameBoard";
import GameHUD from "../components/UI/GameHUD/GameHUD";
import Button from "../components/UI/Button/Button";
import { useGameLogic } from "../hooks/useGameLogic";

const obstacles = [
  { x: 300, y: 700, width: 150, height: 70 },
  { x: 700, y: 650, width: 200, height: 50 },
];

const deadly = [
  { id: 100, x: 500, y: 720, width: 40, height: 30 },
  { id: 101, x: 900, y: 720, width: 40, height: 30 },
];

const exitDoor = { x: 1100, y: 700, width: 40, height: 80 };

const GamePage = ({ onFinish }) => {
  const { pos, level, money, collected, totalCoins, time } = useGameLogic(
    onFinish,
    obstacles,
    deadly,
    exitDoor
  );

  return (
    <div>
        <GameHUD
          level={level}
          collected={collected}
          total={totalCoins}
          time={time}
        />

        <GameBoard
          pos={pos}
          obstacles={obstacles}
          deadly={deadly}
          money={money}
          exitDoor={exitDoor}
        />
    </div>
  );
};

export default GamePage;
