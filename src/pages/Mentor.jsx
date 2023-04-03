import React from "react";
import Card from "../components/cards";
import mentor from "../assets/mentor.png"
import map from "../assets/Bitmap.png";
import profile from "../assets/profile.jpg";
import "../CSS/mentor.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Mentor = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="welcome">
        <div className="d-flex flex-column justify-content-center h-100 align-items-center">
          <h1 className="fw-bold welc">
            Learn And Grow With Help From World-Class Mentors
          </h1>
          <p className="fs-5 pb-5 mb-5 text-center" style={{ width: "35%" }}>
            Book and meet over 6,086+ mentors for 1:1 mentorship in our global
            community.
          </p>
          <div
            className="grp mx-auto rounded-5 mt-3"
            style={{ borderRadius: "50px" }}>
            <input
              type="text"
              className="py-3"
              placeholder="Search by company, language or role"
              aria-label="Search"
            />
            <span className="py-3">Expertise</span>
            <span className="py-3">Country</span>
            <Link to="/mentor">
              <FontAwesomeIcon
                className="p-3  px-5 fw-bold fs-4 text-white"
                style={{
                  backgroundColor: "rgb(74,144,226)",
                  borderRadius: "50px",
                }}
                icon={faMagnifyingGlass}
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="overflow-x-hidden mt-5">
        <img src={mentor} className="w-100 responsive_img" alt="img1" />
      </section>

      {/* Section 3 */}
      <section className="overflow-x-hidden position-relative">
        <div className="session mx-auto my-5">
          <div className="box"></div>
          <div className="disc">
            <div className="disc-int"></div>
          </div>
          <img className="profile" src={profile} alt="mentor" />
          <div className="mx-5">
            <span style={{ color: "rgb(203,203,203)" }}>ABOUT US</span>
            <h1 className="fw-bold">Book 1:1 Sessions</h1>
            <h3 className="fw-normal">Professional Business Mentors</h3>
            <p
              className="flex-wrap text-break"
              style={{ color: "rgb(154,161,171)" }}>
              Schedule a session instantly with a mentor and work with them
              directly on CCL whether it s for one off tactical advice or
              multiple sessions towards a long term goal.
            </p>
            <p
              className="flex-wrap text-break"
              style={{ color: "rgb(154,161,171)" }}>
              Schedule a session instantly with a mentor and work with them
              directly on CCL whether it s for one off tactical advice or
              multiple sessions towards a long term goal.
            </p>
            <Link to="/mentor">
              <button
                id="explore"
                className="p-3 px-4 text-white rounded-pill border-0 outline-0"
                style={{ backgroundColor: "rgb(74,144,226)" }}>
                EXPLORE MENTORS
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="overflow-x-hidden my-5">
        <p
          className="mx-auto"
          style={{ textAlign: "center", color: "rgb(203,203,203)" }}>
          GET STARTED
        </p>
        <h1 className="skillset mx-auto">
          Expand your skillset, gain insights, and get support from mentors at
          no cost.
        </h1>
        <img className="px-5 w-100 responsive_img" src={map} alt="map" />
      </section>

      {/* Section 5 */}
      <section className="overflow-x-hidden my-5">
        <p
          className="mx-auto"
          style={{ textAlign: "center", color: "rgb(203,203,203)" }}>
          OUR TESTIMONALS
        </p>
        <h1 className="test mx-auto">Wins from all around the globe</h1>
        <div id="cards">
          <Card
            style={{ backgroundColor: "rgb(74,144,226)", color: "white" }}
          />
          <Card />
          <Card />
        </div>
      </section>

      {/* Section 6 */}
      <section
        id="mentorship"
        className="d-flex align-items-center justify-content-center my-5">
        <div
          style={{ opacity: "" }}
          className="d-flex justify-content-center align-items-center flex-column">
          <h1 className=" mx-auto">
            Your Next Chapter, Made Possible With Mentorship.
          </h1>
          <h4 className="fw-normal mentors my-2">
            Explore 4000+ mentors from 60+ countries, to help you achieve and
            overcome any challenges you face.
          </h4>
          <Link to="/mentor">
            <button
              id="start"
              className="p-3 my-2 px-4 text-white rounded-3 border-0 outline-0"
              style={{ backgroundColor: "rgb(74,144,226)" }}>
              GET STARTED
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};
