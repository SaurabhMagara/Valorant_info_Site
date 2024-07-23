import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Agents from "./Components/Agents/Agents.jsx";

const App = ()=> {

  return (
    <>
      <div className="flex flex-col bg-gray-900 w-full h-full scroll-smooth">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route exact path="/agents" element={<Agents/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
