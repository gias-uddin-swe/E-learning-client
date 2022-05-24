import React from "react";
import { Link } from "react-router-dom";
import "./EnrollDate.css";
import OutlineTimeCount from "./OutlineTimeCount";

const EnrollDate = () => {
  return (
    <div className="mt-5 container enrol-notice-container">
      <h1 data-aos="zoom-in">CSE Fundamentals With Phitron</h1>

      <div className="enrolment-date-container">
        <div className="row ">
          <div
            data-aos="zoom-out"
            data-aos-duration="1500"
            className="col-md-6 col-lg-5 col-sm-12"
          >
            <div className="left-side-container border text-end p-3">
              <div className="cart w-75 border m-auto text-center">
                <div className="intro-video ">
                  <video width="250" height="150" controls>
                    <source
                      src="https://www.youtube.com/watch?v=CskchdyN9Qw"
                      type="video/mp4"
                    />
                  </video>
                </div>

                {/* logo  */}
                <div className="logos d-flex w-75 m-auto me-3 ">
                  <div className="logo-container ">
                    <img
                      className="img-fluid w-100 p-2"
                      src="https://phitron.io/static/media/calendar.0d8928fb.svg"
                      alt=""
                    />
                    <h2>12</h2>
                    <h6>Calendar</h6>
                  </div>
                  <div className="logo-container">
                    <img
                      className="img-fluid w-100 p-2"
                      src="https://phitron.io/static/media/semester.3c0a0a57.svg"
                      alt=""
                    />
                    <h2>12</h2>
                    <h6>semester</h6>
                  </div>

                  <div className="logo-container">
                    <img
                      className="img-fluid w-100 p-2"
                      src="https://phitron.io/static/media/star.c21a022c.svg"
                      alt=""
                    />
                    <h2>12</h2>
                    <h6>Certificate</h6>
                  </div>
                </div>

                <div className="corses-highlight row  align-items-center justify-content-center w-75 m-auto ">
                  <div className="col-md-4 p-2 d-flex ">
                    <img
                      className="small-icon"
                      src="https://i.ibb.co/k0SYGsr/download.png"
                      alt=""
                    />
                    <p>100 Notes</p>
                  </div>
                  <div className="col-md-4 p-2 d-flex">
                    <img
                      className="small-icon"
                      src="https://i.ibb.co/HtK84FV/download-1.png"
                      alt=""
                    />
                    <p>100 Notes</p>
                  </div>
                  <div className="col-md-4 p-2 d-flex">
                    <img
                      className="small-icon"
                      src="https://i.ibb.co/4SVxYR6/download-2.png"
                      alt=""
                    />
                    <p>100 Notes</p>
                  </div>
                </div>
                <div className="Price">
                  <h1 className="price">$6500</h1>
                  <Link to="/courses">
                    <button className="carousel-button">Enroll Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-right"
            data-aos-duration="1500"
            className="col-md-6 col-lg-7 col-sm-12"
          >
            <div className="right-side-container border text-left p-3 ">
              <h1>এনরোলমেন্ট শেষ হতে আর বাকি</h1>
              <div className="time-box">
                <OutlineTimeCount></OutlineTimeCount>
              </div>
              <div className="text-left p-3">
                <div className="d-flex align-items-center p-1 mt-2">
                  <img
                    className="small-icon-outline"
                    src="https://phitron.io/static/media/calendar-start.f103d906.svg"
                    alt=""
                  />
                  <h3 className="ms-2 enrollment-outline-title">
                    এনরোলমেন্ট শুরু: মার্চ ৫, ২০২২
                  </h3>
                </div>
                <div className="d-flex align-items-center p-1 mt-2">
                  <img
                    className="small-icon-outline"
                    src="https://phitron.io/static/media/calendar-end.dd758e53.svg"
                    alt=""
                  />
                  <h3 className="ms-2 enrollment-outline-title">
                    এনরোলমেন্ট শেষ: মার্চ ১৯, ২০২২
                  </h3>
                </div>
                <div className="d-flex align-items-center p-1 mt-2">
                  <img
                    className="small-icon-outline"
                    src="	https://phitron.io/static/media/time.4c740523.svg"
                    alt=""
                  />
                  <h3 className="ms-2 enrollment-outline-title">
                    ব্যাচের ওরিয়েন্টশন: মার্চ ২৪, ২০২২
                  </h3>
                </div>
                <div className="d-flex align-items-center p-1 mt-2">
                  <img
                    className="small-icon-outline"
                    src="		https://phitron.io/static/media/cap.1e693044.svg"
                    alt=""
                  />
                  <h3 className="ms-2 enrollment-outline-title">
                    ক্লাস শুরু: মার্চ ২৬, ২০২২
                  </h3>
                </div>
              </div>
              <div className="text-start">
                <h5 className="mt-3">
                  Payments Method:{" "}
                  <span>
                    Stripe{" "}
                    <img
                      className="bksh-logo"
                      src="https://i.ibb.co/SRfVgCD/download-3.png"
                      alt=""
                    />
                    bKash payment
                  </span>
                </h5>
                <h5 className="mt-4">
                  <span>
                    <img
                      className="bksh-logo "
                      src="https://i.ibb.co/SRfVgCD/download-3.png"
                      alt=""
                    />
                    Manual bKash: ০১021212121212 (মার্চেন্ট অ্যাকাউন্ট)
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollDate;
