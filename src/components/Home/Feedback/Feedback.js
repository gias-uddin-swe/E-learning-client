import React from "react";
import "./Feedback.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Feedback = () => {
  const Feedbacks = [
    {
      name: "Jon",
      rating: "5",
      comments: " i love asdjasodijsa asjdasiudhasid asjdasiudhsajdnas",
      userImage:
        "https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/03/client-1.jpg",
      position: "full stack developer",
      Animation: "zoom-in-left",
    },
    {
      name: "Jon",
      rating: "5",
      comments: " i love asdjasodijsa asjdasiudhasid asjdasiudhsajdnas",
      userImage:
        "https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/03/client-1.jpg",
      position: "full stack developer",
      Animation: "zoom-in-right",
    },
    {
      name: "Jon",
      rating: "5",
      comments: " i love asdjasodijsa asjdasiudhasid asjdasiudhsajdnas",
      userImage:
        "https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/03/client-1.jpg",
      position: "full stack developer",
      Animation: "zoom-out",
    },
    {
      name: "Jon",
      rating: "5",
      comments: " i love asdjasodijsa asjdasiudhasid asjdasiudhsajdnas",
      userImage:
        "https://demo.omexer.com/main/wp-content/uploads/sites/3/2021/03/client-1.jpg",
      position: "full stack developer",
      Animation: "zoom-out-up",
    },
  ];
  return (
    <div className="mt-5 container ">
      <h1>Student Feedback </h1>
      <div className="feedback-container row d-flex p-2 m-2 mt-5">
        <Carousel responsive={responsive}>
          {Feedbacks.map((user) => (
            <div data-aos={user?.Animation} className="feedback-card ">
              <div className="user-photo">
                <img src={user?.userImage} alt="" />
              </div>
              <div className="user-comments">
                <p>{user?.comments?.slice(0, 100)}</p>
              </div>
              <h1>{"******"}</h1>
              <h4>{user?.name}</h4>
              <h6>{user?.position}</h6>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Feedback;
