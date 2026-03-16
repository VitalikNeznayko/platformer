import styles from "./Obstacle.module.css";

/**
 * @module Game
 */

/**
 * Obstacle component for displaying obstacles in the game
 * @param {Object} props.o - Obstacle properties with x, y, width, and height
 * @returns {JSX.Element}
 */
const Obstacle = ({ o }) => {
  return (
    <div
      className={styles.obstacle}
      style={{
        left: o.x,
        top: o.y,
        width: o.width,
        height: o.height,
      }}
    />
  );
};

export default Obstacle;
