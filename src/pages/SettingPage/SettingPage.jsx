import { useNavigate, useParams } from "react-router-dom";
import Title from "../../components/UI/Title/Title";
import SettingsForm from "../../components/SettingsForm/SettingsForm";

import styles from "./SettingPage.module.css";

const SettingPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className={styles.wrapper}>
      <div className={styles.panel}>
        <Title text="Game Settings" />

        <SettingsForm onBack={() => navigate(`/${id}`)} />
      </div>
    </div>
  );
};

export default SettingPage;
