import styles from "./Player.module.css";

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
