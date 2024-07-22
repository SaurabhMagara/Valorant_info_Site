import logo from "../assests/logo.png";
import image from "../assests/image.png";
import { MenuRounded } from "@mui/icons-material";
import { data } from "../assests/data.jsx";
import Cards from "./Cards.jsx";

const Home = () => {

  const [d, setD] = useState(data)
  return (
    <>
      <div className='w-full flex-col  mb-5 pb-3'>
        {/* Nav starts here */}
        <nav className='md:mx-3 md:px-2 flex justify-between items-center'>
          <div>
            <img src={logo} alt="" className='md:h-16 md:w-16 h-10 w-10 pl-2 md:pl-0' />
          </div>
          <ul className='text-white gap-5 hidden md:flex'>
            <li className="cursor-pointer hover:border-b-2 hover:border-red-500">Agents</li>
            <li className="cursor-pointer hover:border-b-2 hover:border-red-500">Weapons</li>
            <li className="cursor-pointer hover:border-b-2 hover:border-red-500">Maps</li>
          </ul>
          <div className="md:hidden ">
            <MenuS />
          </div>
        </nav>
        {/* Nav ends here */}
        {/* Main starts here */}
        <div className="flex flex-col justify-center items-center mt-5 md:mt-10 md:mb-24">
          <img src={image} alt="" className="md:h-[25rem] w-auto h-60" />
          <div className="text-white text-xl md:text-3xl w-11/12 flex flex-col justify-center items-center">
            <h1 className="text-center">Welcome to <span className="text-red-600 font-bold">Valorant</span> infromation page.</h1>
            <p className="text-base text-center md:text-xl mt-3 md:w-10/12 "> You can see details about in-game agents, their abilities, role etc.
              you can show abvailable Maps and Weapons.
            </p>
          </div>
        </div>
        {/* Main ends here */}
        {/* Categories  */}
        <div className="flex flex-col justify-center items-center pt-5">
          <h1 className="text-red-500 font-semibold text-5xl mb-5">Categories</h1>
          <div className="flex justify-center items-center w-8/12">
            <div className=" border-b-4 border-red-500 w-full my-3"></div>
          </div>
          <div className="w-5/6 flex flex-wrap gap-2 justify-around items-center md:w-9/12">
            {
              d.map((val, i) => {
                return <Cards key={i} name={val.name} des={val.des} />
              })
            }
          </div>
        </div>
      </div>

    </>
  )
};

export default Home;

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';

const MenuS = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuRounded className='text-white cursor-pointer' />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><a href='#home'>Agents</a></MenuItem>
        <MenuItem onClick={handleClose}><a href='#about'>Weapons</a></MenuItem>
        <MenuItem onClick={handleClose}><a href='#contact'>Maps</a></MenuItem>
      </Menu>
    </div>
  );
}

