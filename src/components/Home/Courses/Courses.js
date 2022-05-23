import React, { useEffect, useState } from "react";
import "./Courses.css";
import { DynamicStar } from "react-dynamic-star";
import Course from "./Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(3);
  useEffect(() => {
    fetch(`http://localhost:5000/courses?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [page, size]);

  useEffect(() => {
    fetch("http://localhost:5000/courseCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 5);
        setPageCount(pages);
      });
  }, []);

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
          {courses?.map((course) => (
            <Course course={course}></Course>
          ))}
          <div className="text-center w-100 m-auto d-flex justify-content-center">
            <div className="pagination  mt-4">
              {[...Array(pageCount).keys()].map((number) => (
                <button
                  className={page === number ? "selected" : ""}
                  onClick={() => setPage(number)}
                >
                  {number + 1}
                </button>
              ))}

              <select onChange={(e) => setSize(e.target.value)}>
                <option value="5">5</option>
                <option value="10" selected>
                  10
                </option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
