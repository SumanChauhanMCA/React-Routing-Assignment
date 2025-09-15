import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const NavActive = ({isActive}) => {
        return{
              background : isActive ? "#4e8cff" : "",
                color: isActive ? "#fff" : "",
        }
    }
    
    return (
        <>
            <ul>
                <li><NavLink style={NavActive} to="/">Home</NavLink></li>
                <li><NavLink style={NavActive} to="/about">About</NavLink></li>
                <li><NavLink style={NavActive} to="/userinfo">User Info</NavLink></li>
                <li><NavLink style={NavActive} to="*">Random</NavLink></li>

            </ul>
        </>
    )
}

export default Navbar