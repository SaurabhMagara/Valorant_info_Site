import { useCallback, useEffect, useRef, useState } from "react";
import Nav from "../Nav";
import axios from "axios";

const Buddies = () => {
  const [data, setData] = useState([]);
  const [buddeis, setBuddies] = useState([]);
  const topRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 30;
  const lastIdx = currentPage * recordsPerPage;
  const startIdx = lastIdx - recordsPerPage;
  const totalPages = Math.ceil(data.length / recordsPerPage);
  const pageNos = [...Array(totalPages + 1).keys()].slice(1);

  useEffect(() => {

    fetchData();
    topRef.current.scrollIntoView();
    console.log(topRef);

  }, [setCurrentPage, currentPage]);

  const fetchData = useCallback(async () => {

    const res = await axios.get("https://valorant-api.com/v1/buddies");
    const fetchedBuddies = res.data.data;

    setData(fetchedBuddies);
    setBuddies(fetchedBuddies.slice(startIdx, lastIdx));

  }, [buddeis, pageNos, setCurrentPage, data, recordsPerPage, totalPages]);

  return (
    <>
      <div
        className="flex flex-col justify-center items-center bg-gray-900 w-full h-full scroll-smooth"
        ref={topRef}
      >
        <Nav />
        <div className=" flex  flex-col justify-center items-center my-5 h-full w-full">
          <h1 className="text-red-500 text-3xl font-sans font-semibold md:text-5xl mb-4 shadow subpixel-antialiased">
            Weapon Buddies
          </h1>

          {/* Divider */}
          <div className="flex justify-center items-center w-8/12 md:mt-2 mb-3">
            <div className=" border-b-2 border-red-500 w-full my-2"></div>
          </div>

          {/* Page no box */}

          <div className=" md:border flex justify-center items-center  text-white w-11/12 flex-wrap mb-5 md:w-auto">
            <span
              className={`my-1 md:my-0 py-1 px-2 bg-red-500 hover:cursor-pointer hover:scale-90 ${
                currentPage == 1 ? "hidden" : ""
              }`}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Prev
            </span>
            {pageNos.map((v, i) => {
              return (
                <span
                  key={i}
                  className={`${
                    currentPage == v ? "bg-red-500 text-gray-300 border" : ""
                  } py-1 px-2 bg-gray-800 hover:cursor-pointer hover:bg-red-500 hover:scale-90 `}
                  onClick={() => setCurrentPage(v)}
                >
                  {i + 1}
                </span>
              );
            })}
            <span
              className={`my-1 md:my-0 py-1 px-2 bg-green-500 hover:cursor-pointer hover:scale-90 ${
                currentPage == totalPages ? "hidden" : ""
              }`}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </span>
          </div>

          <div className="flex justify-evenly items-center gap-2 flex-wrap w-11/12">
            {buddeis.map((val) => {
              return (
                <BuddiesCard
                  key={val?.uuid}
                  name={val?.displayName}
                  img={val?.displayIcon}
                />
              );
            })}
          </div>

          {/* Page no box */}

          <div className=" md:border flex justify-center items-center  text-white w-11/12 flex-wrap mb-5 md:w-auto mt-2">
            <span
              className={`my-1 md:my-0 py-1 px-2 bg-red-500 hover:cursor-pointer hover:scale-90 ${
                currentPage == 1 ? "hidden" : ""
              }`}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Prev
            </span>
            {pageNos.map((v, i) => {
              return (
                <span
                  key={i}
                  className={`${
                    currentPage == v ? "bg-red-500 text-gray-300 border" : ""
                  } py-1 px-2 bg-gray-800 hover:cursor-pointer hover:bg-red-500 hover:scale-90 `}
                  onClick={() => setCurrentPage(v)}
                >
                  {i + 1}
                </span>
              );
            })}
            <span
              className={`my-1 md:my-0 py-1 px-2 bg-green-500 hover:cursor-pointer hover:scale-90 ${
                currentPage == totalPages ? "hidden" : ""
              }`}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buddies;

const BuddiesCard = ({ name, img }) => {
  return (
    <>
      <div className="text-white bg-slate-800  py-2 px-3 rounded-md flex flex-col gap-2 justify-center items-center flex-wrap hover:bg-gray-900 hover:border hover:cursor-pointer shadow-md mb-2 transition-all duration-500">
        <div className="flex justify-center items-center overflow-hidden rounded bg-gray-400 w-full py-2">
          <img
            src={img}
            alt={name}
            className="h-[128px] w-[128px] rounded hover:scale-125 duration-500 hover:brightness-110"
          />
        </div>
        <div className="flex flex-col justify-start w-[268px]">
          <h2 className="text-slate-950 subpixel-antialiased px-3 font-semibold  bg-slate-400 rounded-lg ">
            Name : {name}
          </h2>
        </div>
      </div>
    </>
  );
};
