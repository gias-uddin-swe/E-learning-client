import React from "react";
import CountUp from "react-countup";
import "./EnorlledStudents.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

const EnorlledStudents = () => {
  return (
    <div className="mt-5 container w-100 m-auto enroll-container p-5">
      <h1>Total Enrolled Students</h1>
      <div className="row  p-5">
        <div className="col-md-6 col-lg-6 col-sm-12">
          <div className="students-img mt-5">
            <img
              src="https://i.pinimg.com/originals/b7/7b/6c/b77b6c352d21aabf0ff279a356d18195.gif"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
          {/* <div className="counter p-2">
            <div className="python-count counter-card">
              <div className="logo">
                <img
                  src="https://i.ibb.co/WW7mFWB/image-removebg-preview.png"
                  alt=""
                />
              </div>
              <CountUp duration={3.75} delay={0.3} end={50} />
            </div>

            <div className="web-count counter-card">
              <div className="logo">
                <img
                  src="https://i.ibb.co/HNmFpr5/image-removebg-preview-1.png"
                  alt=""
                />
              </div>
              <CountUp
                duration={2.75}
                data-aos="zoom-out"
                delay={0.5}
                end={50}
              />
            </div>
            <div className="extra-count counter-card">
              <div className="logo">
                <img
                  src="https://i.ibb.co/HNmFpr5/image-removebg-preview-1.png"
                  alt=""
                />
              </div>
              <CountUp duration={3.75} delay={0.3} end={50} />
            </div>
          </div> */}
          <div className="d-flex justify-content-between">
            <div data-aos="zoom-in-down" className="category w-50">
              <div className="category-logo">
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
                <img
                  className="w-50"
                  src="https://i.ibb.co/HNmFpr5/image-removebg-preview-1.png"
                  alt=""
                />
              </div>
              <h1 className="text-bold">
                {" "}
                <CountUp duration={4.75} delay={0.3} end={500} /> +
              </h1>
            </div>
            <div data-aos="zoom-in-left" className="category w-50 ms-5">
              <div className="category-logo">
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
                <img
                  className="w-50"
                  src="https://i.ibb.co/HNmFpr5/image-removebg-preview-1.png"
                  alt=""
                />
              </div>
              <h1 className="text-bold">
                {" "}
                <CountUp duration={4.75} delay={0.3} end={500} /> +
              </h1>
            </div>
          </div>
          <div data-aos="zoom-in-right" className="category w-50 m-auto">
            <div className="category-logo">
              {/* <FontAwesomeIcon icon={faCoffee} /> */}
              <img
                className="w-50"
                src="https://i.ibb.co/HNmFpr5/image-removebg-preview-1.png"
                alt=""
              />
            </div>
            <h1 className="text-bold">
              {" "}
              <CountUp duration={15.75} delay={0.3} end={250} /> +
            </h1>
          </div>
          <div className="d-flex justify-content-between">
            <div className="category w-50">
              <div className="category-logo">
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
                <img
                  className="w-50"
                  src="https://i.ibb.co/HNmFpr5/image-removebg-preview-1.png"
                  alt=""
                />
              </div>
              <h1 className="text-bold">
                {" "}
                <CountUp duration={4.75} delay={0.3} end={500} /> +
              </h1>
            </div>
            <div data-aos="zoom-in-up" className="category w-50 ms-5">
              <div className="category-logo">
                {/* <FontAwesomeIcon icon={faCoffee} /> */}
                <img
                  className="w-50"
                  src="https://i.ibb.co/HNmFpr5/image-removebg-preview-1.png"
                  alt=""
                />
              </div>
              <h1 className="text-bold">
                {" "}
                <CountUp duration={4.75} delay={0.3} end={500} /> +
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnorlledStudents;
