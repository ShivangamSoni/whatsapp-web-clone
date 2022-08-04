import { createRoot } from "react-dom/client";

import "./assets/global.css";

import App from "./App";

import StateProvider from "./context/stateContext";
import reducer from "./context/store";

const root = createRoot(document.getElementById("root"));
root.render(
  <StateProvider reducer={reducer}>
    <App />
  </StateProvider>,
);
