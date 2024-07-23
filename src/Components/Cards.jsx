import { Link } from "react-router-dom";

const Cards = ({ name, des }) => {
    return (
        <Link to={`/${name}`}>
            <div className="flex flex-col justify-center items-center rounded-lg bg-slate-800  m-1 p-4 w-80 h-56 md:w-80 hover:bg-slate-600 transition-all hover:cursor-pointer shadow-md text-gray-200 hover:text-red-500" >
                <h1 className="  text-3xl font-sans font-semibold  text-center pb-2 ">{name}</h1>
                <p className="  text-xl text-center"> {des} </p>
            </div>
        </Link>
    )
}

export default Cards; 