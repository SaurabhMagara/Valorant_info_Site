import { SearchRounded } from '@mui/icons-material';
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../Navbar/Nav.jsx';
import { Link } from 'react-router-dom';
import { useAgentContext } from '../Context/AgentContext.jsx';

const Agents = () => {

  const [data, setData] = useState([]);
  const [agents, setAgents] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get("https://valorant-api.com/v1/agents");
    const playableAgents = res.data.data;
    const filteredAgents = playableAgents.filter(val=>val?.isPlayableCharacter==true);

    setData(filteredAgents);
    setAgents(filteredAgents);
    setLoading(false);
  }

  const duel = () => {
    setLoading(true);
    const duelists = data.filter(val => val.role.displayName == "Duelist");
    setAgents(duelists);
    setLoading(false);
  }

  const sentinel = () => {
    setLoading(true);
    const sentinels = data.filter(val => val.role.displayName == "Sentinel");
    setAgents(sentinels);
    setLoading(false);
  }

  const initiator = () => {
    setLoading(true);
    const Initiators = data.filter(val =>val.role.displayName == 'Initiator');
    setAgents(Initiators);
    setLoading(false);
  }

  const controller = () => {
    setLoading(true);
    const controllers = data.filter(val => val.role.displayName == "Controller");
    setAgents(controllers);
    setLoading(false);
  }

  const handleChange = (e) => {
    setLoading(true);
    setInput(e.target.value);

    if (e.target.value == "") {
      setAgents(data);
      setLoading(false);
      return;
    }

    const filteredAgents = data.filter(val=>val.displayName.toLowerCase().includes(e.target.value.toLowerCase()));
    setAgents(filteredAgents);
    setLoading(false);
  }

  return (
    <>
      <div className="flex flex-col bg-gray-900 w-full h-full scroll-smooth">
        <Nav />
        <div className=' flex  flex-col justify-center items-center my-5 h-full w-full'>
          <h1 className='text-red-500 font-sans text-4xl font-semibold subpixel-antialiased md:text-5xl mb-4'>Agents</h1>
          <div className=' w-4/6 flex justify-center items-center m-2 md:w-3/6'>
            <input
              type="text"
              placeholder=' Search by name'
              className='rounded-3xl h-10 w-full text-gray-100 px-3 bg-slate-700 caret-red-600 font-sans'
              onChange={handleChange}
              value={input}
            />
          </div>

          <div className="flex justify-center items-center w-8/12 my-3">
            <div className=" border-b-2 border-red-500 w-full mt-2"></div>
          </div>
          <div className='text-white flex  flex-wrap justify-center items-center gap-2 my-5'>
            <h2 className='subpixel-antialiased text-lg font-semibold'>
              Filter by role :
            </h2>
            <h2 className='px-3 border-[1px] border-white rounded-3xl subpixel-antialiased hover:cursor-pointer hover:bg-red-500 ' onClick={fetchData}>All</h2>
            <h2 className='px-3 border-[1px] border-white rounded-3xl subpixel-antialiased hover:cursor-pointer hover:bg-red-500 ' onClick={duel}>Duelists</h2>
            <h2 className='px-3 border-[1px] border-white rounded-3xl subpixel-antialiased hover:cursor-pointer hover:bg-red-500' onClick={controller}>Controllers</h2>
            <h2 className='px-3 border-[1px] border-white rounded-3xl subpixel-antialiased hover:cursor-pointer hover:bg-red-500' onClick={sentinel}>Sentinels</h2>
            <h2 className='px-3 border-[1px] border-white rounded-3xl subpixel-antialiased v hover:cursor-pointer hover:bg-red-500' onClick={initiator} >Initiators</h2>
          </div>
          {loading ?
            <div>
              <p className='animate-pulse text-3xl text-white'>Loading ...</p>
            </div>
            :
            <div className='flex justify-evenly items-center gap-2 flex-wrap'>
              {agents.length > 0 ?
                agents.map((val) => {
                  return <AgentsCards key={val.uuid} name={val.displayName} description={val.description} role={val.role.displayName} img={val.fullPortrait} uuid={val?.uuid}
                 />
                })
                :
                <div className='text-white text-3xl p-10 rounded'>
                  No agents found!
                </div>
              }
            </div>}
        </div>
      </div>
    </>
  )
}

export default Agents;

const AgentsCards = ({ name, role, description, img, uuid }) => {
  const {setUuid} = useAgentContext();

  return (
    <>
      <div className='text-white p-2 rounded-lg flex flex-col gap-2 justify-center items-center flex-wrap h-auto hover:bg-gray-900 bg-slate-800 hover:border hover:cursor-pointer shadow-md mb-2 hover:translate-y-2 transition-all duration-500' >
        <div className='flex justify-center items-center overflow-hidden bg-gray-400 rounded-md w-96'>
          <img src={img} alt={name} className='h-[19rem]  rounded hover:scale-125 duration-500 hover:brightness-110' />
        </div>
        <div className='flex flex-col justify-center px-2 pb-2 w-96'>
          <h2 className='text-slate-950 px-3 font-bold text-lg subpixel-antialiased bg-slate-400 rounded-lg '>Name : {name}</h2>
          <h3 className='text-black px-3 font-semibold bg-slate-500 subpixel-antialiased rounded-lg my-2 '><span className='font-bold'>Role : </span>{role}</h3>
          <p className='text-justify  text-black px-3 bg-slate-500 rounded-lg font-semibold py-1'><span className=' font-bold subpixel-antialiased'>Description : </span>{description} </p>
          <Link className='px-3 font-semibold py-1 subpixel-antialiased hover:text-red-600 w-full text-lg ' to={`/agent`}><span onClick={()=>setUuid(uuid)}>Learn More</span></Link>
          
        </div>
      </div>
    </>
  )
}