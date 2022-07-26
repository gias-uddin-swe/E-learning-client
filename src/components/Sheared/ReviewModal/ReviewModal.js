import { React, useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ReviewModal.css";
import { useForm } from "react-hook-form";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";
import { Button, Modal } from "react-bootstrap";

const ReviewModal = (props) => {
  const [newRating, setNewRating] = useState(0);
  const email = sessionStorage.getItem("email");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    data.email = email;
    data.date = new Date();
    data.rating = newRating;

    fetch("https://stormy-coast-94692.herokuapp.com/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      });
    console.log(data);

    reset();
  };

  console.log(newRating);
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            YouR Review is very Impotent For us
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReviewModal;
