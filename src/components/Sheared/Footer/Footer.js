import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import facebook from "react-useanimations/lib/facebook";
import instagram from "react-useanimations/lib/instagram";
import linkedin from "react-useanimations/lib/linkedin";
import twitter from "react-useanimations/lib/twitter";
import paymentsimg from "../../../Images/logo/payments.f8a603e8.png";

const Footer = () => {
  return (
    <div className="footer bg-dark">
      <div className="mt-5 container  p-5">
        <h1>Footer</h1>
        <div className="logo text-start ">
          <img src="https://i.ibb.co/4fCvf42/image.png" alt="" />
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 text-start mt-4 footer-text">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faLocationDot} />
              <adress className="ms-2">
                Level-4, 34, Awal Centre, Banani, Dhaka
              </adress>
            </div>
            <br />
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <p className="ms-2">Official: support@phitron.io</p>
            </div>

            <br />
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faPhone} />
              <p className="ms-2">
                Helpline : 01322810867 , 01322810873 (Available : 10AM - 5PM)
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <p className="footer-text">Refund policy</p>
            <p className="footer-text">Terms and</p>
            <p className="footer-text">Privacy Policy</p>
            <p className="footer-text">Conditions</p>
            <p className="footer-text">Conditions</p>
            <p className="footer-text">Policy</p>
          </div>
          <div className="col-lg-4 col-md-4">
            <p className="footer-text">About us</p>
            <p className="footer-text">Success</p>
            <div className="incos d-flex justify-content-center">
              <a className="footer-text" href="">
                <UseAnimations
                  animation={github}
                  animationKey="github"
                  size={46}
                  style={{ padding: 100, textAlign: "end", color: "white" }}
                />
              </a>
              <a className="footer-text" href="">
                <UseAnimations
                  animation={facebook}
                  animationKey="facebook"
                  size={46}
                  style={{ padding: 100, textAlign: "end", color: "white" }}
                />
              </a>
              <a className="footer-text" href="">
                <UseAnimations
                  animation={instagram}
                  animationKey="instagram"
                  size={46}
                  style={{ padding: 100, textAlign: "end", color: "white" }}
                />
              </a>
              <a className="footer-text" href="">
                <UseAnimations
                  animation={linkedin}
                  animationKey="linkedin"
                  size={46}
                  style={{ padding: 100, textAlign: "end", color: "white" }}
                />
              </a>
              <a className="footer-text" href="">
                <UseAnimations
                  animation={twitter}
                  animationKey="twitter"
                  size={46}
                  style={{ padding: 100, textAlign: "end", color: "white" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="payments-photo mt-4">
          <img src={paymentsimg} alt="" />
        </div>
        <p className="text-white mt-5">
          {" "}
          <small>Copyright © 2022 e-learning.io</small>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
