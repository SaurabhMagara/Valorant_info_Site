import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Agents from "./Components/Agents/Agents.jsx";

const App = () => {

  return (

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/agents" element={<Agents />} />
      </Routes>

  )
}

export default App
