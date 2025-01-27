import { Link } from "react-router-dom";

const Cards = ({ name, des }) => {
    return (
        <Link to={`/${name}`}>
            <div className="flex flex-col justify-center items-center rounded-lg bg-slate-800  m-1 p-4 w-80 h-56 md:w-80 hover:bg-slate-600 hover:cursor-pointer shadow shadow-slate-950 hover:scale-105 duration-500 ease-in-out text-gray-200 hover:text-red-500" >
                <h1 className="  text-3xl font-sans font-semibold subpixel-antialiased text-center pb-2 ">{name}</h1>
                <p className="  text-xl text-center subpixel-antialiased"> {des} </p>
            </div>
        </Link>
    )
}

export default Cards; 