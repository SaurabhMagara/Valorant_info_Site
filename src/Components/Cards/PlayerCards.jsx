import axios from "axios";
import { useEffect, useState, useRef, useCallback } from "react";
import Nav from "../Nav";

const PlayerCards = () => {
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState();

  const [page, setPage] = useState(1);
  const cardsPerPage = 30;
  const lastIdx = page * cardsPerPage;
  const startIdx = lastIdx - cardsPerPage;
  const totalPages = Math.ceil(data.length / cardsPerPage);
  const numbers = [...Array(totalPages + 1).keys()].slice(1);

  const topRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    fetchData();
    topRef?.current.scrollIntoView();
    setLoading(false);
  }, [page, setPage]);

  const fetchData = useCallback(async () => {
    const res = await axios.get("https://valorant-api.com/v1/playercards");
    const filteredCards = res.data?.data;
    setCards(filteredCards.slice(startIdx, lastIdx));
    setData(filteredCards);
  }, [cards, data, setCards, page]);

  const handleInput = useCallback((e)=>{
    setLoading(true);

    setInput(e.target.value);
    const filteredCards = data.filter(val=>val.displayName.toLowerCase().includes(e.target.value.toLowerCase()));
    setCards(filteredCards);
    console.log(filteredCards);

    setLoading(false);
  },[cards, data, input])

  return (
    <>
      <div
        className="flex flex-col justify-center items-center bg-gray-900 w-full h-full scroll-smooth"
        ref={topRef}
      >
        <Nav />
        <div className=" flex  flex-col justify-center items-center my-5 h-full w-full">
          <h1 className="text-red-500 text-3xl font-sans font-semibold md:text-5xl mb-4 shadow subpixel-antialiased">
            Player Cards
          </h1>
          
          <div className="flex justify-center items-center w-8/12 md:mt-2">
            <div className=" border-b-2 border-red-500 w-full my-3"></div>
          </div>
        </div>
        <div className=" md:border flex justify-center items-center  text-white w-11/12 flex-wrap mb-5 md:w-auto">
          <span
            className={`my-1 md:my-0 py-1 px-2 bg-red-500 hover:cursor-pointer hover:scale-90 ${
              page == 1 ? "hidden" : ""
            }`}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </span>
          {numbers.map((v, i) => {
            return (
              <span
                key={i}
                className={`${
                  page == v ? "bg-red-500 text-gray-300 border" : ""
                } py-1 px-2 bg-gray-800 hover:cursor-pointer hover:bg-red-500 hover:scale-90 `}
                onClick={() => setPage(v)}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={`my-1 md:my-0 py-1 px-2 bg-green-500 hover:cursor-pointer hover:scale-90 ${
              page == totalPages ? "hidden" : ""
            }`}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </span>
        </div>
        <div className="flex justify-evenly items-center gap-2 flex-wrap w-11/12 md:w-full">
          {cards.map((val) => {
            return (
              <PlayerCard
                key={val?.uuid}
                img={val?.largeArt}
                name={val?.displayName}
              />
            );
          })}
        </div>
        <div className=" md:border flex justify-center items-center  text-white w-11/12 flex-wrap mb-5 md:w-auto">
          <span
            className={`my-1 md:my-0 py-1 px-2 bg-red-500 hover:cursor-pointer hover:scale-90 ${
              page == 1 ? "hidden" : ""
            }`}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </span>
          {numbers.map((v, i) => {
            return (
              <span
                key={i}
                className={`${
                  page == v ? "bg-red-500 text-gray-300 border" : ""
                } py-1 px-2 bg-gray-800 hover:cursor-pointer hover:bg-red-500 hover:scale-90 `}
                onClick={() => setPage(v)}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={`my-1 md:my-0 py-1 px-2 bg-green-500 hover:cursor-pointer hover:scale-90 ${
              page == totalPages ? "hidden" : ""
            }`}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </span>
        </div>
      </div>
    </>
  );
};

export default PlayerCards;

const PlayerCard = ({ name, img, i }) => {
  return (
    <>
      <div className="text-white bg-slate-800  py-2 px-3 rounded-md flex flex-col gap-2 justify-center items-center flex-wrap hover:bg-gray-900 hover:border hover:cursor-pointer shadow-md mb-2  transition-all duration-500">
        <div className="flex justify-center items-center overflow-hidden rounded  ">
          <img
            src={img}
            alt={name}
            className="h-auto rounded hover:scale-110 duration-500 hover:brightness-110 w-[268px]  "
          />
        </div>
        <div className="flex flex-col justify-start w-[268px]">
          <h2 className="text-slate-950 subpixel-antialiased px-3 font-semibold  bg-slate-400 rounded-lg ">
            Name : {name} {i}
          </h2>
        </div>
      </div>
    </>
  );
};