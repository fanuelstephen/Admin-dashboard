import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [oppenSidebarToggle, setOppenSiderbarToggle] = useState(false);

  const openSiderbar = () => {
    setOppenSiderbarToggle(!oppenSidebarToggle);
  };
  return (
    <div className="grid-container">
      <Header openSiderbar={openSiderbar} />
      <Sidebar
        oppenSidebarToggle={oppenSidebarToggle}
        openSiderbar={openSiderbar}
      />
      <Home />
    </div>
  );
}

export default App;
