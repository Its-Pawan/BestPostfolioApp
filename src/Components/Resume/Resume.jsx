// import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CiLocationArrow1 } from "react-icons/ci";
import ProgressBar from "../ProgressBar/ProgressBar";
import Copyright from "../Copyright/Copyright";

const Resume = () => {
  return (
    <Introduction>
      <div className=" container">
        <div className="container-box">
          <div className="inner-container">
            <h2 className="global-heading">Resume</h2>
            <div className="content grid grid-cols-1 md:grid-cols-2 md:place-items-center lg:grid-cols-3 gap-8 ">
              <div className="resume-row">
                <h2 className="flex gap-2 mb-4">
                  <span>
                    <img src="./assets/icons/edu-icon-2.webp" alt="education" />
                  </span>
                  Education
                </h2>
                <div className="row-contant flex flex-col gap-4">
                  <div className="row-box">
                    <p className="row-subtitle">2021 - 2024</p>
                    <h6 className="row-title">
                      Bachlor of Computer Applications - <br />
                      UOU,,
                    </h6>
                    <p className="row-text">Uttarakhand, India</p>
                  </div>
                  <div className="row-box">
                    <p className="row-subtitle">2024 - 2026</p>
                    <h6 className="row-title">
                      Master of Computer Application - <br />
                      Unknown,,
                    </h6>
                    <p className="row-text">Uttarakhand, India</p>
                  </div>
                </div>
              </div>

              <div className="resume-row">
                <h2 className="flex gap-2 mb-4">
                  <span>
                    <img
                      src="./assets/icons/Awards-icon.webp"
                      alt="CERTIFICATIONS"
                    />
                  </span>
                  CERTIFICATIONS
                </h2>
                <div className="row-contant flex flex-col gap-4">
                  <div className="row-box">
                    <p className="row-subtitle">July, 2023 - Dec, 2023</p>
                    <h6 className="row-title">
                      The Complete Web Development -<br />
                      Bootcamp,,
                    </h6>
                    <p className="row-text">by Dr. Angela Yu, Udemy</p>
                  </div>
                  <div className="row-box">
                    <p className="row-subtitle">Oct 2023 - Dec 2023</p>
                    <h6 className="row-title">
                      50 Projects In 50 Days- <br />
                      HTML, CSS & JS,,
                    </h6>
                    <p className="row-text">Udemy</p>
                  </div>
                </div>
              </div>

              <div className="resume-row">
                <h2 className="flex gap-2 mb-4">
                  <span>
                    <img
                      src="./assets/icons/exper-icon-2.webp"
                      alt="PROJECTS"
                    />
                  </span>
                  PROJECTS
                </h2>
                <div className="row-contant flex flex-col gap-4">
                  <div className="row-box">
                    <p className="row-subtitle">Web Development</p>
                    <h6 className="row-title">
                      Portfolio Website Using - HTML, CSS,
                      <br />
                      JS, Bootstrap,,
                    </h6>
                    <p className="row-text">
                      <a
                        className="flex items-center gap-1"
                        href="https://its-pawan.github.io/portfolio-main/"
                      >
                        Visit
                        <CiLocationArrow1 />
                      </a>
                    </p>
                  </div>
                  <div className="row-box">
                    <p className="row-subtitle">Web app Development</p>
                    <h6 className="row-title">
                      Business Website Using - ReactJS, <br />
                      SwiperJS,,
                    </h6>
                    <p className="row-text">
                      <a
                        className="flex items-center gap-1"
                        href="https://its-pawan.github.io/DidaSolutions/"
                      >
                        Visit
                        <CiLocationArrow1 />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-container mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-11">
              <div className="skill-bars ">
                <h4 className="skill-heading ">Working Skills</h4>
                <div className="bars flex flex-col  gap-16">
                  <ProgressBar
                    skillBarLevel={70}
                    skillBarColor={"--bar-color1"}
                    skillBarTitle="Web Development"
                  />
                  <ProgressBar
                    skillBarLevel={40}
                    skillBarColor={"--bar-color2"}
                    skillBarTitle="Web Design"
                  />
                  <ProgressBar
                    skillBarLevel={80}
                    skillBarColor={"--bar-color3"}
                    skillBarTitle="Responsive Layout"
                  />
                  <ProgressBar
                    skillBarLevel={90}
                    skillBarColor={"--bar-color4"}
                    skillBarTitle="Time Management"
                  />
                </div>
              </div>
              <div className="skills-badges">
                <h4 className="skill-heading">Knowledges</h4>
                <div className="skill-badges flex flex-wrap gap-8">
                  <div className="badge">ReactJS</div>
                  <div className="badge">Tailwind CSS</div>
                  <div className="badge">Communication</div>
                  <div className="badge">Bootstrap</div>
                  <div className="badge">Responsive Layout</div>
                  <div className="badge">Time Management</div>
                  <div className="badge">Team Work</div>
                </div>
              </div>
            </div>
          </div>
          <Copyright />
        </div>
      </div>
    </Introduction>
  );
};

export default Resume;

const Introduction = styled.div`
  .resume-row {
    h2 {
      text-transform: uppercase;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      color: var(--black);
      font-size: var(--font4);
      font-weight: 500;
    }
    .row-contant {
      .row-box {
        box-shadow: var(--box-shadow-dark);
        padding: 15px 20px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        min-height: 150px;
        background-color: var(--catkrill);
        border-radius: 10px;
        .row-subtitle {
          text-transform: capitalize;
          font-size: var(--font9);
          font-weight: 400;
          color: var(--gray);
        }
        .row-title {
          text-transform: capitalize;
          font-weight: 400;
          font-size: var(--font3);
          color: var(--black);
        }
        .row-text {
          text-transform: capitalize;
          font-size: var(--font6);
          a {
            transition: color var(--smooth-1);
            color: #fa5252;
            &:hover {
              color: #dd2476;
            }
          }
        }
      }
    }
  }

  .skills-container {
    .skill-heading {
      font-size: var(--font4);
      font-weight: 500;
      margin-bottom: 2rem;
      color: var(--black);
    }
    .skill-bars {
      .bars {
        padding: 40px 20px 40px 0;
      }
    }
    .badge {
      padding: 10px 20px;
      background-color: var(--catkrill);
      border-radius: 8px;
      color: var(--gray2);
      box-shadow: var(--box-shadow-dark);
    }
  }
  @media (min-width: 768px) {
    .global-heading::after {
      top: 40%;
    }
    h2 {
      padding-bottom: 1rem !important;
    }
    .row-box {
      padding: 40px 20px;
    }
  }
`;
