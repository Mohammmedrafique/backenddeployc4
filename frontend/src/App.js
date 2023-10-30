import "./App.css";
import { MainRoutes } from "./Rout/MainRoutes";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      Post Application
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
