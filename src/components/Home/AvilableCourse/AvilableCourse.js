import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Sheared/Footer/Footer";
import Menubar from "../../Sheared/Menubar/Menubar";
import Course from "./../Courses/Course/Course";

const AvilableCourse = () => {
  const { categoryName } = useParams();
  const [courses, setCourses] = useState([]);
  const [control, setControl] = useState(true);

  useEffect(() => {
    fetch(`https://stormy-coast-94692.herokuapp.com/courses`)
      .then((res) => res.json())
      .then((result) => setCourses(result));
  }, []);

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

  const availableCourses = courses?.filter(
    (pd) => pd?.category === categoryName
  );
  console.log(availableCourses.length);

  if (availableCourses.length <= 0) {
    return (
      <h1 className="text-danger text-center text-bold">
        No Available Course For{" "}
        <span className="text-info">{categoryName}</span> now <br />
        Pease try again later after few Days or try to choice form other
        category
      </h1>
    );
  }
  // console.log(availableCourses == []);
  return (
    <div className="">
      (
      <div className="row container mt-5">
        {availableCourses?.map((course) => (
          <Course course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default AvilableCourse;
