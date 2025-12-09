import { useNavigate } from "react-router-dom";
import Title from "../components/UI/Title/Title";
import SettingsForm from "../components/SettingsForm/SettingsForm";

const SettingsPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 20 }}>
      <Title text="Game Settings" />
      <SettingsForm onBack={() => navigate("/")} />
    </div>
  );
};

export default SettingsPage;
