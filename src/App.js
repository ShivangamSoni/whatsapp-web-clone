import { BrowserRouter } from "react-router-dom";

import "./assets/global.css";
import "./app.css";

import Sidebar from "./features/sidebar/Sidebar";
import Chat from "./features/chat/Chat";

const App = () => {
  return (
    <div className="app">
      <div className="app__body">
        <BrowserRouter>
          <Sidebar />
          <Chat />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
