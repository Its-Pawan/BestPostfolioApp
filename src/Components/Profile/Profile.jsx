import React from "react";
import styled from "styled-components";
import Copyright from "../Copyright/Copyright";
import { useAuth0 } from "@auth0/auth0-react";
import GlobelButton from "../GlobelButton/GlobelButton";
import { CiLogout } from "react-icons/ci";
const Profile = () => {
  const { logout, user, isAuthenticated } = useAuth0();
  //   <button
  //   onClick={() =>
  //     logout({ logoutParams: { returnTo: window.location.origin } })
  //   }
  //   className="flex items-center gap-2"
  // >
  //   out
  // </button>
  return (
    <Info>
      <div className="container">
        <div className="container-box">
          {isAuthenticated ? (
            <div className="content  flex flex-col justify-center items-center ">
              <img
                src={user.picture}
                alt={user.name}
                className="w-28 rounded-full mb-2"
              />
              <h2 >
                Hello, <span className="">{user.name}</span>{" "}
              </h2>
              <h3>Welcome to My Portfolio</h3>
              <p className="w-[90%] md:w-[60%] text-center pt-4">
                Upon successful login, you've unlocked exclusive access to my
                contact details. Now, you can easily reach out to me through my
                contact number or email, fostering seamless communication and
                collaboration. Additionally, you have the privilege to download
                my resume, enabling you to explore my professional background
                and qualifications in greater detail. This enhanced
                accessibility enhances our interaction, facilitating smoother
                connections and empowering you to engage more deeply with the
                content and opportunities available on the platform.{" "}
              </p>

              <div
                className="logout-btn"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                <GlobelButton text="Log Out" icon={<CiLogout size={20} />} />
              </div>
            </div>
          ) : (
            <div className="content flex items-center justify-center">
              <h3>SignUp or LogIn to Continue</h3>
            </div>
          )}
          <Copyright />
        </div>
      </div>
    </Info>
  );
};

export default Profile;

const Info = styled.div`
  .content {
    min-height: 100vh;
    color: var(--gray);
    img {
      box-shadow: var(--box-shadow);
    }
    h2 {
      text-align: center;
      font-weight: 400;
      color: var(--black);
      letter-spacing: 0.05em;
      padding-bottom: 5px;
      span {
        font-weight: 600;
      }
    }
    h3 {
      letter-spacing: 0.2em;
    }
    p {
      line-height: 1.8;
    }
    .logout-btn {
      margin-top: 2rem;
      width: 20rem;
      box-shadow: var(--box-shadow);
      border-radius: 10px;
      button {
        font-weight: 600;
        justify-content: center;
        width: 100% !important;
      }
    }
  }
`;
