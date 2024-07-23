import { SearchRounded } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../Nav';

const Agents = () => {

  const [data, setData] = useState([]);
  const [agents, setAgents] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("https://valorant-api.com/v1/agents");
    const playableAgents = res.data.data;

    setData(() => {
      return playableAgents.filter((val) => {
        return val.isPlayableCharacter == true;
      })
    });

    setAgents(() => {
      return playableAgents.filter((val) => {
        return val.isPlayableCharacter == true;
      })
    });
  }

  const duel = () => {
    const duelists = data.filter((val) => {
      return val.role.displayName == "Duelist";
    });

    setAgents(duelists);
  }

  const sentinel = () => {
    const sentinels = data.filter((val) => {
      return val.role.displayName == "Sentinel";
    });

    setAgents(sentinels);
  }

  const initiator = () => {
    const Initiators = data.filter((val) => {
      return val.role.displayName == 'Initiator';
    });

    setAgents(Initiators);
  }

  const controller = () => {
    const controllers = data.filter((val) => {
      return val.role.displayName == "Controller";
    });

    setAgents(controllers);
  }

  const search = () => {
    if(input == "") return setAgents(data);

    setAgents(() => {
      return data.filter((val) => {
        return val.displayName.toLowerCase() == input;
      });
    });
    setInput("");
  }

  const handleChnage = (e)=>{
    setInput(e.target.vale);
    if(e.target.value == "") return setAgents(data);
    setAgents(() => {
      return data.filter((val) => {
        return val.displayName.toLowerCase() == e.target.value.toLowerCase();
      });
    });

  }

  return (
    <>
      <div className="flex flex-col bg-gray-900 w-full h-full scroll-smooth">
        <Nav />
        <div className=' flex  flex-col justify-center items-center my-5 h-full w-full'>
          <h1 className='text-red-500 text-2xl font-semibold md:text-3xl'>Agents</h1>
          <div className=' w-4/6 flex justify-center items-center m-2 md:w-3/6'>
            <input
             type="text"
             placeholder=' Search'
             className='rounded-3xl h-10 w-full text-gray-100 px-3 border-[1px] border-white bg-slate-700 caret-red-600'
             onChange={handleChnage} 
             value={input}
            />
            <div className=' m-2 bg-slate-700 rounded-full h-10 w-12 flex justify-center items-center' onClick={search}>
              <SearchRounded className='text-white bg-slate-700 rounded-full h-full w-full hover:cursor-pointer hover:text-red-500' />
            </div>
          </div>

          <div className="flex justify-center items-center w-8/12">
            <div className=" border-b-2 border-red-500 w-full my-3"></div>
          </div>
          <div className='text-white flex  flex-wrap justify-center items-center gap-2 my-5'>
            <h2 className='px-3 border-[1px] border-white rounded-3xl hover:cursor-pointer hover:bg-red-500 ' onClick={fetchData}>All</h2>
            <h2 className='px-3 border-[1px] border-white rounded-3xl hover:cursor-pointer hover:bg-red-500 ' onClick={duel}>Duelists</h2>
            <h2 className='px-3 border-[1px] border-white rounded-3xl hover:cursor-pointer hover:bg-red-500' onClick={controller}>Controllers</h2>
            <h2 className='px-3 border-[1px] border-white rounded-3xl hover:cursor-pointer hover:bg-red-500' onClick={sentinel}>Sentinels</h2>
            <h2 className='px-3 border-[1px] border-white rounded-3xl hover:cursor-pointer hover:bg-red-500' onClick={initiator} >Initiators</h2>
          </div>
          <div className='flex justify-evenly items-center gap-2 flex-wrap '>
            {
              agents.map((val) => {
                return <AgentsCards key={val.uuid} name={val.displayName} description={val.description} role={val.role.displayName} img={val.fullPortrait
                } />
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Agents;

const AgentsCards = ({ name, role, description, img }) => {
  return (
    <>
      <div className='text-white p-2 rounded-md flex gap-2 justify-center items-center flex-wrap h-auto w-96 hover:bg-slate-700 bg-slate-800 hover:cursor-pointer shadow-md mb-2 hover:translate-y-3 transition-all duration-500' >
        <div className='flex justify-center items-center overflow-hidden bg-gray-500 w-full rounded'>
          <img src={img} alt={name} className='h-52 w-9/12 rounded' />
        </div>
        <div className='flex flex-col justify-center px-2 pb-2 '>
          <h2 className='text-red-600 font-semibold text-lg'>{name}</h2>
          <h3 className='text-red-400 font-semibold'>{role}</h3>
          <p className='text-justify text-gray-300'>{description} </p>
        </div>
      </div>
    </>
  )
}