import styles from "./ExitDoor.module.css";

/**
 * @module Game
 */

/**
 * ExitDoor component for displaying the exit door in the game
 *
 * @param {Object} props - Component props
 * @param {number} props.x - X position of the door
 * @param {number} props.y - Y position of the door
 * @param {boolean} props.active - Whether the door is active
 * @returns {JSX.Element}
 */
const ExitDoor = ({ x, y, active }) => {
  return (
    <div
      className={`${styles.door} ${active ? styles.active : styles.inactive}`}
      style={{ left: x, top: y }}
    />
  );
};

export default ExitDoor;
