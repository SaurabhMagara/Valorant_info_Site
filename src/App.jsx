import { Routes, Route } from "react-router-dom";
import PlayerCards from "./Components/PlayerCards/PlayerCards.jsx";
import Agents from "./Components/Agents/Agents.jsx";
import AgentPage from "./Components/Agents/AgentPage.jsx";
import Weapons from "./Components/Weapons/Weapons.jsx";
import GameModes from "./Components/GameModes/GameModes.jsx";
import Maps from "./Components/Maps/Maps.jsx" ;
import Buddies from "./Components/Buddies/Buddies.jsx";
import Home from "./Components/Home/Home.jsx";
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
