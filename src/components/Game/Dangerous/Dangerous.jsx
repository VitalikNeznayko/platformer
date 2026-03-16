/**
 * @module Game
 */
import styles from "./Dangerous.module.css";

/**
 * Dangerous component for displaying dangerous areas in the game
 *
 * @param {Object} props - Component props
 * @param {Object} props.o - Dangerous object with position and size
 * @param {number} props.o.x - X position
 * @param {number} props.o.y - Y position
 * @param {number} props.o.width - Width of the dangerous area
 * @param {number} props.o.height - Height of the dangerous area
 * @returns {JSX.Element}
 */
const Dangerous = ({ o }) => {
  return (
    <div
      className={styles.danger}
      style={{ left: o.x, top: o.y, width: o.width, height: o.height }}
    />
  );
};

export default Dangerous;
