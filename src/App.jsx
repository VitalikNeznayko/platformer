import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getUserId } from "./utils/getUserId";

import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import SettingPage from "./pages/SettingPage";

function App() {
  const userId = getUserId();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage userId={userId} />} />

        <Route path="/:id" element={<StartPage />} />
        <Route path="/:id/game" element={<GamePage />} />
        <Route path="/:id/settings" element={<SettingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
