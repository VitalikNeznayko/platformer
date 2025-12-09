import GameBoard from "../components/Game/GameBoard/GameBoard";
import GameHUD from "../components/UI/GameHUD/GameHUD";
import GameOverModal from "../components/UI/Modal/GameOverModal";
import { useState } from "react";
import { useGameLogic } from "../hooks/useGameLogic";

const GamePage = ({ onBack, onRestart }) => {
  const [showModal, setShowModal] = useState(false);

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
    exitActive,
    gameOverMessage,
  } = useGameLogic(() => setShowModal(true));

  return (
    <div>
      <GameHUD
        level={level}
        collected={collected}
        total={totalCoins}
        time={time}
        onBack={onBack}
      />

      <GameBoard
        pos={pos}
        obstacles={obstacles}
        deadly={deadly}
        money={money}
        exitDoor={exitDoor}
        exitActive={exitActive}
      />

      <GameOverModal
        isOpen={showModal}
        onRestart={onRestart}
        message={gameOverMessage}
        onMenu={onBack}
      />
    </div>
  );
};

export default GamePage;
