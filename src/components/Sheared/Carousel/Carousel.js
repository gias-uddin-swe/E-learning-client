import React from "react";
import CarouselConfig from "./Carousel.coifg";
import "./Extra.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div className="carousel-container ">
      <CarouselConfig>
        <div>
          <div className="row container d-flex align-items-center justify-content-center text-start">
            <div className="col-md-6">
              <h1 className="carousel-title">React js</h1>
              <p className="p-2 mt-3">
                React. js is an open-source JavaScript library that is used for
                building user interfaces specifically for single-page
                applications. It's used for handling the view layer for web and
                mobile apps. React also allows us to create reusable UI
                components.
              </p>
              <Link to="/courses">
                <button className="carousel-button">Enroll Now</button>
              </Link>
            </div>
            <div className="col-md-6">
              <img
                className=""
                src="https://i.ibb.co/4KVj4cS/undraw-react-y7wq.png"
                alt="img1"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="row d-flex align-items-center justify-content-center text-start">
            <div className="col-md-6">
              <h1 className="carousel-title">JavaScript</h1>
              <p className="p-2 mt-3">
                JavaScript is used to develop interactive web applications.
                JavaScript can power featured like interactive images,
                carousels, and forms. The language can be used with back-end
                frameworks like Node. js to power the mechanics behind a web
                page, such as form processing and payments.
              </p>
              <Link to="/courses">
                <button className="carousel-button">Enroll Now</button>
              </Link>
            </div>
            <div className="col-md-6">
              <img
                className=""
                src="https://i.ibb.co/7NhGSW4/undraw-Code-typing-re-p8b9.png"
                alt="img1"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="row d-flex align-items-center justify-content-center text-start">
            <div className="col-md-6 ">
              <h1 className="carousel-title">Online Learning Platform</h1>
              <p className="p-2 mt-3">
                Online learning is certainly the more effective option for
                students, but it's also better for the environment. The Open
                University in Britain have found that online courses equate to
                an average of 90% less energy and 85% fewer CO2 emissions per
                student than traditional in person courses.
              </p>
              <Link to="/courses">
                <button className="carousel-button">Enroll Now</button>
              </Link>
            </div>
            <div className="col-md-6">
              <img
                className=""
                src="https://i.ibb.co/frX0HwM/undraw-Pair-programming-re-or4x.png"
                alt="img1"
              />
            </div>
          </div>
        </div>
      </CarouselConfig>
    </div>
  );
};

export default Carousel;
