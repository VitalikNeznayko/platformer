import styles from "./GameBoard.module.css";
import Obstacles from "../Obstacles/Obstacles";
import Player from "../Player/Player";

const GameBoard = ({ pos, obstacles }) => {
  return (
    <div className={styles.board}>
      <Obstacles obstacles={obstacles} />
      <Player pos={pos} />
    </div>
  );
};

export default GameBoard;
