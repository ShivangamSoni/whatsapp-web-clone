import "./assets/global.css";
import "./app.css";
import Sidebar from "./features/sidebar/Sidebar";

const App = () => {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
