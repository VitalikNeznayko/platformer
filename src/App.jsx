import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import SettingPage from "./pages/SettingPage";
import { useAppFlow, PAGES } from "./hooks/useAppFlow";

function App() {
  const { page, startGame, settingGame, restartGame, menuGame } = useAppFlow();

  return (
    <div>
      {page === PAGES.START && (
        <StartPage onStart={startGame} onSetting={settingGame} />
      )}
      {page === PAGES.GAME && (
        <GamePage onBack={menuGame} onRestart={restartGame} />
      )}
      {page === PAGES.SETTING && <SettingPage onBack={menuGame} />}
    </div>
  );
}

export default App;
