import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import './styles.scss';
import  logo  from '../../icons/logo.svg';
import Hamburger from '../../icons/icon-menu.svg';
import HamburgerClose from '../../icons/icon-menu-close.svg';


const Header = () => {

    const [showNavbar, setShowNavBar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavBar(!showNavbar)
    }

    return <>
    <div className='header'>
        <div className='container'>
            <div className='logo'>
                <img src={logo} width="100%" height="auto"></img>
            </div>

            <div className='menu-icon' onClick={handleShowNavbar}>
                {showNavbar? 
                <img src={HamburgerClose} width="100%" height="auto"></img> : 
                <img src={Hamburger} width="100%" height="auto"></img>}
            </div>

            <div className={`nav-elements ${showNavbar && 'active'}`}>
                <ul>
                    <li>
                        <NavLink to="/" onClick={handleShowNavbar}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" onClick={handleShowNavbar}>New</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" onClick={handleShowNavbar}>Popular</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" onClick={handleShowNavbar}>Trending</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" onClick={handleShowNavbar}>Categories</NavLink>
                    </li>
                </ul>
            </div>

            {showNavbar && <div className='nav-background' />}
        </div>
    </div>
    </>
}

export default Header; 