import { createContext, useState, useContext } from "react";

export const AgentContext = createContext();

export const useAgentContext = ()=>{
    return useContext(AgentContext);
}

export const AgentContextProvider = ({children})=>{

    const [uuid, setUuid] = useState(null);

    return <AgentContext.Provider value={{uuid, setUuid}}> 
        {children}
    </AgentContext.Provider>
}
