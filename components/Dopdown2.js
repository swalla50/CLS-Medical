import React, { useState } from 'react';
import { MenuItems2 } from './MenuItems2';
import '../styles/Dropdown.module.css';
import Link from 'next/link'
import {Fragment} from 'react';

function Dropdown2() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Fragment>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems2.map((item, index) => {
          return (
            <li key={index}>
              <a
                className={item.cName}
                href={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <style jsx>
                    {`
                    .dropdown-menu {
                      width: 200px;
                      position: absolute;
                      top: 110px;
                      list-style: none;
                      text-align: start;
                      border-radius: 100px;
                      padding-top: 5%;
                    }
                    
                    .dropdown-menu li {
                      background: #00338e;
                      cursor: pointer;
                    }
                    
                    .dropdown-menu li:hover {
                      background: #1888ff;
                    }
                    
                    .dropdown-menu.clicked {
                      display: none;
                    }
                    
                    .dropdown-link {
                      display: block;
                      height: 100%;
                      width: 100%;
                      text-decoration: none;
                      color: #fff;
                      padding: 16px;
                    }
                    
                    @media screen and (max-width: 960px) {
                      .fa-caret-down {
                        display: none;
                      }
                    }
                    `}
                </style>
    </Fragment>
  );
}

export default Dropdown2;