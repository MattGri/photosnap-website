import React from 'react';
import '../styles/home.scss';
import { styled } from '@mui/material/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Home = () => {


  const CustomizedRightArrow = styled(ArrowRightAltIcon)`
        color: #fff;
        margin-Left: 10px;
        cursor: pointer;
    `;

  return (
    <>
      <header className='wrapper'>
        <div className='stories'>
          <span className='line'></span>
          <div className='container'>
            <h1 className='title'>Create and
              <br />
              share your
              <br />
              photo stories.
            </h1>
            <p className='text'>
              Photosnap is a platform for photopgraphers and visual
              <br />
              storytellers. We make it easy to share photos, tell
              <br />
              stories and connect with others.
            </p>
            <div className='inviteContainer'>
              <button className='inviteButton'>get an invite</button>
              <CustomizedRightArrow />
            </div>
          </div>
        </div>
        <div className='photoContainer'></div>
      </header>
    </>
  )
}

export default Home