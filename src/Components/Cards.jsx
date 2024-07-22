import { Card } from "@mui/material";

const Cards = ({name, des})=>{
    return(
        <>
        <div className="flex flex-col justify-center items-center rounded-lg bg-slate-800  m-2 p-5 w-72 h-56 md:w-80 hover:bg-slate-600 transition-all hover:cursor-pointer shadow-md text-white hover:text-red-400">
            <h1 className="  text-3xl font-sans font-semibold hover:text-red-400 text-center pb-2 ">{name}</h1>
            <p className="  text-xl text-center">{des} </p>
        </div>
        </>
    )
}

export default Cards;