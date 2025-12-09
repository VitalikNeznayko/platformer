import { createContext, useContext, useState, useEffect } from "react";

const SettingsContext = createContext(null);

const defaultSettings = {
  difficulty: "easy",
  coinsRequired: false,
  timeLimited: false,
  timeLimit: 0,
};


export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("gameSettings");
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem("gameSettings", JSON.stringify(settings));
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
