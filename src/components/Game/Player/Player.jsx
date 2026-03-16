import styles from "./Player.module.css";

/**
 * @module Game
 */

/**
 * Player component for displaying the player in the game
 * @param {Object} props.pos - Player position with x and y coordinates
 * @returns {JSX.Element}
 */
const Player = ({ pos }) => {
  return (
    <div
      className={styles.player}
      style={{
        left: pos.x,
        top: pos.y,
      }}
    />
  );
};


export default Player;
