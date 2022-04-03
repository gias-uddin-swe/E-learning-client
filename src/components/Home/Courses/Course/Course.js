import React from "react";
import { Link } from "react-router-dom";
import "../Courses.css";

const Course = ({ course }) => {
  const { price, name, title, note, assignment, quiz, courseImg } =
    course || {};

  return (
    <div className="col-md-6 col-lg-4 col-sm-12">
      <div data-aos="zoom-in" data-aos-duration="1000" className="course-card">
        <div className="card">
          <div className="course-img">
            <img src={courseImg} alt="" />
          </div>
          <div className="course-details">
            <div className=" text-left d-flex justify-content-around course-name">
              <button className="text-left course-title">$ {price}</button>
              <button className="text-right course-title">{name}</button>
            </div>
            <div className="">
              <h3 className="text-center  course-title">{title}</h3>
            </div>
            <div className="corses-highlight row  align-items-center justify-content-center w-75 m-auto ">
              <div className="col-md-4 p-2 d-flex ">
                <img
                  className="small-icon"
                  src="https://i.ibb.co/k0SYGsr/download.png"
                  alt=""
                />
                <p>{note}</p>
              </div>
              <div className="col-md-4 p-2 d-flex">
                <img
                  className="small-icon"
                  src="https://i.ibb.co/HtK84FV/download-1.png"
                  alt=""
                />
                <p>{assignment}</p>
              </div>
              <div className="col-md-4 p-2 d-flex">
                <img
                  className="small-icon"
                  src="https://i.ibb.co/4SVxYR6/download-2.png"
                  alt=""
                />
                <p>{quiz}</p>
              </div>
            </div>

            <div className=" d-flex justify-content-around align-items-center">
              <p id="review">(2 Reviews)</p>
              <p>05h 15m </p>
            </div>
          </div>
          <Link to={`/courseDetails/${"python"}`}>
            <button className="enrollment-button">Enroll Now </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
