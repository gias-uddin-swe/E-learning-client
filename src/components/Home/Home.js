import React from "react";
import Carousel from "../Sheared/Carousel/Carousel";
import Menubar from "../Sheared/Menubar/Menubar";
import Categorys from "./Categorys/Categorys";
import Courses from "./Courses/Courses";
import EnrollDate from "./EnrollDate/EnrollDate";

import "./Home.css";
import EnorlledStudents from "./EnorlledStudents/EnorlledStudents";
import Feedback from "./Feedback/Feedback";
import Teachers from "../Teachers/Teachers";
import FQA from "./FQA/FQA";
import Footer from "../Sheared/Footer/Footer";
import Contact from "../Sheared/Contact/Contact";
const Home = () => {
  return (
    <div className="home">
      <div className="menubar">
        <Menubar></Menubar>
      </div>
      <Carousel></Carousel>
      <EnrollDate></EnrollDate>
      <Categorys></Categorys>
      <Courses></Courses>
      <EnorlledStudents></EnorlledStudents>
      <Feedback></Feedback>
      <Teachers></Teachers>
      <FQA></FQA>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
