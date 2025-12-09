import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultPage from "./pages/ResultPage";
import SettingPage from "./pages/SettingPage";
import { useAppFlow, PAGES } from "./hooks/useAppFlow";

function App() {
  const { page, score, startGame, settingGame, finishGame, menuGame } =
    useAppFlow();

  return (
    <div>
      {page === PAGES.START && (
        <StartPage onStart={startGame} onSetting={settingGame} />
      )}
      {page === PAGES.GAME && (
        <GamePage onFinish={finishGame} onBack={menuGame} />
      )}
      {page === PAGES.SETTING && <SettingPage onBack={menuGame} />}
      {page === PAGES.RESULT && (
        <ResultPage onRestart={menuGame} />
      )}
    </div>
  );
}

export default App;
