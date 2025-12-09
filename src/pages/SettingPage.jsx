import Title from "../components/UI/Title/Title";
import SettingsForm from "../components/SettingsForm/SettingsForm";

const SettingsPage = ({ onBack }) => {
  return (
    <div style={{ padding: 20 }}>
      <Title text="Game Settings" />
      <SettingsForm onBack={onBack} />
    </div>
  );
};

export default SettingsPage;
