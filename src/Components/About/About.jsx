import styled from "styled-components";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import Skills from "../Skills/Skills";
import SkillsData from "./SkillsData";
import Copyright from "../Copyright/Copyright";
import { useAuth0 } from "@auth0/auth0-react";
const About = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <AboutMe>
      <div className=" container">
        <div className="container-box">
          <div className="inner-container">
            <h2 className="global-heading">About Me</h2>
            <div className="content">
              <div className="about">
                <div className="flex flex-col mt-8  lg:flex-row md:gap-8 ">
                  <div className="left  ">
                    <img
                      src="./assets/images/person2.webp"
                      alt="parson2"
                    />
                  </div>
                  <div className="right ">
                    <div className="upper">
                      <h4 className="intro-heading">Who Am I?</h4>
                      <p>
                        Hi, I am Pawan and I am a front-end web developer. My journey in technology shapes my
                        identity, blending creativity with code. I craft digital
                        experiences, intertwining aesthetics and functionality,
                        constantly evolving in the dynamic realm of web
                        development.
                      </p>
                      <br />
                      <p>
                        My aim is to bring across your message and identity in
                        the most creative way. I created web design for many
                        famous brand companies.
                      </p>
                    </div>
                    <div className="lower">
                      <h3>Personal Info</h3>
                      <div className="info grid grid-cols-1 md:grid-cols-2 md:mt-4 gap-4">
                        <div className="info-box">
                          <div className="icon">
                            <CiMobile3 />
                          </div>
                          <div className="intro">
                            <p>Phone</p>
                            <h6>
                              +91 7465{isAuthenticated ? "906545" : "******"}
                            </h6>
                          </div>
                        </div>
                        <div className="info-box">
                          <div className="icon">
                            <MdOutlineAttachEmail />
                          </div>
                          <div className="intro">
                            <p>Email</p>
                            <h6>
                              business
                              {isAuthenticated ? ".pawanjoshi" : "***********"}
                              @gmail.com
                            </h6>
                          </div>
                        </div>
                        <div className="info-box">
                          <div className="icon">
                            <IoLocationOutline />
                          </div>
                          <div className="intro">
                            <p>Location</p>
                            <h6>
                              Utta{isAuthenticated ? "rakhand" : "*******"},
                              India
                            </h6>
                          </div>
                        </div>
                        <div className="info-box">
                          <div className="icon">
                            <FaRegCalendarAlt />
                          </div>
                          <div className="intro">
                            <p>Birthday</p>
                            <h6>
                              {isAuthenticated ? "Jan 06, 2002" : "*** ** ****"}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skills">
                <h4 className="intro-heading">What I Do!</h4>
                <div className="box grid grid-cols-1 md:grid-cols-3 gap-8">
                  {SkillsData.map((data) => (
                    <Skills
                      key={data.id}
                      img={data.icon}
                      title={data.title}
                      desc={data.desc}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Copyright />
        </div>
      </div>
    </AboutMe>
  );
};

export default About;

const AboutMe = styled.div`
  .inner-container {
    .about {
      .left {
        width: 100%;
        height: 400px;
        margin: 0 0 60px;
        border-radius: 30px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 30px;
        }
      }

      .right {
        .upper {
          p {
            color: var(--gray);
            font-size: var(--font6);
          }
        }
        .lower {
          padding: 20px 0;
          h3 {
            font-size: var(--font4);
            font-weight: 500;
          }
          .info {
            .info-box {
              display: flex;
              gap: 10px;
              align-items: center;
              height: 50px;
              .icon {
                width: 40px !important;
                height: 40px;
                display: flex;
                justify-content: center;
                box-shadow: var(--box-shadow);
                border-radius: 5px;
                align-items: center;
                svg {
                  font-size: 26px;
                }
              }
              &:nth-child(1) {
                color: #e93b81;
              }
              &:nth-child(2) {
                color: #6ab5b9;
              }
              &:nth-child(3) {
                color: #fd7590;
              }
              &:nth-child(4) {
                color: #c17ceb;
              }

              .intro {
                p {
                  color: var(--gray2);
                  font-size: var(--font7);
                }
                h6 {
                  color: var(--black);
                  font-size: var(--font6);
                }
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 500px) {
    .inner-container {
      .left {
        width: 50% !important;
        height: 300px !important;
      }
    }
  }
  @media (min-width: 868px) {
    .left {
      width: 75% !important;
      height: 400px !important;

      img {
        width: 80% !important;
      }
    }
  }
  @media (min-width: 1100px) {
    .inner-container {
      .left {
        width: 50% !important;
        height: 400px !important;
        img {
          width: 100% !important;
          /* height: 100% !important; */
        }
      }
    }
  }
`;
