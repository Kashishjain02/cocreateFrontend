import React from "react";
//import Navbar from "./Navbar";
//import BannerBackground from "../assets/background1.png";
import BannerImage from "../assets/Rectangle.jpg";
import logo1 from "../assets/Shell_logo.png";
import logo2 from "../assets/Tata_Consultancy_Services_Logo.png";
import logo3 from "../assets/World_Bank_Group_logo.png";
import logo4 from "../assets/OECD_logo.png";
import logo5 from "../assets/Netflix_2015_logo.png";
import logo6 from "../assets/IBM_logo.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

import "./home.css";

const Home = () => {
  return (
    <>
      <div>
        <div className="home-container">
          <div className="home-left-content">
            <h1 className="home-primary-heading">
              Best Place In The World To Build Your Startup
            </h1>
            <p className="home-primary-text">
              Co Create Labs is a game-changer in the startup ecosystem. It
              enables access to a global platform that brings together the best
              and brightest entrepreneurs, investors, mentors, and philanthropic
              organizations in an integrated ecosystem.
            </p>
            <div className="wrapper">
              <button className="secondary-button1">Start Growing</button>
              <button className="secondary-button2">
                <BsFillPlayCircleFill
                  size={300}
                  style={{ width: 50, height: 30 }}
                />
                Who are we
              </button>
            </div>
            {/* </div> */}
          </div>

          <div className="home-right-content">
            <div className="home-image-section rounded">
              {/* <img src={BannerImage} alt="" className="home-bannerimg"/> */}
              <iframe
                width="700"
                height="500"
                src="https://www.youtube.com/embed/OCnFnBtlg-c"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="logo-parent-container">
        <div className="logo-row">
          <img id="logo1" src={logo1} alt="logo1" />
          <img id="logo2" src={logo2} alt="logo2" />
          <img id="logo3" src={logo3} alt="logo3" />
          <img id="logo4" src={logo4} alt="logo4" />
          <img id="logo5" src={logo5} alt="logo5" />
          <img id="logo6" src={logo6} alt="logo6" />
        </div>
      </div>
    </>
  );
};

export default Home;
