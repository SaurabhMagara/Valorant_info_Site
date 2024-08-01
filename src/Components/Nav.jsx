import { NavLink } from "react-router-dom";
import { MenuRounded, MoreHoriz } from "@mui/icons-material";
import logo from "../assests/logo.png";

// Navbar code

const Nav = () => {
  return (
    <>
      <nav className="md:px-3  flex justify-between items-center w-full bg-slate-800">
        <div>
          <NavLink to="/">
            <img
              src={logo}
              alt=""
              className="md:h-16 md:w-16 h-10 w-10 pl-2 md:pl-0 cursor-pointer"
            />
          </NavLink>
        </div>
        <ul className="text-white subpixel-antialiased gap-5 hidden md:flex md:justify-center md:items-center">
          <li>
            <NavLink
              to="/"
              className={({isActive})=>
                `cursor-pointer hover:underline hover:decoration-red-500 hover:underline-offset-4 flex justify-center items-center 
                  ${isActive ? 'underline decoration-red-500 underline-offset-4' : ""}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/agents"
              className={({isActive})=>
                `cursor-pointer hover:underline hover:decoration-red-500 hover:underline-offset-4 flex justify-center items-center 
                  ${isActive ? 'underline decoration-red-500 underline-offset-4' : ""}`}
            >
              Agents
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/weapons"
              className={({isActive})=>
                `cursor-pointer hover:underline hover:decoration-red-500 hover:underline-offset-4 flex justify-center items-center 
                  ${isActive ? 'underline decoration-red-500 underline-offset-4' : ""}`}
            >
              Weapons
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/maps"
              className={({isActive})=>
                `cursor-pointer hover:underline hover:decoration-red-500 hover:underline-offset-4 flex justify-center items-center 
                  ${isActive ? 'underline decoration-red-500 underline-offset-4' : ""}`}
            >
              Maps
            </NavLink>
          </li>
          <li className="cursor-pointer hover:bg-red-500 rounded-full flex justify-center items-center">
            <LongMenu />
          </li>
        </ul>
        <div className="md:hidden ">
          <MenuS />
        </div>
      </nav>
    </>
  );
};

export default Nav;
// Mobile view Menu button code

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";

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
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuRounded className="text-white cursor-pointer" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <NavLink to="/">Home</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/agents">Agents</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/weapons">Weapons</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/maps">Maps</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/gamemodes">GameModes</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/cards">Cards</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/buddies">Buddies</NavLink>
        </MenuItem>
      </Menu>
    </div>
  );
};

// more button menu
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

function LongMenu() {
  const navigate = useNavigate();

  const options = ["Cards", "Buddies", "GameModes"];

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
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHoriz className=" text-white" />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Titles"}
            onClick={handleClose}
            className="subpixel-antialiased"
          >
            <NavLink to={`/${option.toLowerCase()}`}> {option}</NavLink>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
