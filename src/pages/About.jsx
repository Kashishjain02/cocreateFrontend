import React from "react";
import app from "../assets/app.jpeg";
import { Link } from "react-router-dom";
import consider from "../assets/consider.png";
import web from "../assets/web.png";
import appd from "../assets/app.jpg";
import sales from "../assets/sales.png";
import ui from "../assets/ui.png";
import innovate from "../assets/innovate.png";
import vedio from "../assets/vedio.png";
import women from "../assets/woman.png";
import phone from "../assets/iPhone Body.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../CSS/about.css";
import Iphoneimg from "../assets/iphoneimg.png";
import Greenellipse from "../assets/greenellipse.png";
import Blueellipse from "../assets/blueellipse.png";
import {
  faHandFist,
  faUsers,
  faCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export const About = () => {
  return (
    <>
      <section className="d-flex mx-md-5 my-5 align-items-center flex-column flex-md-row container-fluid justify-content-around">
        <div className="">
          <h1>About CCL</h1>
          <h2 className="fs-2">A game-changer in the startup ecosystem</h2>
          <p className="w-md-75 fs-5">
            It enables access to a global platform that brings together the best
            and brightest entrepreneurs, investors, mentors, and philanthropic
            organizations in an integrated ecosystem.
          </p>
          <p className="w-md-75 fs-5">
            With a network of world-class mentors from companies like Meta,
            Netflix, Uber, Shell, and Harvard University, along with the World
            Bank and OECD, and other multi-laterals, Co Create Labs is set to
            revolutionize the way start-ups are launched and grown.
          </p>
          <Link to="/about">
            <button className="bg-primary rounded my-3">
              Apply Now
            </button>
          </Link>
          <div className="d-flex align-items-center flex-column flex-md-row justify-content-evenly">
            <div>
              <FontAwesomeIcon className="fs-1" icon={faHandFist} />
              <p>EMPOWER</p>
              <p className="w-md-75">
                Empowering the world s best entrepreneurs through all stages of
                their growth with mentorship, funds and services.
              </p>
            </div>
            <div>
              <FontAwesomeIcon className="fs-1" icon={faUsers} />
              <p>COMMUNITY</p>
              <p className="w-md-75">
                Connecting the investors with a curated list of impactful &
                investment ready startups.
              </p>
            </div>
          </div>
        </div>
        <div className="me-md-5">
          <img
            className="w-100 rounded-3 responsive_img"
            src={app}
            alt="innovate"
          />
        </div>
      </section>

      <section
        className="container-fluid my-5 d-flex justify-content-evenly align-items-center flex-column flex-md-row px-md-5"
        style={{ backgroundColor: "#f4f7ff" }}>
        <div>
          <h1>Build Connections that help you grow your business</h1>
          <p>
            Co - Create Labs is a one of a kind ecosystem of global leaders and
            founders that
          </p>
          <span>connect businesses, people, expertise and funds.</span>
          <p>All this is within your reach today</p>
          <div className="d-flex gap-2 flex-column flex-md-row align-items-center my-3 justify-content-evenly">
            <Link to="/">
              <button className="bg-primary rounded-lg">
                Explore Connects
              </button>
            </Link>
            <Link className="text-decoration-none" to="/">
              <span className="text-primary px-5"> Learn More</span>
            </Link>
          </div>
        </div>
        <div className="">
          <img
            className="w-100 responsive_img m-md-3 rounded-3"
            src={vedio}
            alt="innovate"
          />
        </div>
      </section>

      <section className="container-fluid my-5">
        <div style={{ backgroundColor: "#f4f7ff" }} className="p-5 mx-md-5">
          <p className="text-primary">OUR CORE VALUES</p>
          <div className="d-flex justify-content-around flex-column flex-md-row">
            <div>
              <h1>Goal focused</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                consectetur ipsa consequuntur eum consequatur quaerat
                temporibus, obcaecati distinctio soluta nisi.
              </p>
            </div>
            <div>
              <h1>Continuous improvement</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                consectetur ipsa consequuntur eum consequatur quaerat
                temporibus, obcaecati distinctio soluta nisi.
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-x-hidden mt-5">
          <img src={consider} className="w-100 responsive_img" alt="img1" />
        </div>
      </section>

      <section className="container-fluid my-5 mx-md-5">
        <h1 className="text-center">The process we follow</h1>

        <div className="d-flex flex-column my-5 flex-md-row justify-content-between">
          <div className="">
            <div
              style={{ width: "80%" }}
              className="d-flex justify-content-between align-items-end">
              <span
                style={{ fontSize: "14px" }}
                className="bg-primary text-primary rounded-circle border-2 border-top border-primary">
                sfsd
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
            </div>
            <h1 className="fs-3">Planning</h1>
            <p className="w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              consequuntur!
            </p>
          </div>
          <div className="">
            <div
              style={{ width: "80%" }}
              className="d-flex justify-content-between align-items-end">
              <span
                style={{ fontSize: "14px" }}
                className="bg-primary text-primary rounded-circle border-2 border-top border-primary">
                sfsd
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
            </div>
            <h1 className="fs-3">Conception</h1>
            <p className="w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              consequuntur!
            </p>
          </div>
          <div className="">
            <div
              style={{ width: "80%" }}
              className="d-flex justify-content-between align-items-end">
              <span
                style={{ fontSize: "14px" }}
                className="bg-primary text-primary rounded-circle border-2 border-top border-primary">
                sfsd
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
            </div>
            <h1 className="fs-3">Design</h1>
            <p className="w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              consequuntur!
            </p>
          </div>
          <div className="">
            <div
              style={{ width: "80%" }}
              className="d-flex justify-content-between align-items-end">
              <span
                style={{ fontSize: "14px" }}
                className="bg-primary text-primary rounded-circle border-2 border-top border-primary">
                sfsd
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
              <span
                style={{ fontSize: "4px" }}
                className="bg-secondary rounded-circle text-secondary">
                sfs
              </span>
            </div>
            <h1 className="fs-3">Development</h1>
            <p className="w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              consequuntur!
            </p>
          </div>
        </div>
      </section>

      <section
        style={{ backgroundColor: "#f4f7ff" }}
        className="container-fluid py-md-5 my-5">
        <div className="d-flex my-3 flex-column align-items-center flex-md-row justify-content-md-evenly">
          <div className="mx-md-5 my-5">
            <h1 className="text-primary fs-5">Our Mission</h1>
            <h1>Inspire, Innovate, Share</h1>
            <p>
              Building a thriving community of mentors, investors,
              entrepreneurs, startups, evangelists and nonprofits through our
              integartes platform vis-a-vis 3 verticals of our company: Mentor
              Connect, Investor Connect & Grants Connect.
            </p>
          </div>
          <div className="">
            <img
              className="w-100 responsive_img"
              src={innovate}
              alt="innovate"
            />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center flex-md-row justify-content-evenly">
          <div className="">
            <img src={women} className="responsive_img" alt="innovate" />
          </div>
          <div className="mx-md-5 my-5">
            <h1 className="text-primary fs-5">Our Vision</h1>
            <h1>Laser focus</h1>
            <p>
              Democrating access to global expertise and funding opportunities
              for aspiring entrepreneurs, atartups, and nonprofits.
            </p>
          </div>
        </div>
      </section>

      <section className="d-flex justify-content-evenly flex-column flex-md-row container mx-md-5 my-5">
        <div className="px-md-5 w-md-75">
          <h1 className="w-md-50">
            We Recognize That Your <span className="text-primary">Time</span> Is
            The Most Expensive Capital In Your Startup
          </h1>
          <p className="w-md-50 fs-5">
            We introduce a unique credit system so that all this is accessible
            with ease to the busy founding team.
          </p>
          <div className="d-flex w-md-50 justify-content-around text-primary">
            <p>
              <FontAwesomeIcon icon={faCheck} />
              <span> CCL Credits</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} />
              <span> Easy to use</span>
            </p>
          </div>
          <div className="d-flex w-md-50 justify-content-around text-primary">
            <p>
              <FontAwesomeIcon icon={faCheck} />
              <span> Access (global experts)</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faCheck} />
              <span> No hidden cost </span>
            </p>
          </div>
          <p className="w-md-75 fs-5">
            Buy credit with Co-Create Labs and pre book sessions with leaders
            across the globe and begin your entrepreneurial journey with
            guidance & validation!
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-around w-md-50 align-items-center">
            <Link to="/">
              <button className="bg-primary rounded my-3">
                Apply Now
              </button>
            </Link>
            <Link className="text-decoration-none" to="/">
              <p className="text-primary text-decoration-none fs-5">
                Avail Free Credits
                <FontAwesomeIcon className="px-3" icon={faArrowRight} />
              </p>
            </Link>
          </div>
        </div>
        <div className="joinnow-rectangle-content-right">
          <div className="green-ellipse">
            <img src={Greenellipse} alt="" />
          </div>
          <div className="blue-ellipse">
            <img src={Blueellipse} alt="" />
          </div>
          <div className="iphone-img">
            <img src={Iphoneimg} alt="" />
          </div>
        </div>
      </section>

      <section
        style={{ backgroundColor: "#f4f7ff" }}
        className="container-fluid my-5 py-4">
        <h1 className="text-center fs-5 text-primary">Our Team</h1>
        <h1 className="text-center">KNOWLEDGE, DEEP EXPERIENCE & DIVERSITY</h1>
        <p className="text-center">
          At Co Create Labs, we bring our individual expertise and collective
          knowledge to help entrepreneurs thrive, investors find value &
          philanthropists create impact.
        </p>
        <p className="text-center">
          Over the years, we have worked across a range of industries and across
          small, medium size and large organizations. We leverage this
          pan-industry and vast organizational experience to create
          extraordinary value for all our stakeholders.
        </p>
        <div className="d-flex justify-content-around flex-wrap gap-5">
          <div
            style={{ position: "relative", width: "18rem" }}
            className="relative">
            <img
              src={web}
              style={{ width: "270px", left: "0px", top: "0px" }}
              alt="web"
            />
            <div
              style={{ bottom: "5%", left: "20%", position: "absolute" }}
              className="text-center bg-white p-3 rounded">
              <h6 className="fs-5">Coriss Ambady</h6>
              <h6>Web Developer</h6>
            </div>
          </div>
          <div
            style={{ position: "relative", width: "18rem" }}
            className="relative">
            <img
              src={appd}
              style={{ width: "270px", left: "0px", top: "0px" }}
              alt="web"
            />
            <div
              style={{ bottom: "5%", left: "20%", position: "absolute" }}
              className="text-center bg-white p-3 rounded">
              <h6 className="fs-5">Coriss Ambady</h6>
              <h6>App Developer</h6>
            </div>
          </div>
          <div
            style={{ position: "relative", width: "18rem" }}
            className="relative">
            <img
              src={ui}
              style={{ width: "270px", left: "0px", top: "0px" }}
              alt="web"
            />
            <div
              style={{ bottom: "5%", left: "20%", position: "absolute" }}
              className="text-center bg-white p-3 rounded">
              <h6 className="fs-5">Coriss Ambady</h6>
              <h6>UI/UX Developer</h6>
            </div>
          </div>
          <div
            style={{ position: "relative", width: "18rem" }}
            className="relative">
            <img
              src={sales}
              style={{ width: "270px", left: "0px", top: "0px" }}
              alt="web"
            />
            <div
              style={{ bottom: "5%", left: "20%", position: "absolute" }}
              className="text-center bg-white p-3 rounded">
              <h6 className="fs-5">Coriss Ambady</h6>
              <h6>Sales Manager</h6>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ backgroundColor: "#2f1893" }}
        className="p-4 container-fluid mt-5 d-flex align-items-center justify-content-around flex-wrap">
        <h1 className="text-center text-white fs-3">
          What Are You Waiting For? Start Your Growth Today!
        </h1>
        <button className="bg-primary my-3 my-md-0 rounded-circle fs-5">
          I’m in. Sign me up
        </button>
      </section>
    </>
  );
};
