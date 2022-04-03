import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Sheared/Footer/Footer";
import Menubar from "../../Sheared/Menubar/Menubar";
import Course from "./../Courses/Course/Course";

const AvilableCourse = () => {
  const { categoryName } = useParams();
  console.log(categoryName);
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
      category: "Python",
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
      category: "web-Development",
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
      category: "Android-App",
      courseImg: "https://i.ibb.co/DpGMVwd/image.png",
    },
  ];
  const availableCourses = courseInfo?.filter(
    (pd) => pd?.category === categoryName
  );
  console.log(availableCourses);
  return (
    <div className="">
      <Menubar></Menubar>
      <div className="row container mt-5">
        {availableCourses.map((course) => (
          <Course course={course}></Course>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AvilableCourse;
