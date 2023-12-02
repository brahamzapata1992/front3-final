import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";

function App() {
  const {
    state: { isDark },
  } = useContext(ContextGlobal);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="App">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
