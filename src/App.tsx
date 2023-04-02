import { RouterProvider } from "react-router-dom";
import { NavBar } from "./components/navBar/NavBar";
import { router } from "./router";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <NavBar />
    </div>
  );
}

export default App;
