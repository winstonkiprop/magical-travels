import React from "react";

import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div>
            <nav className="navbar">
                <ul>
                <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery">Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink to="/destination">Destination</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;