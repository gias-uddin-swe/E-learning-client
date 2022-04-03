import React from "react";
import "./Courses.css";
import { DynamicStar } from "react-dynamic-star";
import Course from "./Course/Course";

const Courses = () => {
  const courseInfo = [
    {
      name: "Python",
      title: "Learn Python with fun",
      status: "paid",
      enrolled: "450",
      review: "48",
      description: "Learn Python with fun and explore",
      note: "230",
      assignment: "13",
      quiz: "200",
      duration: "2 months-3 months",
      price: "17",
      courseImg: "https://i.ibb.co/DpGMVwd/image.png",
    },
    {
      name: "Python",
      title: "Learn Python with fun",
      status: "paid",
      enrolled: "450",
      review: "48",
      description: "Learn Python with fun and explore",
      note: "230",
      assignment: "13",
      quiz: "200",
      duration: "2 months-3 months",
      price: "17",
      courseImg: "https://i.ibb.co/DpGMVwd/image.png",
    },
    {
      name: "Python",
      title: "Learn Python with fun",
      status: "paid",
      enrolled: "450",
      review: "48",
      description: "Learn Python with fun and explore",
      note: "230",
      assignment: "13",
      quiz: "200",
      duration: "2 months-3 months",
      price: "17",
      courseImg: "https://i.ibb.co/DpGMVwd/image.png",
    },
  ];
  return (
    <div className="mt-5 text-center container">
      <h1
        className="p-5"
        data-aos="fade-right"
        data-aos-anchor-placement="bottom-bottom"
      >
        Explore Popular Courses
      </h1>
      <div className="courses-container ">
        <div className="row ">
          {courseInfo?.map((course) => (
            <Course course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
