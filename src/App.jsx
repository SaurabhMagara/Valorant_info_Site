import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Agents from "./Components/Agents/Agents.jsx";
import Weapons from "./Components/Weapons/Weapons.jsx";
import Maps from "./Components/Maps/Maps.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/agents" element={<Agents />} />
      <Route exact path="/weapons" element={<Weapons />} />
      <Route exact path="/maps" element={<Maps />} />
    </Routes>
  )
}

export default App;
