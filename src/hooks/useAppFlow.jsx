import { useState, useEffect } from "react";

export const PAGES = {
  START: "start",
  GAME: "game",
  SETTING: "setting",
  RESULT: "result",
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

  const finishGame = () => {
    setPage(PAGES.RESULT);
  };

  const menuGame = () => {
    setPage(PAGES.START);
  };

  return {
    page,
    startGame,
    settingGame,
    finishGame,
    menuGame,
  };
};
