import { useNavigate, useParams} from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import Title from "../../components/UI/Title/Title";
import styles from "./StartPage.module.css";
import { current } from "@reduxjs/toolkit";

const StartPage = ({ userId }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentUserId = id || userId;
  return (
    <div className={styles.wrapper}>
      <div className={styles.panel}>
        <Title text="Platformer" />

        <div className={styles.buttons}>
          <Button
            text="Start Game"
            onClick={() => navigate(`/${currentUserId}/game`)}
          />
          <Button
            text="Settings"
            onClick={() => navigate(`/${currentUserId}/settings`)}
          />
        </div>
      </div>
    </div>
  );
};

export default StartPage;
