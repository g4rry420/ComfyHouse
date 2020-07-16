import React from 'react'
import { NavLink, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import { ReactComponent as Logo } from "../../assets/logo.svg"
import "./header.styles.css"

export default function Header() {
    return (
        <nav className="container d-flex p-3 justify-content-between">
            <div>
                <Link to="/"><Logo/></Link>
            </div>
            <ul className="nav-list d-flex justify-content-between links">
                <li className="list-menu"><NavLink exact to="/" className="icon-link icon-2">LogIn</NavLink></li>
                <li className="list-menu"><NavLink to="/" className="icon-link icon-2">Logout</NavLink></li>
                <li className="list-menu"><NavLink to="/" className="icon-link icon-2">SignUp</NavLink></li>
                <li className="list-menu"><NavLink to="/" className="icon-link icon-2">Cart</NavLink></li>
            </ul>
        </nav>
    )
}
