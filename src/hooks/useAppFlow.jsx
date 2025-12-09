import { useState, useEffect } from "react";

export const PAGES = {
  START: "start",
  GAME: "game",
  SETTING: "setting",
};

export const useAppFlow = () => {
  const [page, setPage] = useState(() => {
    return localStorage.getItem("appPage") || PAGES.START;
  });

  useEffect(() => {
    localStorage.setItem("appPage", page);
  }, [page]);

  const startGame = () => {
    setPage(PAGES.GAME);
  };

  const settingGame = () => {
    setPage(PAGES.SETTING);
  };

  const menuGame = () => {
    setPage(PAGES.START);
  };

  const restartGame = () => {
    setPage(PAGES.GAME);
    window.location.reload();
  };

  return {
    page,
    startGame,
    settingGame,
    menuGame,
    restartGame,
  };
};
