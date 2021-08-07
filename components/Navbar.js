import React, {useState} from 'react'
import Link from 'next/link';
import styles from './Navbar.module.css';
import Dropdown from '../components/Dropdown';
import { Fragment } from 'react';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };

    
    
    return (
        <Fragment>
            <nav className= "navbar" id= 'navbar'>
                <ul className='sponsor-list' style={{listStyleType:'none', display:'inline-flex',marginTop:'20px' ,justifyContent:'center'}}>
                    <li className='sponsor-item'>
                        <a href='https://rockforareason.org/' className='logo-sponsor-item' onClick={closeMobileMenu}>
                            <img classname='partner-logo'src='../images/rockfar.png' alt='rfar' />
                        </a>
                    </li>
                    <li className='sponsor-item'>
                        <a href='/bigbear' className='logo-sponsor-item' onClick={closeMobileMenu}>
                            <img classname='partner-logo'src='./images/thumbnail.png' alt='bigbear' />
                        </a>
                    </li>
                    <li className='sponsor-item'>
                        <a href='https://www.southernproperlinen.com/' className='logo-sponsor-item' onClick={closeMobileMenu}>
                            <img classname='partner-logo'src='./images/southern.png' alt='soutehernproper' />
                        </a>
                    </li>
                </ul>
                    
                <div className='upper-nav1'>
                </div>
                <div className='upper-nav2'>
                </div>
                
                <div className='lower-nav'>

                <Link className = "navbar-container-logo" id='logo' href='/'>
                    <img src = "./images/transparentlogo.png" style={{blockSize: "150px"}} alt = "Logo"/>
                </Link>

                <div className = "navbar-container" >
                    <div className='menu-icon' onClick={handleClick}>
                        <i className= {click ? 'fas fa-times':'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href='/' className='nav-links' onClick={closeMobileMenu}>
                                HOME
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                            href='/services'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                                SERVICES
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a 
                            href='/VIP' 
                            className='nav-links'  
                            onClick={closeMobileMenu}
                            >
                                V.I.P.
                            </a>
                        </li>
                        <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        >
                            <a
                            href='/about'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                                ABOUT <i className='fas fa-caret-down' />
                            </a>
                            {dropdown && <Dropdown />}
                        </li>
                        <li className='nav-item'>
                            <a href='/contact' className='nav-links' onClick={closeMobileMenu}>
                                CONTACT
                            </a>
                        </li>
                        <li className='nav-item1'>
                            <a href='/faq' className='nav-links' onClick={closeMobileMenu}>
                                FAQ
                            </a>
                        </li>
                        <li className='nav-item1'>
                            <a href='/employment' className='nav-links' onClick={closeMobileMenu}>
                                Employment
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
                <style jsx>{`
                .navbar {
                    background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%);
                    height: auto;
                    display: grid;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.2rem;
                    position: sticky;
                    top: 0;
                    z-index: 999;
                    box-shadow: 1px 7px 22px 4px #5B5B5B;;
                    width: 100%
                  }
                  .upper-nav{
                    display: inline-flex;
                    place-content: center;
                  }
                
                 
                  .lower-nav{
                    display: inline-flex;
                  }
                  .logo-sponsor-item > img{
                    height: 80px;
                    padding-right: 15px;
                    padding-left: 15px;
                  }
                
                  @media only screen and (max-width: 500px){
                    .logo-sponsor-item > img{
                      height: 50px;
                    }
                  }
                  .navbar-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    align-self: center;
                    height: 80px;
                    width: 100%;
                  }
                  .navbar-container-logo {
                    display:inline-block;
                    justify-content: center;
                    align-items: center;
                    height: auto;
                    max-width: 1500px;
                    text-align: center;
                    
                  }
                  .navbarlogo {
                    color: #fff;
                    justify-self: start;
                    margin-left: 20px;
                    cursor: pointer;
                    text-decoration: none;
                    font-size: 2rem;
                    display: flex;
                    align-items: center;
                  }
                  
                  .fa-typo3 {
                    margin-left: 0.5rem;
                    font-size: 1.8rem;
                  }
                  
                  .nav-menu {
                    display: inline-flex;
                    grid-template-columns: repeat(4, auto);
                    list-style: none;
                    text-align: center;
                    width: 60vw;
                    justify-content: space-evenly;
                    margin-right: 2rem;
                    font-weight: bold;
                  }
                
                  .nav-item {
                    color: #00338e;
                    height: 50px;
                    font-size: 25px;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                  }
                  .navitem1 {
                    height: 50px;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                  }
                  .nav-links {
                    color: #00338e;
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    padding: 0.5rem 1rem;
                    height: 100%;
                  }
                  
                  .nav-links:hover {
                    background-color: #fff;
                    color: #dc0000;
                    border-radius: 0;
                  }
                  
                  .fa-bars {
                    color: #dc0000
                    ;
                  }
                  
                  .navlinksmobile {
                    display: none;
                  }
                  
                  .menu-icon {
                    display:none;
                  }
                  
                  @media screen and (max-width: 960px) {
                    .NavbarItems {
                      position:absolute;
                
                    }
                  
                    .nav-menu {
                      display: flex;
                      flex-direction: column;
                      width: 100%;
                      height: 100vh;
                      position: absolute;
                      top: 0px;
                      left: -100%;
                      opacity: 1;
                      transition: all 0.5s ease;
                    }
                  
                    .nav-menu.active {
                      background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%);
                      left: 0;
                      opacity: 1;
                      transition: all 0.5s ease;
                      z-index: 1;
                    }
                  
                    .nav-links {
                      text-align: center;
                      padding: 1px;
                      width: 100%;
                      display: table;
                      font-size: 35px;
                    }
                  
                    .nav-links:hover {
                      background-color: #fff;
                      color: #dc0000;
                      border-radius: 0;
                    }
                
                    a.nav-links {
                      border-bottom: solid #00338e;
                  }
                  
                  
                    .navbar-logo {
                      position: absolute;
                      top: 0;
                      left: 0;
                      transform: translate(25%, 50%);
                    }
                  
                    .menu-icon {
                      display: block;
                      position:absolute;
                      top: 0;
                      right: 0;
                      transform: translate(-100%, 60%);
                      font-size: 1.8rem;
                      cursor: pointer;
                      z-index:10;
                    }
                  
                    .fa-times {
                      color: #dc0000;
                      font-size: 2rem;
                      z-index:10;
                    }
                  
                    .nav-links-mobile {
                      display: block;
                      text-align: center;
                      margin: 2rem auto;
                      border-radius: 4px;
                      width: 80%;
                      text-decoration: none;
                      font-size: 1.5rem;
                      background-color: transparent;
                      color: #fff;
                      padding: 14px 20px;
                      border: 1px solid #fff;
                      transition: all 0.3s ease-out;
                    }
                  
                    .nav-links-mobile:hover {
                      background: red;
                      color: #242424;
                      transition: 250ms;
                    }
                    .nav-item{
                      height:0px
                    }
                
                
                  }
                
                  @media screen and (min-width: 960px) {
                    .nav-item1{
                      display: none;
                    }
                  }
                
                
                
                .upper-nav1 {
                  position: relative;
                  display: block;
                  content: '';
                  border-top: 3px solid #e00808;
                  height: 100%;
                  width: 100%;
                  box-sizing: border-box;
                  -moz-box-sizing: border-box;
                  -webkit-box-sizing: border-box;
                }
                .upper-nav2 {
                  position: relative;
                  display: block;
                  content: '';
                  border-top: 3px solid #00338e;
                  height: 100%;
                  width: 100%;
                  box-sizing: border-box;
                  -moz-box-sizing: border-box;
                  -webkit-box-sizing: border-box;
                }
                `}
                </style>

            </nav>
        </Fragment>
    );
}

export default Navbar
