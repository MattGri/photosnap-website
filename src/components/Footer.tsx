import React from 'react';
import '../styles/footer.scss';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  const CustomizedRightArrow = styled(ArrowRightAltIcon)`
    color: #fff;
    margin-left: 10px;
    cursor: pointer;
  `;

  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="firstBox">
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
        <div className="secondBox">
          <ul className="linksContainer">
            <li className="linkItem">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="linkItem">
              <Link className="link" to="/stories">
                Stories
              </Link>
            </li>
            <li className="linkItem">
              <Link className="link" to="/features">
                Features
              </Link>
            </li>
            <li className="linkItem">
              <Link className="link" to="/pricing">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="thirdBox">
          <button className="invite">Get an invite</button>
          <CustomizedRightArrow />
        </div>
      </div>
      <div className="lowerItems">
        <div className="iconsContainer">
          <a href="https://www.facebook.com/" target="blank">
            <FacebookIcon className="icons facebook" />
          </a>
          <a href="https://www.youtube.com/" target="blank">
            <YouTubeIcon className="icons youtube" />
          </a>
          <a href="https://www.twitter.com/" target="blank">
            <TwitterIcon className="icons twitter" />
          </a>
          <a href="https://www.pinterest.com/" target="blank">
            <PinterestIcon className="icons pinterest" />
          </a>
          <a href="https://www.instagram.com/" target="blank">
            <InstagramIcon className="icons instagram" />
          </a>
        </div>
        <div className="copyrightContainer">
          <p className="text">Copyright 2019. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
