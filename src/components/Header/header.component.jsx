import React, { useContext, useRef } from 'react'
import { NavLink, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import "./header.styles.css"
import { ReactComponent as Logo } from "../../assets/logo.svg"
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"

function Header() {
    const { cartHidden } = useContext(ShopProductsContext);
    const toggleNavbar = useRef();
    const navbar = (e) => {
        toggleNavbar.current.classList.toggle("sidebar-open")
    }
    return (
        <nav className="container d-flex p-3 justify-content-between">
            <div className="navbar-logo">
                <Link to="/"><Logo/></Link>
            </div>
            <div className="burger-navbar" onClick={navbar}>
                <div className="navs">
                    <div className="burger">
                        <input type="checkbox" className="menu-open" name="menu-open" id="menu-open" />
                        <label className="patty" htmlFor="menu-open">
                            <span className="hamburger"></span>
                        </label>
                    </div>
                    <div className="nav-menu" ref={toggleNavbar}>
                        <ul className="nav-list">
                        <li className="list-menu"><NavLink exact to="/" className="icon-link icon-2">Homepage</NavLink></li>
                            <li className="list-menu"><NavLink exact to="/login" className="icon-link icon-2">LogIn</NavLink></li>
                            <li className="list-menu"><NavLink to="/" className="icon-link icon-2">Logout</NavLink></li>
                            <li className="list-menu"><NavLink to="/signup" className="icon-link icon-2">SignUp</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>

            <ul className="nav-list-desktop d-flex justify-content-between links">
                <li className="list-menu-desktop"><NavLink exact to="/" className="icon-link icon-2">LogIn</NavLink></li>
                <li className="list-menu-desktop"><NavLink to="/" className="icon-link icon-2">Logout</NavLink></li>
                <li className="list-menu-desktop"><NavLink to="/" className="icon-link icon-2">SignUp</NavLink></li>
                <li className="list-menu cart-icon-link">
                   <CartIcon />
                </li>
            </ul>
            {
                cartHidden ? null : <CartDropdown/>
            }
        </nav>
    )
}

export default Header