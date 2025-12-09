import ReactDOM from "react-dom/client";
import { SettingsProvider } from "./context/SettingsContext";
import App from "./App";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SettingsProvider>
    <App />
  </SettingsProvider>
);
