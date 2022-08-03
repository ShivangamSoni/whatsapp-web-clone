import { createRoot } from "react-dom/client";

import App from "./App";
import { UserProvider } from "./context/user";

const root = createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <App />
  </UserProvider>,
);
