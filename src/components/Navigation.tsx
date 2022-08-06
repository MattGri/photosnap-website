import React from 'react';
import '../styles/navigation.scss';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className='wrapper'>
        <svg className='triangle' width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16L9.5 0L19 16H0Z" fill="url(#paint0_linear_0_4430)" />
          <defs>
            <linearGradient id="paint0_linear_0_4430" x1="9.5" y1="20" x2="16.6529" y2="3.01176" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFC593" />
              <stop offset="0.519452" stop-color="#BC7198" />
              <stop offset="1" stop-color="#5A77FF" />
            </linearGradient>
          </defs>
        </svg>
        <h4 className='logo'>photosnap</h4>


      </div>
      <div>
        <ul className='itemsContainer'>

          <li>
            <Link className='navItem' to='/stories'>Stories</Link>

          </li>
          <li>
            <Link className='navItem' to='/features'>Features</Link>
          </li>
          <li>
            <Link className='navItem' to='/pricing'>Pricing</Link>
          </li>
        </ul>
      </div>
      <div>
        <button className='invite'>get an invite</button>
      </div>
    </nav>
  )
}

export default Navigation