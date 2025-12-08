import styles from "./GameBoard.module.css";
import Obstacle from "../Obstacle/Obstacle";
import Dangerous from "../Dangerous/Dangerous";
import Money from "../Money/Money";
import Player from "../Player/Player";

const GameBoard = ({ pos, obstacles = [], deadly = [], money = [] }) => {
  return (
    <div className={styles.board}>
      {obstacles.map((o) => (
        <Obstacle key={o.id} o={o} />
      ))}

      {deadly.map((o) => (
        <Dangerous key={o.id} o={o} />
      ))}

      {money.map((m) => (
        <Money key={m.id} x={m.x} y={m.y} />
      ))}

      <Player pos={pos} />
    </div>
  );
};

export default GameBoard;
