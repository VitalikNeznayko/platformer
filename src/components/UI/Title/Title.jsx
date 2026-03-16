import styles from "./Title.module.css";

/**
 * @module UI
 */

/**
 * Title component for displaying page titles
 * @param {Object} props - Component props
 * @param {string} props.text - Title text
 * @returns {JSX.Element}
 */
const Title = ({ text }) => {
  return <h1 className={styles.title}>{text}</h1>;
};

export default Title;
