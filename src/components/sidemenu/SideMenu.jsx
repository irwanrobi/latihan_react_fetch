import React from 'react';
import './sidemenu.css';
import { NavLink } from 'react-router-dom';

const SideMenu = () => {
    return (
        <aside className="sidemenu">
            <NavLink to="/home" activeClassName="sm_item_active">
                <span className="sm_item">Home</span>
            </NavLink>

            <NavLink to="/blog" activeClassName="sm_item_active">
                <span className="sm_item">Blog</span>
            </NavLink>

            <NavLink to="/about" activeClassName="sm_item_active">
                <span className="sm_item">About</span>
            </NavLink>

            <NavLink to="/contact" activeClassName="sm_item_active">
                <span className="sm_item">Contact</span>
            </NavLink>
        </aside>
    )
}

export default SideMenu
