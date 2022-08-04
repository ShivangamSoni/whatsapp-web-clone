import { createRoot } from "react-dom/client";

import App from "./App";

import { StateProvider } from "./context/stateContext";
import { reducer, initialState } from "./context/store";

const root = createRoot(document.getElementById("root"));
root.render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <App />
  </StateProvider>,
);
