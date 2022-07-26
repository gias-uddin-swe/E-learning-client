import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddCategory = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.date = new Date();

    fetch("https://stormy-coast-94692.herokuapp.com/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Good job!", "Category Added ", "success");
        } else {
        }
      });
    console.log(data);
  };

  return (
    <div className="text-center">
      <h1>Please choice Category</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select className="mt-4 p-4 w-25" {...register("category")} required>
          <option value="Web-development">Web-development</option>
          <option value="Software-engineering">Software-engineering</option>
          <option value="machine-learning">machine-learning</option>
          <option value="Android-app">Android-app</option>
          <option value="Project-Management">Project-management</option>
        </select>
        <br />
        <input className="mt-3 p-2 btn btn-info w-25" type="submit" />
      </form>
    </div>
  );
};

export default AddCategory;
