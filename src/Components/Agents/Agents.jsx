import { SearchRounded } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../Nav';

const Agents = () => {

  const [data, setData] = useState([]);

  const url = "https://valorant-api.com/v1/agents";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    const res = await axios.get(url);
    const playableAgents = res.data.data;

    setData(() => {
      return playableAgents.filter((val) => {
        return val.isPlayableCharacter == true
      })
    })

    console.log(data[0]);
  }

  return (
    <>
    <Nav/>
    <div className=' flex  flex-col justify-center items-center my-5 h-full w-full'>
      
      <h1 className='text-red-500 text-2xl font-semibold md:text-3xl'>Agents</h1>
      <div className=' w-4/6 flex justify-center items-center m-2 md:w-3/6'>
        <input type="text" placeholder=' Search' className='rounded-3xl h-10 w-full text-black px-3 border-[1px] border-white bg-slate-700' />
        <div className=' m-2 bg-slate-700 rounded-full h-10 w-12 flex justify-center items-center'>
          <SearchRounded className='text-white bg-slate-700 rounded-full h-full w-full hover:cursor-pointer hover:text-red-500' />
        </div>
      </div>

      <div className="flex justify-center items-center w-8/12">
        <div className=" border-b-2 border-red-500 w-full my-3"></div>
      </div>
      <div className='text-white flex  flex-wrap justify-center items-center gap-2 my-5'>
        <h2 className='px-3 border-[1px] border-white rounded-3xl hover:cursor-pointer hover:bg-red-500 '>All</h2>
        <h2 className='px-3 border-[1px] border-white rounded-3xl hover:cursor-pointer hover:bg-red-500 '>Duelists</h2>
        <h2 className='px-3 border-[1px] border-white rounded-3xl hover:cursor-pointer hover:bg-red-500'>Controllers</h2>
        <h2 className='px-3 border-[1px] border-white rounded-3xl hover:cursor-pointer hover:bg-red-500'>Sentinels</h2>
        <h2 className='px-3 border-[1px] border-white rounded-3xl hover:cursor-pointer hover:bg-red-500'>Initiators</h2>
      </div>
      <div className='flex justify-evenly items-center gap-2 flex-wrap '>
        {
          data.map((val)=>{
            return <AgentsCards key={val.uuid} name={val.displayName} description={val.description} role={val.role.displayName} img={val.fullPortrait
            }/>
          })
        }
      </div>
    </div>
    </>
  )
}

export default Agents;

// {name, role, description}

const AgentsCards = ({name, role, description, img}) => {
  return (
    <>
      <div className='text-white p-2 rounded-md flex gap-2 justify-center items-center flex-wrap h-auto w-96 hover:bg-slate-600 bg-slate-800' >
        <div className='flex justify-center items-center overflow-hidden bg-gray-400 w-full rounded'>
          <img src={img} alt={name} className='h-52 w-9/12 bg-gray-200 rounded'/>
        </div>
        <div className='flex flex-col justify-center px-2 pb-2 '>
          <h2 className='text-red-400'>{name}</h2>
          <h3 className='text-red-300'>{role}</h3>
          <p className='text-justify text-gray-300'>{description} </p>
        </div>
      </div>
    </>
  )
}