import { Link } from "react-router-dom";
import { MenuRounded, MoreHoriz } from "@mui/icons-material";
import logo from "../assests/logo.png";

// Navbar code

const Nav = () => {
    return (
      <>
        <nav className='md:px-3  flex justify-between items-center w-full bg-slate-800'>
          <div>
            <Link to='/'>
            <img src={logo} alt="" className='md:h-16 md:w-16 h-10 w-10 pl-2 md:pl-0 cursor-pointer' />
            </Link>
            
          </div>
          <ul className='text-white gap-5 hidden md:flex'>
            <li className="cursor-pointer hover:border-b-2 hover:border-red-500 flex justify-center items-center"><Link to='/Agents'>Agents</Link></li>
            <li className="cursor-pointer hover:border-b-2 hover:border-red-500 flex justify-center items-center">Weapons</li>
            <li className="cursor-pointer hover:border-b-2 hover:border-red-500 flex justify-center items-center">Maps</li>
            <li className="cursor-pointer hover:bg-red-500 rounded-full flex justify-center items-center"><LongMenu/></li>
          </ul>
          <div className="md:hidden ">
            <MenuS />
          </div>
        </nav>
      </>
    )
  }

  export default Nav;
  // Mobile view Menu button code
  
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
          <MenuItem onClick={handleClose}><Link to='/Agents'>Agents</Link></MenuItem>
          <MenuItem onClick={handleClose}><a href='#Weapons'>Weapons</a></MenuItem>
          <MenuItem onClick={handleClose}><a href='#Maps'>Maps</a></MenuItem>
          <MenuItem onClick={handleClose}><a href='#Currencies'>Currencies</a></MenuItem>
          <MenuItem onClick={handleClose}><a href='#Currencies'>Seasons</a></MenuItem>
          <MenuItem onClick={handleClose}><a href='#Currencies'>Titles</a></MenuItem>
          <MenuItem onClick={handleClose}><a href='#Currencies'>GameModes</a></MenuItem>
          <MenuItem onClick={handleClose}><a href='#Currencies'>Cards</a></MenuItem>
          <MenuItem onClick={handleClose}><a href='#Currencies'>Buddies</a></MenuItem>
        </Menu>
      </div>
    );
  }

  // more button menu
import IconButton from '@mui/material/IconButton';
import { MoreVert } from "@mui/icons-material";

function LongMenu() {

   const options = ["Titles", "Cards", "Seasons" ,"Buddies", "GameModes", "Currencies"];

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
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHoriz  className=" text-white"/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Titles'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}