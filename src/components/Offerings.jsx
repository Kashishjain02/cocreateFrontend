import React from "react";
import "./offerings.css";
import Offeringsimg from "../assets/rectangle.png";

const Offerings = () => {
  return (
    <div>
      <div className="offerings-parent-container">
        <div className="offerings-top-conatainer">
        <div className="offerings-primary-heading">
          <b>
            <h5>Our Offerings</h5>
          </b>
        </div>
        <div className="offerings-secondary-heading">
          <b>
            <p className="fs-1">
              Connecting with &nbsp;
              <span className="wrap">Leaders Across The GLOBE</span>
            </p>
          </b>
        </div>
        <div className="offerings-primary-text">
          <p className="offerings-text1">
            A first of its kind integrated global matchmaking platform to bring
            aspiring entrepreneurs, start-ups, mentors, investors, non-profits
            and philanthropists together to build a thriving community of
            entrepreneurship. We focus on ideas where technology, talent and
            capital can unlock long- term value and drive business growth.
          </p>
        </div>
        <div className="offeringsbutton-container">
          <button className="mentorconnect">Mentor Connect</button>
          <button className="investorconnect">Investor Connect</button>
          <button className="grantsconnect">Grants Connect</button>
        </div>
        </div>
        <div className="offerings-rectangle-box">
          <div className="offerings-box-content">
            <div className="offerings-left-content">
              <img src={Offeringsimg} alt="" className="offeringsimg1"/>
              <div className="case-study-container">
                <div className="case-study-title">
                  <p>
                    <b>Case Study</b>
                  </p>
                </div>

                <div className="case-study-heading">
                  Journey to $ 100K with CCL
                </div>

                <div className="case-study-button">Read Story</div>
              </div>
            </div>
            <div className="offerings-right-content">
              <div className="offerings-right-primary-title">
                What is Mentor Connect
              </div>
              <div className="offerings-right-primary-heading">
                <h3>
                  <b>Get Access to 1-on-1 Mentorship Sessions</b>
                </h3>
              </div>
              <div className="offerings-right-primary-text">
                <p>
                  Get Access to one-on-one mentorship sessions to accelerate
                  your journey with sector-specific (health tech, ed-tech etc) &
                  cross sector (marketing, branding, legal services etc.) vetted
                  experts.
                </p>
              </div>
              <div className="offerings-right-button-container">
                <button className="findmentor">Find Mentor</button>
                <button className="becomementor">Become Mentor</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
