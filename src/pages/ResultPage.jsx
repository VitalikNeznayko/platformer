import Title from "../components/UI/Title";
import Button from "../components/UI/Button";

const ResultPage = ({ onRestart }) => {
  return (
    <div className="page result-page">
      <Title text="Гру завершено!" />   
      <Button onClick={onRestart} text="Спробувати знову" />
    </div>
  );
}

export default ResultPage;