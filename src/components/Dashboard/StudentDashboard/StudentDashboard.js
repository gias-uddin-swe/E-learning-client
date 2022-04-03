import React from "react";
import StudentMenubar from "../../Sheared/StudentMenubar/StudentMenubar";
import "./StudentDashboard.css";
import ProgressBar from "./../../../../node_modules/react-bootstrap/esm/ProgressBar";
import Footer from "./../../Sheared/Footer/Footer";

const StudentDashboard = () => {
  const Courses = [
    {
      batch: 5,
      author: "ঝংকার মাহবুব",
      titile: "Complete Web Development Course With Jhankar Mahbub",
      image: "https://web.programming-hero.com/thumbnail.png",
      id: 1,
    },
    {
      batch: 5,
      author: "ঝংকার মাহবুব",
      titile: "Complete Web Development Course With Jhankar Mahbub",
      image: "https://web.programming-hero.com/thumbnail.png",
      id: 2,
    },
    {
      batch: 5,
      author: "ঝংকার মাহবুব",
      titile: "Complete Web Development Course With Jhankar Mahbub",
      image: "https://web.programming-hero.com/thumbnail.png",
      id: 3,
    },
    {
      batch: 5,
      author: "ঝংকার মাহবুব",
      titile: "Complete Web Development Course With Jhankar Mahbub",
      image: "https://web.programming-hero.com/thumbnail.png",
      id: 4,
    },
  ];
  return (
    <div>
      <StudentMenubar></StudentMenubar>
      <div className="container">
        <h1 className="mt-5">
          Welcome back Md. Nur-E-Alom Siddiky, ready for your next lesson?
        </h1>
        <div className="my-course row container d-flex    align-items-center justify-content-between  p-5">
          {Courses.map((pd) => (
            <div className="my-class  col-lg-6 row d-flex p-3 mt-3">
              <div className="course-image col-lg-6 col-md-6 ">
                <img
                  className="w-100"
                  src="https://web.programming-hero.com/thumbnail.png"
                  alt=""
                />
              </div>
              <div className=" col-lg-6 col-md-6 text-start p-2">
                <h6>Complete Web Development Course With Jhankar Mahbub</h6>
                <p>ঝংকার মাহবুব</p>
                <h1>
                  <ProgressBar animated now={75} />
                </h1>
                <button className="btn btn-primary mt-3">
                  Continue Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default StudentDashboard;
