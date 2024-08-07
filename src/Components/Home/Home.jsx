import styled from "styled-components";
import GlobelButton from "../GlobelButton/GlobelButton";
import { IoMdDownload } from "react-icons/io";
import { FaGithub  } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

import { Link } from "react-router-dom";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Main>
      <div className="container w-full">
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="parson  flex flex-col justify-center items-center gap-4">
            <img
              className="rounded-full   "
              src="./assets/images/person.webp"
              alt="parson"
            />
            <h3>Pawan Joshi</h3>
            <p>Full Stack MERN Developer</p>
          </div>
          <div className="social flex gap-4">
            <a
              className="text-gray-700"
              target="_blank"
              href="https://github.com/Its-Pawan"
            >
              <FaGithub  size={24} />
            </a>
            <a
              className="text-blue-800"
              target="_blank"
              href="https://www.linkedin.com/in/pawan-joshi-8652a0268/"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              className="text-sky-400"
              target="_blank"
              href="https://twitter.com/UK02Pawan"
            >
              <FaTwitter size={24} />
            </a>
            <a
              className="text-pink-700"
              target="_blank"
              href="https://www.instagram.com/itz_pawan.pj___/"
            >
              <FaInstagram size={24} />
            </a>
          </div>
          <div className="cv mt-5 md:0 ">
            <a
              href="./cv.pdf"
              download="cv.pdf"
              title="Click to download resume"
            >
              <GlobelButton
                text="Download CV"
                icon={<IoMdDownload size={24} />}
              />
            </a>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Home;

const Main = styled.div`
  padding: 6rem 0;
  color: var(--black);
  .parson {
    h3 {
      font-size: var(--font4);
      font-weight: 600;
      margin-top: 12px;
    }
    p {
      font-size: var(--font3);
    }
  }
  .social {
    a {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--global-btn-bg);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all var(--smooth-1);
      &:hover {
        background: var(--gradient);
        color: var(--white);
      }
    }
  }
  .cv {
    button {
      font-size: var(--font2);
      color: var(--white);
      transition: all var(--smooth-1);
      background: var(--gradient) !important;
      height: 50px;
      padding: 0 19px;

      &:hover {
        background: var(--gradient2) !important;
        -webkit-box-shadow: 1px 5px 90px -1px rgba(221, 36, 118, 1);
        -moz-box-shadow: 1px 5px 90px -1px rgba(221, 36, 118, 1);
        box-shadow: 1px 5px 90px -1px rgba(221, 36, 118, 1);
      }
    }
  }
`;
