import axios from "axios";
import Nav from "../Nav.jsx";
import { useEffect, useState } from "react";

const Weapons = () => {

    const [data, setData] = useState([]);
    const [weapons, setWeapons] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await axios.get("https://valorant-api.com/v1/weapons");
        setData(res.data.data);
        setWeapons(res.data.data);
    }

    const Rifles = () => {
        setWeapons(() => {
            return data.filter((val) => {
                return val.shopData?.category == "Rifles";
            })
        })
    }

    const Pistols = () => {
        setWeapons(() => {
            return data.filter((val) => {
                return val.shopData?.category == "Pistols";
            })
        })
    }

    const Shotguns = () => {
        setWeapons(() => {
            return data.filter((val) => {
                return val.shopData?.category == "Shotguns";
            })
        })
    }

    const HeavyWeapons = () => {
        setWeapons(() => {
            return data.filter((val) => {
                return val.shopData?.category == "Heavy Weapons";
            })
        })
    }

    const Melee = () => {
        setWeapons(() => {
            return data.filter((val) => {
                return val.shopData?.category == "Melee";
            })
        })
    }

    const SMGs = () => {
        setWeapons(() => {
            return data.filter((val) => {
                return val.shopData?.category == "SMGs";
            })
        })
    }

    const sniperRifles = () => {
        setWeapons(() => {
            return data.filter((val) => {
                return val.shopData?.category == "Sniper Rifles";
            })
        })
    }

    const handleInput = (e) => {
        setInput(e.target.value);

        if (e.target.value == "") return setWeapons(data);
        setWeapons(() => {
            return data.filter((val) => {
                return val?.displayName.toLowerCase() == e.target.value;
            });
        });

    }

    return (
        <>
            <div className="flex flex-col bg-gray-900 w-full h-full scroll-smooth">
                <Nav />
                <div className=' flex  flex-col justify-center items-center my-5 h-full w-full'>
                    <h1 className='text-red-500 text-2xl font-sans font-semibold md:text-5xl mb-4 shadow subpixel-antialiased'>Weapons</h1>
                    <div className=' w-4/6 flex justify-center items-center m-2 md:w-3/6'>
                        <input
                            type="text"
                            placeholder=' Search'
                            onChange={handleInput}
                            value={input}
                            className='rounded-3xl h-10 w-full text-gray-100 px-3 bg-slate-700 caret-red-600'
                        />

                    </div>

                    <div className="flex justify-center items-center w-8/12 mt-2">
                        <div className=" border-b-2 border-red-500 w-full my-3"></div>
                    </div>
                    <div className='text-white flex  flex-wrap justify-center items-center gap-2 my-5'>
                        <h2 className='px-3 border-[1px] subpixel-antialiased border-white rounded-3xl hover:cursor-pointer hover:bg-red-500' onClick={fetchData}>All</h2>
                        <h2 className='px-3 border-[1px] subpixel-antialiased border-white rounded-3xl hover:cursor-pointer hover:bg-red-500' onClick={Rifles}>Rifles</h2>
                        <h2 className='px-3 border-[1px] subpixel-antialiased border-white rounded-3xl hover:cursor-pointer hover:bg-red-500' onClick={HeavyWeapons}>Heavy Weapons</h2>
                        <h2 className='px-3 border-[1px] subpixel-antialiased border-white rounded-3xl hover:cursor-pointer hover:bg-red-500' onClick={Shotguns} >Shotguns</h2>
                        <h2 className='px-3 border-[1px] subpixel-antialiased border-white rounded-3xl hover:cursor-pointer hover:bg-red-500' onClick={Pistols}>Pistols</h2>
                        <h2 className='px-3 border-[1px] subpixel-antialiased border-white rounded-3xl hover:cursor-pointer hover:bg-red-500' onClick={sniperRifles}>Sniper Rifles</h2>
                        <h2 className='px-3 border-[1px] subpixel-antialiased border-white rounded-3xl hover:cursor-pointer hover:bg-red-500' onClick={SMGs}>SMGs</h2>
                    </div>
                    <div className='flex justify-evenly items-center gap-2 flex-wrap w-full '>
                        {
                            weapons.map((val) => {
                                return <WeaponsCards key={val.uuid} name={val.displayName} category={val.shopData?.category} img={val.displayIcon} fireRate={val.weaponStats?.fireRate} magSize={val.weaponStats?.magazineSize
                                } />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weapons;

const WeaponsCards = ({ name, category, img, fireRate, magSize }) => {
    return (
        <>
            <div className='text-white bg-slate-800  p-2 rounded-md flex gap-2 justify-center items-center flex-wrap h-auto w-96 hover:bg-gray-900 hover:border hover:cursor-pointer shadow-md mb-2 hover:translate-y-3 transition-all duration-500' >
                <div className='flex justify-center items-center overflow-hidden bg-gray-400 w-full rounded h-auto px-2 py-5'>
                    <img src={img} alt={name} className='h-40 w-auto rounded' />
                </div>
                <div className='flex flex-col justify-start w-full px-2 pb-2 '>
                    <h2 className='text-slate-950 subpixel-antialiased px-3 font-bold text-lg bg-slate-400 rounded-lg '>Name : {name}</h2>
                    <h3 className='text-black subpixel-antialiased px-3 font-semibold bg-slate-500 rounded-lg my-2 '>Type : {category}</h3>
                    <h3 className='text-black subpixel-antialiased px-3 font-semibold bg-slate-500 rounded-lg  '>Fire Rate : {fireRate}</h3>
                    <h3 className='text-black subpixel-antialiased px-3 font-semibold bg-slate-500 rounded-lg my-2 '> Magazine Size : {magSize}</h3>
                </div>
            </div>
        </>
    )
}