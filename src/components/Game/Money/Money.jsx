import styles from "./Money.module.css";


/**
 * @module Game
 */

/**
 * Money component for displaying money in the game
 * @param {number} props.x - X coordinate of the money
 * @param {number} props.y - Y coordinate of the money
 * @returns {JSX.Element}
 */
const Money = ({ x, y }) => {
  return (
    <div
      className={styles.money}
      style={{
        left: x + "px",
        top: y + "px",
      }}
    />
  );
};

export default Money;
