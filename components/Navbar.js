import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import styles from './Navbar.module.css';
import Dropdown from '../components/Dropdown';
import Dropdown2 from './Dopdown2';
import { Fragment } from 'react';
import Image from 'next/image'


function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
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

      const onMouseEnter2 = () => {
        if (window.innerWidth < 960) {
          setDropdown2(false);
        } else {
          setDropdown2(true);
        }
      };
    
      const onMouseLeave2 = () => {
        if (window.innerWidth < 960) {
          setDropdown2(false);
        } else {
          setDropdown2(false);
        }
      };

      const [scrollY, setScrollY] = useState(0);
      useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        // just trigger this so that the initial state 
        // is updated as soon as the component is mounted
        // related: https://stackoverflow.com/a/63408216
        handleScroll();
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
    return (
      
        <Fragment>
            <nav className={scrollY > 20 ? "navbar active" : "navbar"} id= 'navbar'>
            <div className='menu-icon' onClick={handleClick}>
                        <i className= {click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
                <ul className='sponsor-list' style={{listStyleType:'none', display:'inline-flex',marginTop:'20px' ,justifyContent:'center'}}>
                    <li className='sponsor-item'>
                        <Link href='https://rockforareason.org/' className='logo-sponsor-item' onClick={closeMobileMenu}>
                            <a><Image classname='partner-logo'src='/images/rockfar.png' alt='rfar'  height="70px" width="70px"/></a>
                        </Link>
                    </li>
                    <li className='sponsor-item'>
                        <Link  href='/bigbear' className='logo-sponsor-item' onClick={closeMobileMenu}>
                        <a><Image classname='partner-logo'  src='/images/thumbnail.png' alt='bigbear'  height="70px" width="70px" /></a>
                        </Link>
                    </li>
                    <li className='sponsor-item'>
                        <Link href='https://www.southernproperlinen.com/' className='logo-sponsor-item' onClick={closeMobileMenu}>
                            <a><Image classname='partner-logo'src='/images/southern.png' alt='soutehernproper'  height="70px" width="100px" /></a>
                        </Link>
                    </li>
                </ul>
                    
                <div className={scrollY > 20 ? "upper-nav1 active" : "upper-nav1"}>
                </div>
                <div className={scrollY > 20 ? "upper-nav2 active" : "upper-nav2"}>
                </div>
                
                <div className='lower-nav'>

                <Link className = "navbar-container-logo"  style={{display:'inline-block', justifyContent: 'center', alignItems:'center', height: 'auto', maxWidth: '1500px', textAlign: 'center'}}id='logo' href='/'>
                    <Image src = "/images/transparentlogo.png" height="50px" width="150px" alt = "Logo"/>
                </Link>

                <div className = "navbar-container" >
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link href='/' className='nav-links' onClick={closeMobileMenu}>
                                <a>HOME</a>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                            href='/services'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                                <a>SERVICES</a>
                            </Link>
                        </li>
                        <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter2}
                        onMouseLeave={onMouseLeave2}
                        >
                            <Link
                            href='/VIP'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                                <a>PROGRAMS <i className="fas fa-plus" style={{height:'15px'}}/></a>
                            </Link>
                            {dropdown2 && <Dropdown2 />}
                        </li>
                        <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        >
                            <Link
                            href='/about'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            >
                                <a>ABOUT <i className="fas fa-plus" style={{height:'15px'}}/></a>
                            </Link>
                            {dropdown && <Dropdown />}
                        </li>
                        <li className='nav-item'>
                            <Link href='/contact' className='nav-links' onClick={closeMobileMenu}>
                                <a>CONTACT</a>
                            </Link>
                        </li>
                        <li className='nav-item1'>
                            <Link href='/' className='nav-links' >
                               <a onClick={closeMobileMenu}>HOME</a>
                            </Link>
                        </li>
                        <li className='nav-item1'>
                            <Link href='/services' className='nav-links'>
                               <a onClick={closeMobileMenu}>SERIVICES</a>
                            </Link>
                        </li>
                        <li className='nav-item1'>
                            <Link href='/VIP' className='nav-links'>
                               <a onClick={closeMobileMenu}>V.I.P.</a>
                            </Link>
                        </li>
                        <li className='nav-item1'>
                            <Link href='/one' className='nav-links'>
                               <a onClick={closeMobileMenu}>O.N.E.</a>
                            </Link>
                        </li>
                         <li className='nav-item1'>
                            <Link href='/about' className='nav-links'>
                               <a onClick={closeMobileMenu}>THE TEAM</a>
                            </Link>
                        </li>
                        <li className='nav-item1'>
                            <Link href='/faq' className='nav-links'>
                               <a onClick={closeMobileMenu}>FAQ</a>
                            </Link>
                        </li>
                        <li className='nav-item1'>
                            <Link href='/employment' className='nav-links'>
                                <a onClick={closeMobileMenu}>Employment</a>
                            </Link>
                        </li>
                        <li className='nav-item1'>
                            <Link href='/contact' className='nav-links'>
                                <a onClick={closeMobileMenu}>CONTACT</a>
                            </Link>
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

                  .navbar.active{
                    display: inline-flex;
                  }

                  .upper-nav1.active{
                    display: none;
                  }
                  .upper-nav2.active{
                    display: none;
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
                  @media screen and (max-width: 960px){
                    .navbar-container{
                      width:0%;
                    }
                    .lower-nav{
                      place-self: center;
                    }
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
                  a{
                    color: #00338e;
                    padding:15px;
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
                  @media screen and (min-width: 960px){
                  .nav-item1 {
                    display: hidden;
                    }
                }
                @media screen and (max-width: 960px){
                    .nav-item1 {
                      font-size:25px;
                      height: 0px;
                      }
                    .nav-item {
                        display: none;
                    }
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
                      padding-top:20%;
                      padding-bottom:20%;
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
