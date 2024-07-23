import image from "../assests/image.png";
import { data } from "../assests/data.jsx";
import Cards from "./Cards.jsx";
import { useState } from "react";
import Nav from "./Nav.jsx";

const Home = () => {

  const [d, setD] = useState(data)
  return (
    <>
      <div className="flex flex-col bg-gray-900 w-full h-full scroll-smooth">

        <div className='w-full flex-col  mb-5 pb-3'>
          <Nav />

          <div className="flex flex-col justify-center items-center mt-5 md:mt-10 md:mb-24">
            <img src={image} alt="" className="md:h-[25rem] w-auto h-60" />
            <div className="text-white text-xl md:text-3xl w-11/12 flex flex-col justify-center items-center">
              <h1 className="text-center">Welcome to <span className="text-red-600 font-bold">Valorant</span> infromation page.</h1>
              <p className="text-base text-center md:text-xl mt-3 md:w-10/12 "> You can see details about in-game agents, their abilities, role etc.
                you can see abvailable Maps and Weapons.
              </p>
            </div>
          </div>

          {/* Categories  */}
          <div className="flex flex-col justify-center items-center pt-5">
            <h1 className="text-red-500 font-semibold text-5xl mb-5">Categories</h1>
            <div className="flex justify-center items-center w-8/12">
              <div className=" border-b-4 border-red-500 w-full my-3"></div>
            </div>
            <div className="w-11/12 flex flex-wrap gap-1 justify-evenly items-center md:w-10/12">
              {
                d.map((val) => {
                  return <Cards key={val.id} name={val.name} des={val.des} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Home;