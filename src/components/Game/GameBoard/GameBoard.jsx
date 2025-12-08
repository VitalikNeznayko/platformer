import styles from "./GameBoard.module.css";
import Obstacles from "../Obstacles/Obstacles";
import Money from "../Money/Money";
import Player from "../Player/Player";

const GameBoard = ({ pos, obstacles, money = [] }) => {

  return (
    <div className={styles.board}>
      <Obstacles obstacles={obstacles} />

      {money.map((m) => (
        <Money key={m.id} x={m.x} y={m.y} />
      ))}
      
      <Player pos={pos} />
    </div>
  );
};

export default GameBoard;
