import styles from "./GameBoard.module.css";
import Obstacle from "../Obstacle/Obstacle";
import Dangerous from "../Dangerous/Dangerous";
import Money from "../Money/Money";
import Player from "../Player/Player";
import ExitDoor from "../ExitDoor/ExitDoor";


const GameBoard = ({
  pos,
  obstacles = [],
  deadly = [],
  money = [],
  exitDoor
}) => {
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

      {exitDoor && (
        <ExitDoor x={exitDoor.x} y={exitDoor.y} active={money.length === 0} />
      )}

      <Player pos={pos} />
    </div>
  );
};

export default GameBoard;
