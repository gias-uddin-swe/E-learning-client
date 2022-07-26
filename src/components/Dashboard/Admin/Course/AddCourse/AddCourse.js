import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddCourse.css";
import handleImageUpload from "./../../../../../Hooks/imageUpload";
import axios from "axios";
import { css } from "@emotion/react";
// import {ClipLoader,BeatLoader} from "react-spinners/ClipLoader";
import BeatLoader from "react-spinners/BeatLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import Swal from "sweetalert2";

const AddCourse = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm();
  const [courseImage, setCourseImage] = useState("");

  const onSubmit = (data) => {
    setLoading(true);
    const imageData = new FormData();
    imageData.set("key", "2cba9267a477da53356313c7b21d374e");
    imageData.append("image", data.courseImage[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response?.data?.data?.display_url);
        setCourseImage(response?.data?.data?.display_url);
        data.courseImage = response?.data?.data?.display_url;

        if (data?.courseImage) {
          fetch("https://stormy-coast-94692.herokuapp.com/addCourse", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.insertedId) {
                console.log(result);
                setLoading(false);
                Swal.fire("Good job!", "You clicked the button!", "success");
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Something went wrong!",
                  footer: "Please try again!!!!",
                });
              }
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(data);
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  if (loading) {
    return (
      <div>
        <PropagateLoader color={"cyan"} loading={loading} size={50} />;
        <h3 className="text-info mt-5">Please wait .......</h3>
      </div>
    );
  }

  return (
    <div className="w-100 m-auto">
      <h1>Add Courses </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("courseName")}
          className="course-input"
          placeholder="Course Name"
          name="courseName"
          required
        />
        <input
          {...register("courseTitle")}
          className="course-input"
          placeholder="Course Title"
          name="courseTitle"
          required
        />
        <input
          {...register("courseTeacher", { required: true })}
          className="course-input"
          placeholder="Course Teacher"
          required
        />

        <br />
        <input
          {...register("note", { required: true })}
          className="course-input"
          placeholder="Note"
          required
          type="number"
        />
        <input
          {...register("quiz", { required: true })}
          className="course-input"
          placeholder="Quiz"
          required
          type="number"
        />
        <input
          {...register("assignment", { required: true })}
          className="course-input"
          placeholder="Assignment"
          required
          type="number"
        />
        <br />

        <input
          {...register("price", { required: true })}
          className="course-input"
          placeholder="Course Price"
          required
          type="number"
        />

        <input
          {...register("courseDuration", { required: true })}
          className="course-input"
          placeholder="Course Duration"
          required
        />
        <br />
        <select className="mt-4 p-4 w-25" {...register("category")} required>
          <option value="Web-development">Web-development</option>
          <option value="Software-engineering">Software-engineering</option>
          <option value="machine-learning">machine-learning</option>
          <option value="Android-app">Android-app</option>
          <option value="Project-Management">Project-Management</option>
        </select>

        <br />

        <input
          {...register("courseImage", { required: true })}
          className="course-input"
          type="file"
          name="courseImage"
          id="service-pic"
          //   onChange={(e) => hanldeImageUp(e)}
          required
        />
        <br />

        <button type="submit" className="btn  login-button w-25 p-2">
          ADD COURSE
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
