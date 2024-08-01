import { useCallback, useEffect, useRef, useState } from "react";
import Nav from "../Navbar/Nav";
import axios from "axios";

const GameModes = () => {
  const [data, setData] = useState([]);
  const [gameModes, setGameModes] = useState([]);
  const [loding, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const res = await axios.get("https://valorant-api.com/v1/gamemodes");
    const fetchedGameModes = res.data.data.filter(
      (val) => val?.description !== null
    );

    setData(fetchedGameModes);
    setGameModes(fetchedGameModes);
    setLoading(false);
  }, [gameModes, data, setGameModes]);

  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gray-900 w-full h-full scroll-smooth">
        <Nav />
        <div className=" flex  flex-col justify-center items-center my-5 h-full w-full">
          <h1 className="text-red-500 text-4xl font-sans font-semibold md:text-5xl mb-4 shadow subpixel-antialiased">
            GameModes
          </h1>

          {/* Divider */}
          <div className="flex justify-center items-center w-8/12 md:mt-2 mb-3">
            <div className=" border-b-2 border-red-500 w-full my-2"></div>
          </div>
          {loding ? (
            <div>
              <p className="animate-pulse text-3xl text-white">Loading ...</p>
            </div>
          ) : (
            <div className="flex justify-evenly items-center gap-2 flex-wrap w-11/12">
              {gameModes.map((val) => {
                return (
                  <GameModesCard
                    key={val?.uuid}
                    name={val?.displayName}
                    description={val?.description}
                    duration={
                      val?.duration === null ? "Infinite" : val?.duration
                    }
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GameModes;

const GameModesCard = ({ name, description, duration }) => {
  return (
    <>
      <div className="flex bg-slate-800 flex-col gap-3 rounded-es-3xl rounded-se-3xl  w-96 md:h-64 py-3 px-2 rounded-lg overflow-hidden hover:cursor-pointer hover:scale-105 duration-500">
        <div className="bg-slate-400 py-5 w-full rounded-md md:h-1/4">
          <h2 className="text-slate-950 px-3 font-bold text-lg  subpixel-antialiased  ">
            GameMode Name :{" "}
            <span className="text-red-700 font-extrabold">{name}</span>
          </h2>
        </div>
        <div className="bg-slate-600 w-full rounded-es-3xl rounded-md rounded-se-3xl mb-1 md:h-3/4">
          <h3 className="text-black px-3 mt-2 font-bold subpixel-antialiased w-full">
            <span className="font-bold">Match Duration : </span>
            <span className="text-slate-950">{duration}</span>
          </h3>
          <p className=" text-black px-3 py-2 font-semibold  w-full">
            <span className=" font-bold subpixel-antialiased">
              Description :{" "}
            </span>
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
