import React from 'react';
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = () => {
    let [width, setWidth] = useState("0px");
    let open = false;

    const OpenNav = () => {
        if (open) {
            setWidth("0%");
        }
        else {
            setWidth("10%");
        }

        open = !open;
    }

    return (
        <>
            <div id="main">
                <Outlet />
            </div>
            <nav style={{ width: width }}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <button class="navButton" style={{marginLeft: width}} onClick={OpenNav}>=</button>
        </>
    )
};

export default Layout;