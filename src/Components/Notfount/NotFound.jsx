import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";

const NotFound = () => {
  return (
    <FloatingTextContainer>
      <div className="not-found-bg"></div>
      <p class="floating-text w-full justify-center flex items-center">
        <div className="w-auto nf-content ">
          <a href="/" className="justify-center flex items-center">
            <span className="font-bold border-r-2 pr-3 text-sm lg:text-4xl">
              404
            </span>
            <span className="pl-3 text-sm text-[var(--gray2)] ">
              This Page Could Not Be Found.{" "}
              <span className="text-[10px] text-blue-800 ">
                Back to Home<IoHomeOutline className="inline ml-1 mt-[-3px]"/>
              </span>
            </span>
          </a>
        </div>
      </p>
    </FloatingTextContainer>
  );
};

export default NotFound;

const FloatingTextContainer = styled.div`
  .not-found-bg {
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    background: #fff;
    object-fit: cover;
    background-position: center;
  }

  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;

  .floating-text {
    position: absolute;
    color: var(--black);
    text-transform: capitalize;
    /* font-weight: 600; */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: transparent;

    animation: floatUpDown 5s linear infinite;

    .nf-content {
      border-radius: 20px;
      padding: 10px 15px;
      border: 2px solid var(--black);
      transition: all var(--smooth-1);
      &:hover {
        border: 2px solid var(--bar-color3);
        background-color: var(--bar-color3);
        color: var(--white);
        transform: scale(1.05);
      }
    }
  }

  @keyframes floatUpDown {
    0%,
    100% {
      transform: translate(-50%, -50%) translateY(0); /* Start and end position */
    }
    50% {
      transform: translate(-50%, -50%) translateY(-80px); /* Float up */
    }
    75% {
      transform: translate(-50%, -50%) translateY(-80px); /* Float up */
    }
  }
`;
