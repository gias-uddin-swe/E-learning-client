import React from "react";
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
  const teachers = [
    {
      name: "nick jon",
      position: "instructor",
      univeristy: "Oxford University",
      image:
        "https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/03/instructor-1-1.jpg",
      facebook: "https://www.facebook.com/",
      twitter: "https://www.google.com/",
      instagram: "https://www.instagram.com/",
      pin: "https://www.instagram.com/",
      animation: "flip-left",
    },
    {
      name: "nick jon",
      position: "instructor",
      univeristy: "Oxford University",
      image:
        "https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/03/instructor-1-1.jpg",
      facebook: "https://www.facebook.com/",
      twitter: "https://www.google.com/",
      instagram: "https://www.instagram.com/",
      pin: "https://www.instagram.com/",
      animation: "flip-up",
    },
    {
      name: "nick jon",
      position: "instructor",
      univeristy: "Oxford University",
      image:
        "https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/03/instructor-1-1.jpg",
      facebook: "https://www.facebook.com/",
      twitter: "https://www.google.com/",
      instagram: "https://www.instagram.com/",
      pin: "https://www.instagram.com/",
      animation: "flip-down",
    },
    {
      name: "nick jon",
      position: "instructor",
      univeristy: "Oxford University",
      image:
        "https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/03/instructor-1-1.jpg",
      facebook: "https://www.facebook.com/",
      twitter: "https://www.google.com/",
      instagram: "https://www.instagram.com/",
      pin: "https://www.instagram.com/",
      animation: "flip-right",
    },
  ];
  return (
    <div className="container mt-5 ">
      <h1 className="title">Our Expert Instructors </h1>

      <div className="teachers-container row d-flex w-100 m-auto mt-5">
        {teachers?.map((pd) => (
          <div data-aos-duration="2000" data-aos={pd?.animation} className="teachers-card col-md-3">
            <div className="teacher-card">
              <div className="teacher-photo">
                <img src={pd?.image} alt="" />
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
              <h1 className="teacher-name mt-3">{pd?.name}</h1>
              <h3>{pd?.position}</h3>
              <h6>{pd?.univeristy}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
