import React, { useEffect, useState } from "react";
import "./Teachers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const Teachers = () => {
  const [teachers, setTeacher] = useState([]);
  useEffect(() => {
    fetch("https://stormy-coast-94692.herokuapp.com/teachers")
      .then((res) => res.json())
      .then((data) => setTeacher(data));
  }, []);

  return (
    <div className="container mt-5 w-100 m-auto ">
      <h1 className="title">Our Expert Instructors </h1>

      <div className="d-flex justify-content-center">
        <div className="teachers-container row d-flex justify-content-around w-100 m-auto mt-5">
          {teachers?.map((pd) => (
            <div
              data-aos-duration="2000"
              data-aos="flip-left"
              className="teachers-card col-md-3"
            >
              <div className="teacher-card">
                <div className="teacher-photo">
                  <img src={pd?.studentImage || pd?.image} alt="" />
                  <div data-aos="fade-up" className="teachers-icons">
                    <div className="all-icons">
                      <a target="_blank" href={pd?.facebook}>
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                      <a target="_blank" href={pd?.twitter}>
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                      <a target="_blank" href={pd?.instagram}>
                        <FontAwesomeIcon icon={faInstagramSquare} />
                      </a>
                      <a target="_blank" href={pd?.pin}>
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </div>
                  </div>
                </div>
                <h4 className="teacher-name mt-3">{pd?.name}</h4>
                <h5>{pd?.positioon || "Instructor"}</h5>
                <h6>{pd?.university || "Oxford University"}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
