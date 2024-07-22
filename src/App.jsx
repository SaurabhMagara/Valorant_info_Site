import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./Components/Home.jsx";

const App = ()=> {
const [data, setData] = useState([]);
  useEffect(()=>{
    // fetchData();
  },[]);

  const fetchData = async ()=>{
      const res = await axios.get("https://valorant-api.com/v1/agents");
      console.log(res.data.data);
  }

  return (
    <>
      <div className="flex flex-col bg-gray-900 w-full h-full">
          <Home />
      </div>
    </>
  )
}

export default App
