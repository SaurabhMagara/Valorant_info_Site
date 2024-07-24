import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Agents from "./Components/Agents/Agents.jsx";
import Weapons from "./Components/Weapons/Weapons.jsx";

const App = () => {

  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/agents" element={<Agents />} />
        <Route exact path="/weapons" element={<Weapons />} />
      </Routes>

  )
}

export default App
