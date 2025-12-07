import styles from "./Obstacles.module.css";

const Obstacles = ({ obstacles }) => {
  return (
    <>
      {obstacles.map((o, i) => (
        <div
          key={i}
          className={styles.obstacle}
          style={{
            left: o.x,
            top: o.y,
            width: o.width,
            height: o.height,
          }}
        />
      ))}
    </>
  );
};


export default Obstacles;
