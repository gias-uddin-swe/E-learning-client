import React from "react";
import "./AllCourses.css";
import Courses from "./../../Home/Courses/Courses";
import Menubar from "../Menubar/Menubar";
import Footer from "../Footer/Footer";

const AllCourses = () => {
  return (
    <div>
      <Menubar></Menubar>
      <div className="courses">
        <Courses></Courses>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllCourses;
