import React, { useEffect, useState } from "react";
import StudentMenubar from "../../Sheared/StudentMenubar/StudentMenubar";
import "./StudentDashboard.css";
import ProgressBar from "./../../../../node_modules/react-bootstrap/esm/ProgressBar";
import Footer from "./../../Sheared/Footer/Footer";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  const [courses, setCourses] = useState([]);

  const email = sessionStorage.getItem("email");
  const name = sessionStorage.getItem("name");

  useEffect(() => {
    fetch(`http://localhost:5000/myAppointment/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        console.log(data);
      });
  }, [email]);

  console.log(courses);
  if (courses.length <= 0) {
    return (
      <div>
        <StudentMenubar></StudentMenubar>
        <h1 className="text-danger">
          You have Not CLass Enrolled for enrollment please check out{" "}
        </h1>
        <Link className="items-parent" to="/courses">
          <h1 className="ms-3 items text-info">Enroll Now </h1>
        </Link>
        <Footer></Footer>
      </div>
    );
  }

  return (
    <div>
      <StudentMenubar></StudentMenubar>
      <div className="container">
        <h1 className="mt-5">
          Welcome back {name}, ready for your next lesson?
        </h1>
        <div className="my-course row container d-flex    align-items-center justify-content-between  p-5">
          {courses?.map((pd) => (
            <div className="my-class  col-lg-6 row d-flex p-3 mt-3">
              <div className="course-image col-lg-6 col-md-6 ">
                <img className="w-100" src={pd?.courseImage} alt="" />
              </div>
              <div className=" col-lg-6 col-md-6 text-start p-2">
                <h5>{[pd?.courseName]}</h5>
                <h6>{[pd?.courseTitle]}</h6>
                <p>{pd?.courseTeacher}</p>
                <h1>
                  <ProgressBar animated now={75} />
                </h1>
                <Link to={`/student/myClass/${pd?.category}`}>
                  <button className="btn btn-primary mt-3">
                    Continue Course
                  </button>
                </Link>
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
