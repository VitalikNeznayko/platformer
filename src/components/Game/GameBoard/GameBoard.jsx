import styles from "./GameBoard.module.css";
import LevelInfo from "../LevelInfo/LevelInfo";
import Money from "../Money/Money";
import Obstacle from "../Obstacle/Obstacle";
import Player from "../Player/Player";

const GameBoard = ({ pos }) => {
  console.log("GameBoard pos:", pos);
  return (
    <div className={styles.board}>
      <Player pos={pos} />
    </div>
  );
};

export default GameBoard;
