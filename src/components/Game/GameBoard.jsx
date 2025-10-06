import LevelInfo from "./LevelInfo";
import Money from "./Money";
import Obstacle from "./Obstacle";
import Player from "./Player";

const GameBoard = ({ level }) => {
  return (
    <div className="game-board">
      <LevelInfo level={level} />
      <div>
      <Player />
      </div>
      <Obstacle />
      <Money />
    </div>
  );
};

export default GameBoard;
