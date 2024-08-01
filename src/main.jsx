import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";
import { PlayerCards, AgentPage, Agents, Maps, GameModes, Buddies, Weapons, Home } from "./Components/index.js";
import { AgentContextProvider } from "./Context/AgentContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/weapons" element={<Weapons />} />
      <Route path="/maps" element={<Maps />} />
      <Route path="/cards" element={<PlayerCards />} />
      <Route path="/buddies" element={<Buddies />} />
      <Route path="/gamemodes" element={<GameModes />} />
      <Route path="/agent" element={<AgentPage />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AgentContextProvider>
      <RouterProvider router={router} />
    </AgentContextProvider>
  </React.StrictMode>
);
