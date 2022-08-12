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

  const CustomizedRightArrowStories = styled(ArrowRightAltIcon)`
    color: #000;
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
      <main className='wrapper'>
        <div className='blackBackground'>
        </div>
        <div className='storiesContainer'>
          <h2 className='title'>beautiful
            <br />
            stories
            <br />
            every time
          </h2>
          <p className='text'>We provide design templates to ensure your stories
            <br />
            look terrific. Easily add photos, text, embed maps and
            <br />
            media from other networks. Then share your story with
            <br />
            everyone.
          </p>
          <div className='viewContainer'>
            <button className='view'>view the stories</button>
            <CustomizedRightArrowStories />
          </div>
        </div>
      </main>
      <div>
        <div className='viewContainer'>
          <button className='view'>view the stories</button>
          <CustomizedRightArrowStories />
        </div>
        <div className='designedBackground'>
        </div>
      </div>
    </>
  )
}

export default Home