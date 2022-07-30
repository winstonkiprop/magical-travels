import React from "react";

import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div>
            <nav className="navbar">
                <ul>
                <li>
                        <NavLink to="/"><h1>Home</h1></NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery"><h1>Gallery</h1></NavLink>
                    </li>
                    <li>
                        <NavLink to="/destination"><h1>Destination</h1></NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog"><h1>Blog</h1></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;