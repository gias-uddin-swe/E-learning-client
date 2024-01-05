import React, { useState, useEffect } from "react";
import "./Feedback.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarRatings from "react-star-ratings";
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
  const [review, setReview] = useState([]);
  const [newRating, setNewRating] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((response) => response.json())
      .then((data) => setReview(data));
  }, []);

  console.log(review);
  return (
    <div className="mt-5 container ">
      <h1>Student Feedback </h1>
      <div className="feedback-container row d-flex p-2 m-2 mt-5">
        <Carousel responsive={responsive}>
          {review?.map((user) => (
            <div data-aos="zoom-out" className="feedback-card ">
              <div className="user-photo">
                <img src={user?.image} alt="" />
              </div>
              <div className="user-comments">
                <p>{user?.review?.comments?.slice(0, 200)}</p>
              </div>
              <h4>
                <StarRatings
                  rating={user?.review?.rating}
                  starRatedColor="yellow"
                  numberOfStars={5}
                  name="rating"
                  starDimension={30}
                  starHoverColor="yellow"
                />
              </h4>
              <h4>{user?.name}</h4>
              <h6>{user?.review?.date}</h6>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Feedback;
