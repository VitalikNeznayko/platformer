import styles from "./Obstacle.module.css";

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
