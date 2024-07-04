import React, { useState } from "react";
import styled from "styled-components";
import GlobelButton from "../GlobelButton/GlobelButton";
import { IoHomeOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiContactsBookLine } from "react-icons/ri";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import { FaUserPen } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import LoginButton from "../Login/LoginButton";

import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ toggleTheme, theme }) => {
  const [menu, setMenu] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const handleMenu = () => setMenu(!menu);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setMenu(false);
  };

  const { isAuthenticated } = useAuth0();
  return (
    <Nav>
      <div className="container ">
        <div className="flex justify-between items-center   h-[90px] md:h-[130px] relative  ">
          <div className="logo md:mt-[-5px]">
            <NavLink to="/" onClick={() => handleItemClick("/")}>
              <img
                className="w-[150px]"
                // src="./assets/images/logo.webp"
                src="./assets/images/logo2.png"
                alt=""
              />
            </NavLink>
          </div>

          <div className="flex gap-4 overflow-hidden">
            <div
              className={`menu absolute md:static ${
                menu ? "menu-active" : ""
              }    md:bg-transparent`}
            >
              <ul className="menu-items flex flex-col md:flex-row py-6 md:py-0 gap-2 md:gap-2 lg:gap-4  ">
                <li
                  className={`menu-item ${activeItem === "/" ? "active" : ""} `}
                  onClick={() => handleItemClick("/")}
                >
                  <NavLink to="/">
                    <GlobelButton
                      text="Home"
                      icon={<IoHomeOutline size={20} />}
                    />
                  </NavLink>
                </li>
                <li
                  className={`menu-item ${
                    activeItem === "about" ? "active" : ""
                  } `}
                  onClick={() => handleItemClick("about")}
                >
                  <NavLink to="/about">
                    <GlobelButton text="About" icon={<FaRegUser size={20} />} />
                  </NavLink>
                </li>
                <li
                  className={`menu-item hidden md:block ${
                    activeItem === "resume" ? "active" : ""
                  } `}
                  onClick={() => handleItemClick("resume")}
                >
                  <NavLink to="/resume">
                    <GlobelButton
                      text="Resume"
                      icon={<FaRegFileAlt size={20} />}
                    />
                  </NavLink>
                </li>
                <li
                  className={`menu-item ${
                    activeItem === "work" ? "active" : ""
                  } `}
                  onClick={() => handleItemClick("work")}
                >
                  <NavLink to="/work">
                    <GlobelButton
                      text="Work"
                      icon={<IoBriefcaseOutline size={20} />}
                    />
                  </NavLink>
                </li>
                <li
                  className={`menu-item ${
                    activeItem === "contact" ? "active" : ""
                  } `}
                  onClick={() => handleItemClick("contact")}
                >
                  <NavLink to="/contact">
                    <GlobelButton
                      text="Contact"
                      icon={<RiContactsBookLine size={20} />}
                    />
                  </NavLink>
                </li>
                <li
                  className={`menu-item ${
                    activeItem === "blogs" ? "active" : ""
                  } `}
                  onClick={() => handleItemClick("blogs")}
                >
                  <NavLink to="/blogs">
                    <GlobelButton
                      text="Blogs"
                      icon={<FaUserPen  size={20} />}
                    />
                  </NavLink>
                </li>

                {isAuthenticated ? (
                  <li
                    className={`menu-item ${
                      activeItem === "profile" ? "active" : ""
                    } `}
                    onClick={() => handleItemClick("profile")}
                  >
                    <NavLink to="/profile">
                      <GlobelButton
                        text="Profile"
                        icon={<IoPersonCircleOutline size={20} />}
                      />
                    </NavLink>
                  </li>
                ) : (
                  <li className={`menu-item`}>
                    <NavLink>
                      <LoginButton
                        text="Login"
                        icon={<IoLogInOutline size={20} />}
                      />
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>

            <div className="theme-btn flex " onClick={toggleTheme}>
              {theme ? <MdOutlineWbSunny size={20} /> : <FaMoon size={20} />}
            </div>

            <div
              onClick={handleMenu}
              className={`menu-btn flex md:hidden ${
                menu ? "menu-icon-bg" : ""
              }`}
            >
              <RiMenu3Fill size={20} />
            </div>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  user-select: none;
  .menu {
    width: 100%;
    top: -300px;
    right: 0;
    transition: all 0.5s ease;
    opacity: 0;
    .menu-item.active {
      button {
        color: var(--white);
        background: var(--gradient);
      }
    }
  }
  .menu.menu-active {
    z-index: 99999;
    box-shadow: var(--box-shadow);
    background-color: var(--global-btn-bg);
    top: 80px;
    opacity: 1;
    padding-left: 20px;
    border-radius: 20px;
    button {
      color: var(--gray) !important;
      background: transparent !important;
    }
  }

  .theme-btn,
  .menu-btn {
    background-color: var(--global-btn-bg);
    color: var(--gray);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 0;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all var(--smooth-1);
    box-shadow: var(--box-shadow);
    &:hover {
      color: var(--white);
      background: var(--gradient);
    }
  }
  .menu-btn {
    background: var(--gradient);
    color: var(--white);
  }

  .menu-icon-bg {
    background: #1b74e4 !important;
  }
  .theme-btn {
    background-color: var(--theme-btn-colo);
    box-shadow: none;
  }

  @media (min-width: 768px) {
    .menu {
      opacity: 1;
    }
  }
`;
