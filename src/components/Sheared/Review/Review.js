import React, { useState } from "react";
import { useForm } from "react-hook-form";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";

const Review = () => {
  const [newRating, setNewRating] = useState(0);

  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {


    console.log(data);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    reset();
  };

  console.log(newRating);



  return (
    <div>
      <h1>Your Feedback is very important for us !!!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="review-input mt-3 p-3"
          placeholder="Your Name"
          {...register("name")}
        />
        <br />
        <input
          className="review-input mt-3 p-5"
          placeholder="Your Comments"
          {...register("comments", { required: true })}
        />

        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <StarRatings
          rating={newRating}
          starRatedColor="green"
          changeRating={(e) => setNewRating(e)}
          numberOfStars={5}
          name="rating"
        />
        <br />

        <input type="submit" className="w-25 mt-3 p-2 btn btn-danger" />
      </form>
    </div>
  );
};

export default Review;
