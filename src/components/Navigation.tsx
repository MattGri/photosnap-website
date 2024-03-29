import React, { useState } from 'react';
import '../styles/navigation.scss';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="wrapper">
        <svg
          className="triangle"
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 16L9.5 0L19 16H0Z"
            fill="url(#paint0_linear_0_4430)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_4430"
              x1="9.5"
              y1="20"
              x2="16.6529"
              y2="3.01176"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFC593" />
              <stop offset="0.519452" stop-color="#BC7198" />
              <stop offset="1" stop-color="#5A77FF" />
            </linearGradient>
          </defs>
        </svg>
        <h4 className="logo">photosnap</h4>
      </div>
      <button className="menuIcon" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div>
        <ul className="itemsContainer">
          <li>
            <NavLink className="navItem" to="/">
              Stories
            </NavLink>
          </li>
          <li>
            <NavLink className="navItem" to="/features">
              Features
            </NavLink>
          </li>
          <li>
            <NavLink className="navItem" to="/pricing">
              Pricing
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <button className="invite">get an invite</button>
      </div>
      {isOpen && (
        <div className="showMenus">
          <ul className="itemsContainers">
            <li>
              <NavLink className="showNavItems" to="/">
                Stories
              </NavLink>
            </li>
            <li>
              <NavLink className="showNavItems" to="/features">
                Features
              </NavLink>
            </li>
            <li>
              <NavLink className="showNavItems" to="/pricing">
                Pricing
              </NavLink>
            </li>
          </ul>
          <span className="line"></span>
          <div>
            <button className="showInvites">get an invite</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
