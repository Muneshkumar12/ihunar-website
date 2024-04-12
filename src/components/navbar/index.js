import React, { useState, useEffect } from 'react';
import '../../styles/navbar.css';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = ({bgColor}) => {
    const Nevigate = useNavigate()
    // State for menu visibility
    const [showMenu, setShowMenu] = useState(false);
    const [navabrTheme, setNavbarTheme] = useState(false)
    // State for active dropdown (menu or pages)
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleDropdownClick = (dropdownName) => {
        // Update activeDropdown based on the clicked dropdown
        setActiveDropdown(dropdownName === activeDropdown ? null : dropdownName);
    };

    const changeBackground = () => {
        if (window.scrollY >= 400) {
            setNavbarTheme(true)
        } else {
            setNavbarTheme(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <div>
            <header style={{ backgroundColor: bgColor}} className={navabrTheme ? "header header-theme" : "header"} id={showMenu ? "showTrue" : ''}>
                <nav className="nav container">
                    <div className="nav__data">
                        <img src={logo} id='logo' />

                        <div className="nav__toggle" onClick={toggleMenu}>
                            <i
                                className={`ri-menu-line nav__burger ${showMenu ? 'hidden' : ''
                                    }`}
                            ></i>
                            <i className={`ri-close-line nav__close ${showMenu ? '' : 'hidden'}`}></i>
                        </div>
                    </div>

                    <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`}>
                        <ul className="nav__list">
                            <li>
                                <Link to='/' className="nav__link" >Home</Link>
                            </li>
                            {/* Menu Dropdown */}
                            <li className="dropdown__item">
                                <div
                                    className={`nav__link ${activeDropdown === 'menu' ? 'active' : ''
                                        }`}
                                    onClick={() => handleDropdownClick('menu')}
                                >
                                    About Us <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                                </div>

                                <ul
                                    className={`dropdown__menu dropdown ${showMenu && activeDropdown === 'menu' ? 'show-dropdown' : ''
                                        }`}

                                >
                                    <li>
                                        <Link to='/about-us' className="dropdown__link" >About Us</Link>
                                    </li>
                                    <li>
                                        <Link to='/team' className="dropdown__link" >Our Team</Link>
                                    </li>
                                    {/* Add more menu items here */}
                                </ul>
                            </li>
                            {/* service Dropdown */}
                            <li className="dropdown__item">
                                <div
                                    className={`nav__link ${activeDropdown === 'pages' ? 'active' : ''
                                        }`}
                                    onClick={() => handleDropdownClick('pages')}
                                >
                                    Services <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                                </div>

                                <ul
                                    className={`dropdown__menu dropdown ${showMenu && activeDropdown === 'pages' ? 'show-dropdown' : ''
                                        }`}
                                >
                                    <li>
                                        <Link to='/software-development' className="dropdown__link">Software Development</Link>
                                    </li>
                                    <li>
                                        <Link to='/web-development' className="dropdown__link"> Web Development</Link>
                                    </li>
                                    <li>
                                        <Link to='/wordpress' className="dropdown__link"> WordPress</Link>
                                    </li>
                                    <li>
                                        <Link to='/mobile-app-development' className="dropdown__link">Mobile App Development</Link>
                                    </li>
                                    <li>
                                        <Link to='/prodect-design' className="dropdown__link"> Product And Design</Link>
                                    </li>
                                    <li>
                                        <Link to='/ecommerce' className="dropdown__link">Ecommerce</Link>
                                    </li>
                                </ul>
                            </li>
                            {/* Traning dropdown */}
                            <li className="dropdown__item">
                                <div
                                    className={`nav__link ${activeDropdown === 'pages' ? 'active' : ''
                                        }`}
                                    onClick={() => handleDropdownClick('pages')}
                                >
                                    Traning <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                                </div>

                                <ul
                                    className={`dropdown__menu dropdown ${showMenu && activeDropdown === 'pages' ? 'show-dropdown' : ''
                                        }`}
                                >
                                    <li>
                                        {/* <Link to='/' className="nav__link dropdown__link" >Academy</Link>   */}
                                        <Link to='/' className="dropdown__link">Academy</Link>
                                    </li>
                                </ul>
                            </li>
                            {/* career dropdown */}
                            <li className="dropdown__item">
                                <div
                                    className={`nav__link ${activeDropdown === 'pages' ? 'active' : ''
                                        }`}
                                    onClick={() => handleDropdownClick('pages')}
                                >
                                    Career <i className="ri-arrow-down-s-line dropdown__arrow"></i>
                                </div>

                                <ul
                                    className={`dropdown__menu dropdown ${showMenu && activeDropdown === 'pages' ? 'show-dropdown' : ''
                                        }`}
                                >
                                    <li>
                                        <Link to='/internship' className="dropdown__link" >Internship</Link>
                                    </li>
                                    <li>
                                        <Link to='/jobs' className="dropdown__link" >Jobs</Link>
                                    </li>
                                </ul>
                            </li>
                            <button id='conatct-btn' onClick={() => Nevigate("/contact")}>Contact</button>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
