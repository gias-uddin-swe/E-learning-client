import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddVideos = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [python, setPython] = useState([
    {
      link: "https://youtu.be/Y8Tko2YC5hA",
      category: "machine-learning",
      videoTitle: "Python introduction total course summary",
    },
    {
      link: "https://youtu.be/AWvsXxDtEkU",
      category: "machine-learning",
      videoTitle:
        "Don't Buy Alexa! Build Your Own. Create a Virtual Assistant with Python ",
    },
    {
      link: "https://youtu.be/Y8Tko2YC5hA",
      category: "machine-learning",
      videoTitle: "Python introduction total course summary",
    },
    {
      link: "https://youtu.be/n1a3VZY0xgM",
      category: "machine-learning",
      videoTitle: "How to learn python for build your won application",
    },
  ]);

  const [javascript, setJavascript] = useState([
    {
      link: "https://youtu.be/eXQom29T5I8",
      category: "Web-development",
      videoTitle: "Javascript introduction total course summary",
    },
    {
      link: "https://youtu.be/F4fbwKV9dBU",
      category: "Web-development",
      videoTitle: "Everything about Web Design in 3 minutes. ",
    },
    {
      link: "https://youtu.be/ysEN5RaKOlA",
      category: "Web-development",
      videoTitle: "What is JavaScript? javascript introduction ",
    },
    {
      link: "https://youtu.be/n1a3VZY0xgM",
      category: "Web-development",
      videoTitle: "How to learn Javascript  for build your won application",
    },
  ]);

  //   const videoss = [
  //     {
  //       name: "Python programming Language",
  //       module1: [
  //         {
  //           videoTitle:
  //             "Be Ready  fr the course make ready your Editr and extension",
  //           link: "https://youtu.be/pniVCEypZYI",
  //         },
  //         {
  //           videoTitle: "Learn from Programming fundamental (variable) ",
  //           link: "https://youtu.be/afPjO7T6kZU",
  //         },
  //         {
  //           videoTitle: "basic programming concept (Array,method)",
  //           link: "https://youtu.be/afPjO7T6kZU",
  //         },
  //       ],
  //     },
  //   ];
  const onSubmit = (data) => {
    let videos = [
      {
        name: "",
        module1: [
          {
            videoTitle: "",
            link: "",
          },
        ],
      },
    ];

    if (data.category == "Web-development") {
      videos[0].name = data.name;
      videos[0].module1 = [
        {
          link: data.link,
          category: data.category,
          videoTitle: data.videoTitle,
        },

        ...javascript,
      ];
    } else if (data.category == "machine-learning") {
      videos[0].name = data.name;
      videos[0].module1 = [
        {
          link: data.link,
          category: data.category,
          videoTitle: data.videoTitle,
        },

        ...python,
      ];
    }

    if (videos) {
      fetch("http://localhost:5000/addVideos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ videos }),
      })
        .then((res) => res.json())
        .then((data) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        });
      console.log(videos);
    }
  };
  return (
    <div className="container text-center w-50">
      <h3 className="mb-5">Add Video to the system</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Course Name"
          className="p-3 border border m-2"
          {...register("name", { required: true })}
        />

        <select className="p-3 border border m-2" {...register("module")}>
          <option value="module1">1</option>
          <option value="module2">2</option>
          <option value="module3">3</option>
          <option value="module4">4</option>
          <option value="module5">5</option>
          <option value="module6">6</option>
          <option value="module7">7</option>
          <option value="module8">8</option>
          <option value="module9">9</option>
          <option value="module10">10</option>
        </select>
        <br />
        <input
          placeholder="Video Link"
          className="p-3 border border m-2"
          {...register("link", { required: true })}
        />
        <input
          placeholder="Video Title"
          className="p-3 border border m-2"
          {...register("videoTitle", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <br />

        <select className="p-3 border border m-2" {...register("category")}>
          <option value="Web-development">Web-development</option>
          <option value="Software-engineering">Software-engineering</option>
          <option value="machine-learning">machine-learning</option>
          <option value="Android-app">Android-app</option>
          <option value="Project-Management">Project-management</option>
        </select>
        <br />
        <input className="p-3 border border m-2 btn btn-info" type="submit" />
      </form>
    </div>
  );
};

export default AddVideos;
