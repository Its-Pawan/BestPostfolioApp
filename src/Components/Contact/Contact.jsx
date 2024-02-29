import React, { useState } from "react";
import styled from "styled-components";
import GlobelButton from "../GlobelButton/GlobelButton";
import { IoIosSend } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";

import emailjs from "emailjs-com";
import Copyright from "../Copyright/Copyright";

const Contact = () => {
  const { isAuthenticated } = useAuth0();

  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    mgs: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_awxhyu6",
        "template_u1trkvp",
        e.target,
        "TfE1QO03KWTG5i6L-"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setFormStatus("Form Successfully Submitted.");
          setInputValues({
            name: "",
            email: "",
            mgs: "",
          });
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          setFormStatus("Form Submission Failed.");
        }
      );
  };
  return (
    <Connect>
      <div className=" container">
        <div className="container-box">
          <div className="inner-container">
            <h2 className="global-heading">Contact</h2>
            <div className="contact-content flex flex-wrap justify-between gap-4">
              <div className="contact-info flex flex-col gap-6 w-full lg:w-[30%]">
                <div className="contact-box ">
                  <div className="icon">
                    <img src="./assets/icons/phone-call.webp" alt="Contact" />
                  </div>
                  <div className="icon-info">
                    <h6>Phone :</h6>
                    <p>+91 9412{isAuthenticated ? "949745" : "******"}</p>
                    <p>+91 7465{isAuthenticated ? "906545" : "******"}</p>
                  </div>
                </div>

                <div className="contact-box ">
                  <div className="icon">
                    <img src="./assets/icons/email-icon.webp" alt="Email" />
                  </div>
                  <div className="icon-info">
                    <h6>Email :</h6>
                    <p>
                      business{isAuthenticated ? ".pawanjoshi" : "***********"}
                      <br />
                      @gmail.com
                    </p>
                  </div>
                </div>

                <div className="contact-box ">
                  <div className="icon">
                    <img src="./assets/icons/map-icon.webp" alt="Address" />
                  </div>
                  <div className="icon-info">
                    <h6>Address :</h6>
                    <p>Hal{isAuthenticated ? "dwani" : "*******"}</p>
                    <p>Utta{isAuthenticated ? "rakhand" : "*******"}, India</p>
                  </div>
                </div>
              </div>
              <div className="contact-form mt-8 md:mt-0 w-full lg:w-[60%]">
                <h6>I'm Always Open To Discussing Product</h6>
                <h5>Development or Partnerships.</h5>
                <form
                  onSubmit={handleSubmit}
                  className="form-container flex flex-col gap-12"
                >
                  <div className="form-box">
                    <input
                      name="name"
                      type="text"
                      required
                      value={inputValues.name}
                      onChange={handleChange}
                    />
                    <label
                      className={
                        inputValues.name ? "label label-click" : "label"
                      }
                      htmlFor="name"
                    >
                      Name *
                    </label>
                  </div>
                  <div className="form-box">
                    <input
                      name="email"
                      type="email"
                      required
                      value={inputValues.email}
                      onChange={handleChange}
                    />
                    <label
                      className={
                        inputValues.email ? "label label-click" : "label"
                      }
                      htmlFor="email"
                    >
                      Email *
                    </label>
                  </div>
                  <div className="form-box">
                    <textarea
                      name="mgs"
                      type="text"
                      rows={1}
                      required
                      value={inputValues.mgs}
                      onChange={handleChange}
                    ></textarea>
                    <label
                      className={
                        inputValues.mgs ? "label label-click" : "label"
                      }
                      htmlFor="mgs"
                    >
                      Message *
                    </label>
                  </div>
                  <div className="form-box form-box-sent">
                    <GlobelButton
                      text="Submit"
                      icon={<IoIosSend size={24} type="submit" />}
                    />
                    {formStatus && (
                      <p className=" text-[12px] mt-2 text-[#fa5252]">
                        {formStatus}
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Copyright />
        </div>
      </div>
    </Connect>
  );
};

export default Contact;

const Connect = styled.div`
  .contact-content {
    .contact-info {
      .contact-box {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        border-radius: 10px;
        padding: 0 20px;
        width: 100%;
        min-height: 100px;
        background-color: var(--catkrill);
        box-shadow: var(--box-shadow-dark);
        color: var(--black);
        .icon-info {
          h6 {
            color: var(--black);
            font-size: var(--font2);
            font-weight: 500;
          }
          p {
            color: var(--gray);
            font-size: var(--font3);
            font-weight: 400;
            line-height: 30px;
          }
        }
      }
    }
    .contact-form {
      h6 {
        color: var(--gray2);
        font-weight: 400;
        font-size: var(--font10);
      }
      h5 {
        font-size: var(--font10);
        color: var(--black);
        font-weight: 700;
        margin-bottom: 40px;
      }
      .form-container {
        position: relative;
        .form-box {
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all var(--smooth-1);
          input,
          textarea {
            all: unset;
            font-size: var(--font2);
            border-bottom: 1px solid var(--gray);
          }
          input:focus + .label,
          input:valid + .label,
          textarea:focus + .label,
          textarea:valid + .label {
            top: -100%;
          }
          .label {
            transition: all var(--smooth-1);
            position: absolute;
            top: 0;
            font-size: var(--font1);
          }
          .label-click {
            top: -100%;
          }
        }
        .form-box.form-box-sent {
          display: inline;
          button {
            border: 1px solid var(--gray);
            display: flex;
            flex-direction: row-reverse;
            justify-content: start;
            &:hover {
              border-color: transparent;
            }
          }
        }
      }
    }
  }
`;
