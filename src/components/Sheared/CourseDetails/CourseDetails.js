import React from "react";
import Footer from "../Footer/Footer";
import Menubar from "../Menubar/Menubar";
import "./CourseDetails.css";
import { Timeline } from "react-material-timeline";
import { Avatar, Icon } from "@material-ui/core";
import OutlineTimeCount from "./../../Home/EnrollDate/OutlineTimeCount";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  const events = [
    {
      title: "Event 1",
      subheader: new Date().toDateString(),
      description: ["Some description for event 1"],
      icon: (
        <Avatar>
          <Icon>1st</Icon>
        </Avatar>
      ),
    },
    {
      title: "Event 2",
      subheader: new Date().toDateString(),
      description: ["Some description for event 2"],
      icon: (
        <Avatar>
          <Icon>2nd</Icon>
        </Avatar>
      ),
    },
    {
      title: "Event 3",
      subheader: new Date().toDateString(),
      description: ["Some description for event 2"],
      icon: (
        <Avatar>
          <Icon>3rd</Icon>
        </Avatar>
      ),
    },
  ];
  return (
    <div>
      <Menubar></Menubar>
      <div className="course-details mt-5">
        <div className="d-flex align-items-center justify-content-center pb-4">
          <h1 className="course-title">price</h1>
          <h1 className="course-title ms-5">Titiel</h1>
        </div>
        <div className="row container d-flex align-items-center w-100 m-auto">
          <div className="col-lg-4 col-md-5">
            <div className="course-image">
              <img src="https://i.ibb.co/DpGMVwd/image.png" alt="" />
              <p className="mt-2 text-start p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita quam, nam numquam veniam minus, possimus molestiae sunt
                quisquam officia iure aut magni nisi aperiam consequuntur sed
                impedit. Inventore harum blanditiis eligendi veritatis commodi a
                ullam temporibus ipsum rem, illo saepe eius, pariatur
                reprehenderit dolorum cumque.
              </p>
              <div className="corses-highlight row  align-items-center justify-content-center w-75 m-auto ">
                <div className="col-md-4 p-2 d-flex ">
                  <img
                    className="small-icon"
                    src="https://i.ibb.co/k0SYGsr/download.png"
                    alt=""
                  />
                  <p className="ms-2">250 note</p>
                </div>
                <div className="col-md-4 p-2 d-flex">
                  <img
                    className="small-icon"
                    src="https://i.ibb.co/HtK84FV/download-1.png"
                    alt=""
                  />
                  <p className="ms-2">{"200 assignment"}</p>
                </div>
                <div className="col-md-4 p-2 d-flex">
                  <img
                    className="small-icon"
                    src="https://i.ibb.co/4SVxYR6/download-2.png"
                    alt=""
                  />
                  <p className="ms-2">100 Quiz</p>
                </div>
                <h5>Teachers Name : Jhon</h5>
              </div>
              <Link to="/paymentMethod">
                <button className="payment-button mt-2">$ {"Price"}</button>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-7">
            <Timeline events={events} />
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="right-side-container border text-left p-3 ">
              <h1>এনরোলমেন্ট শেষ হতে আর বাকি 3 </h1>
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
        <div className="d-flex align-items-center justify-content-center">
          <Link to="/bkashPayment">
            <img
              className="payment-logo"
              src="https://www.logo.wine/a/logo/BKash/BKash-bKash2-Logo.wine.svg"
              alt=""
            />
          </Link>
          <Link to="stripPayment">
            <img
              className="payment-logo"
              src="https://quasarn.com/wp-content/uploads/2021/01/Stripe.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CourseDetails;
