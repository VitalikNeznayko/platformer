import styles from "./GameBoard.module.css";
import Obstacle from "../Obstacle/Obstacle";
import Dangerous from "../Dangerous/Dangerous";
import Money from "../Money/Money";
import Player from "../Player/Player";
import ExitDoor from "../ExitDoor/ExitDoor";

/**
 * @module Game
 */

/**
 * GameBoard component for displaying game elements and the player
 *
 * @param {Object} props - Component props
 * @param {Object} props.pos - Player position
 * @param {Array<Object>} [props.obstacles=[]] - List of obstacles
 * @param {Array<Object>} [props.deadly=[]] - List of deadly objects
 * @param {Array<Object>} [props.money=[]] - List of coins or money objects
 * @param {Object} [props.exitDoor] - Exit door position
 * @param {boolean} [props.exitActive] - Whether the exit is active
 * @returns {JSX.Element}
 */
const GameBoard = ({
  pos,
  obstacles = [],
  deadly = [],
  money = [],
  exitDoor,
  exitActive,
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
        <ExitDoor x={exitDoor.x} y={exitDoor.y} active={exitActive} />
      )}

      <Player pos={pos} />
    </div>
  );
};

export default GameBoard;
