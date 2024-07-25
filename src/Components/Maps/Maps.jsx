import axios from 'axios';
import { useState, useEffect } from "react";
import Nav from '../Nav';

const Maps = () => {

    const [data, setData] = useState([]);
    const [maps, setMaps] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const res = await axios.get("https://valorant-api.com/v1/maps");
        setData(res.data.data);
        setMaps(res.data.data);
        setLoading(false);
    }

    const handleChange = (e) => {
        setLoading(true);
        setInput(e.target.value);

        if (e.target.value == "") {
            setMaps(data);
            setLoading(false);
            return;
        };

        setMaps(() => {
            return data.filter((val) => {
                return val?.displayName.toLowerCase() == e.target.value.toLowerCase();
            })
        });

        setLoading(false);
    }

    return (
        <>
            <div className="flex flex-col bg-gray-900 w-full h-full scroll-smooth">
                <Nav />
                <div className=' flex  flex-col justify-center items-center my-5 h-full w-full'>
                    <h1 className='text-red-500 text-2xl font-sans font-semibold md:text-5xl mb-4 shadow subpixel-antialiased'>Maps</h1>
                    <div className=' w-4/6 flex justify-center items-center m-2 md:w-3/6'>
                        <input
                            type="text"
                            placeholder=' Search by name'
                            className='rounded-3xl h-10 w-full text-gray-100 px-3 bg-slate-700 caret-red-600'
                            onChange={handleChange}
                            value={input}
                        />
                    </div>
                    <div className="flex justify-center items-center w-8/12 my-2">
                        <div className=" border-b-2 border-red-500 w-full my-3"></div>
                    </div>

                    {
                        loading ?
                            <div>
                                <p className='animate-pulse text-3xl text-white'>Loading ...</p>
                            </div>
                            : <div className='flex justify-evenly items-center gap-2 flex-wrap w-full '>
                                {maps.length > 0 ?
                                    maps.map((val) => {
                                        return <MapsCards key={val?.uuid} name={val?.displayName} img={val?.splash} tacticalDes={val?.tacticalDescription === null ? "Nil" : val?.tacticalDescription} callouts={val?.callouts?.length} coOrdinates={val?.coordinates === null ? "Nil" : val?.coordinates} />
                                    })
                                    :
                                    <div className='text-white text-3xl p-10 rounded'>
                                        No maps found!
                                    </div>
                                }
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Maps;

const MapsCards = ({ name, coOrdinates, img, tacticalDes, callouts }) => {
    return (
        <>
            <div className='text-white p-2 rounded-lg flex gap-2 justify-center items-center flex-wrap w-[26rem] hover:bg-gray-900 bg-slate-800 hover:border hover:cursor-pointer shadow-md mb-2 hover:translate-y-2 transition-all duration-600' >
                <div className='flex justify-center items-center overflow-hidden bg-gray-400  w-full rounded-md'>
                    <img src={img} alt='img' className='shadow rounded hover:scale-125 duration-500 hover:brightness-110' />
                </div>
                <div className='flex flex-col justify-center px-2 pb-2 w-full '>
                    <h2 className='text-slate-950 px-3 font-bold text-lg subpixel-antialiased bg-slate-400 rounded-lg '>Name : {name} </h2>
                    <h3 className='text-black px-3 font-semibold bg-slate-500 subpixel-antialiased rounded-lg my-2 '>Co-ordinates : {coOrdinates}</h3>
                    <h3 className='text-black px-3 font-semibold bg-slate-500 subpixel-antialiased rounded-lg '>Tactical Descriptions : {tacticalDes} </h3>
                    <h3 className='text-black px-3 font-semibold bg-slate-500 subpixel-antialiased rounded-lg my-2'>Total callouts : {callouts} </h3>
                </div>
            </div>
        </>
    )
};