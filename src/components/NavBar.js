import React from "react";

import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div className="navbar">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/gallery">Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink to="/destination">Destination</NavLink>
                    </li>
                    <li>
                        <NavLink to="blog">Blog</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;