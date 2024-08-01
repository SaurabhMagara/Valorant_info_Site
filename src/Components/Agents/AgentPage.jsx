import axios from "axios";
import { useAgentContext } from "../Context/AgentContext";
import { useCallback, useEffect, useState } from "react";
import Nav from "../Navbar/Nav";

const AgentPage = () => {
  const { uuid } = useAgentContext();
  const [data, setData] = useState();

  const fetchData = useCallback(async () => {
    const url = `https://valorant-api.com/v1/agents/${uuid}`;
    const res = await axios.get(url);
    console.log(res.data.data);

    const agent = res.data?.data;
    setData(agent);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col bg-gray-900 w-full h-full scroll-smooth items-center">
        <Nav />
        <div className=" flex  flex-col justify-center items-center my-5 h-full w-full">
          <h1 className="text-red-500 font-sans text-4xl subpixel-antialiased md:text-5xl mb-4 font-extrabold">
            {data?.displayName}
          </h1>
          <div className="flex justify-center items-center w-9/12 ">
            <div className=" border-b-2 border-red-500 w-full mt-2"></div>
          </div>
        </div>
        <div className=" flex flex-wrap flex-col p-2 justify-center items-center bg-gray-700 rounded-xl shadow-md w-11/12 md:w-8/12 md:h-2/3 ">
          <img
            src={data?.fullPortrait}
            alt={data?.displayName}
            className=" hover:brightness-110 hover:scale-105 duration-500 ease-in-out "
          />
        </div>
        <div className="flex flex-col w-10/12 md:w-9/12 md:px-3 py-3 ">
          <h1 className=" text-xl md:text-2xl text-red-500 font-bold">
            Name : {data?.displayName}
          </h1>
          <div className="flex justify-center items-center w-2/5 ">
            <div className=" border-b-2 border-red-500 w-full"></div>
          </div>
          <p className="text-justify text-lg  text-gray-300 py-1">
            <span className=" font-bold subpixel-antialiased">
              Description :{" "}
            </span>
            {data?.description}{" "}
          </p>
          <h1 className=" text-xl md:text-2xl text-red-500 my-2 font-bold">
            Role : {data?.role?.displayName}
          </h1>
          <div className="flex justify-center items-center w-2/5 ">
            <div className=" border-b-2 border-red-500 w-full"></div>
          </div>
          <p className="text-justify text-lg  text-gray-300 py-1">
            <span className=" font-bold subpixel-antialiased">
              Description :{" "}
            </span>
            {data?.role?.description}
          </p>
          <h1 className=" text-xl md:text-2xl text-red-500 my-2 font-extrabold">
            Abilities :
          </h1>
          <div className="flex justify-center items-center w-2/5 ">
            <div className=" border-b-2 border-red-500 w-full"></div>
          </div>
          <div className="flex flex-col flex-wrap">
            {
              data?.abilities.map((val, i)=>{
                return <AbilitiesCard key={i} name={val?.displayName} description={val?.description} />
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentPage;

const AbilitiesCard = ({ name, description }) => {
  return (
    <>
      <div className="flex flex-col flex-wrap gap-1 px-3 mb-4 md:px-5">
        <h2 className="text-xl md:text-2xl text-red-400  font-bold subpixel-antialiased">
        Name : {name} 
        </h2>
        <p className="text-justify text-lg  text-gray-300 py-1">
          <span className=" font-bold subpixel-antialiased">
            Description :{" "}
          </span>
          {description}
        </p>
      </div>
    </>
  );
};
