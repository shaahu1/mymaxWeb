import React, { useState } from 'react'
import logo from '../Img/logo.png';
import './navbar.css';
import {FaWarehouse, FaShoppingBag} from 'react-icons/fa';
import { Link } from 'react-router-dom';



function NavBar () {

    const [navbar, setNavbar] = useState(false);

    const changePosition = () =>
    {
        if (window.scrollY >= 200)
        {
            setNavbar(true);
        }
        else
        {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changePosition);


    return (
        <div>
            <div className= {navbar ? 'navBar-container active':'navBar-container'}>

                <img src={logo} id="logo-img"/>
                <span className={navbar ? 'companyName active' : 'companyName'}> My Max Holdings </span>

                <div id="navbar-link-container">
                    <ul>
                        <li> <Link to="/" className={navbar ? 'link active' : 'link'} > Home </Link> </li>
                        <li> <Link to="/aboutUs"  className={navbar ? 'link active' : 'link'} > About </Link> </li>
                        <li> <Link to="/" className={navbar ? 'link active' : 'link'} >   Services  </Link> </li>
                        <li> <Link to="/top" className={navbar ? 'link active' : 'link'} > Gallery </Link> </li>
                        <li> <Link to="/contactUs" className={navbar ? 'link active' : 'link'} > Contact </Link> </li>
                    </ul>

                </div>
                <button className={navbar ? 'btn-Shop active': 'btn-Shop'} > <FaWarehouse className="icon"/> &nbsp;&nbsp;&nbsp; Shop </button>

            </div>


        </div>
    )
}

export default NavBar;
