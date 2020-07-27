import React, { useContext } from 'react'
import { NavLink, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import "./header.styles.css"
import { ReactComponent as Logo } from "../../assets/logo.svg"
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"

function Header() {
    const { cartHidden } = useContext(ShopProductsContext);
    return (
        <nav className="container d-flex p-3 justify-content-between">
            <div>
                <Link to="/"><Logo/></Link>
            </div>
            <ul className="nav-list d-flex justify-content-between links">
                <li className="list-menu"><NavLink exact to="/" className="icon-link icon-2">LogIn</NavLink></li>
                <li className="list-menu"><NavLink to="/" className="icon-link icon-2">Logout</NavLink></li>
                <li className="list-menu"><NavLink to="/" className="icon-link icon-2">SignUp</NavLink></li>
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