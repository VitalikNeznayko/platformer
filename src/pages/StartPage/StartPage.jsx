import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import Title from "../../components/UI/Title/Title";
import styles from "./StartPage.module.css";

const StartPage = ({ userId }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.panel}>
        <Title text="Platformer" />

        <div className={styles.buttons}>
          <Button
            text="Start Game"
            onClick={() => navigate(`/${userId}/game`)}
          />
          <Button
            text="Settings"
            onClick={() => navigate(`/${userId}/settings`)}
          />
        </div>
      </div>
    </div>
  );
};

export default StartPage;
