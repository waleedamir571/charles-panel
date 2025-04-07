import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRouter from "./router/AppRouter";
import useScriptLoader from "./utils/loadScripts";

function App() {
  useScriptLoader();
  return (
    <>
      <Router>
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
