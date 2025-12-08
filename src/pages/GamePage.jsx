import GameBoard from "../components/Game/GameBoard/GameBoard";
import GameHUD from "../components/UI/GameHUD/GameHUD";
import { useGameLogic } from "../hooks/useGameLogic";

const GamePage = ({ onFinish }) => {
  const {
    pos,
    level,
    money,
    collected,
    totalCoins,
    time,
    obstacles,
    deadly,
    exitDoor,
  } = useGameLogic(onFinish);

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
