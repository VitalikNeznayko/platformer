import { create } from "zustand";

const defaultSettings = {
  difficulty: "normal",
  coinsRequired: true,
  timeLimited: false,
  timeLimit: 0,
};

export const useSettingsStore = create((set) => ({
  settings: (() => {
    const saved = localStorage.getItem("game_settings");
    return saved ? JSON.parse(saved) : defaultSettings;
  })(),

  setSettings: (newSettings) =>
    set((state) => {
      const updated = { ...state.settings, ...newSettings };
      localStorage.setItem("game_settings", JSON.stringify(updated));
      return { settings: updated };
    }),

  resetSettings: () => {
    localStorage.setItem("game_settings", JSON.stringify(defaultSettings));
    set({ settings: defaultSettings });
  },
}));
