import { Routes, Route } from "react-router-dom";
import {PlayerCards, AgentPage, Agents, Maps, GameModes, Buddies, Weapons, Home} from "./Components/index.js"
import { useAgentContext } from "./Components/Context/AgentContext.jsx";

const App = () => {
  const {uuid} = useAgentContext();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/agents" element={<Agents />} />
      <Route exact path="/weapons" element={<Weapons />} />
      <Route exact path="/maps" element={<Maps />} />
      <Route exact path="/cards" element={<PlayerCards />} />
      <Route exact path="/buddies" element={<Buddies />} />
      <Route exact path="/gamemodes" element={<GameModes />} />
      <Route exact path={`/agent`} element={<AgentPage />} />
    </Routes>
  )
}

export default App;
