import { Card } from "@mui/material";

const Cards = ({name, des})=>{
    return(
        <>
        <div className="flex flex-col justify-center items-center rounded-lg bg-slate-800  m-2 p-5 w-72 h-56 md:w-80 hover:bg-slate-600 transition-all hover:cursor-pointer">
            <h1 className=" text-white text-3xl font-sans font-semibold  text-center pb-2 ">{name}</h1>
            <p className=" text-gray-300 text-xl text-center">{des} </p>
        </div>
        </>
    )
}

export default Cards;