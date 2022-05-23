import { React, useState } from "react";
import "./StudentRegister.css";
import Menubar from "./../../Sheared/Menubar/Menubar";
import Footer from "./../../Sheared/Footer/Footer";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "./../../../Hooks/firebase.config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useHistory, useLocation } from "react-router";
import BeatLoader from "react-spinners/BeatLoader";
import ClipLoader from "react-spinners/ClipLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import Swal from "sweetalert2";
import axios from "axios";

const StudentRegister = () => {
  const [image, setImage] = useState("");
  // const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [files, setFiles] = useState("");
  const history = useHistory();
  const location = useLocation();
  const [loadingSpin, setLoadingSpin] = useState(false);

  const redirect_url = location.state?.from || "home";
  const [signInWithGoogle, user, loadings, error] = useSignInWithGoogle(auth);
  if (user) {
    history.push(redirect_url);
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  if (loadings || loadingSpin) {
    return (
      <div className="loading-spin">
        <ClipLoader
          color={"cyan"}
          // height={40}
          // width={100}
          loading={loadingSpin}
          size={100}
        />
        ;<h3 className="text-info mt-5">Please wait .......</h3>
      </div>
    );
  }

  console.log(files);

  const onSubmit = (data) => {
    console.log(data);
    setLoadingSpin(true);
    const imageData = new FormData();
    imageData.set("key", "2cba9267a477da53356313c7b21d374e");
    imageData.append("image", files);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response?.data?.data?.display_url);
        setImage(response?.data?.data?.display_url);
        data.studentImage = response?.data?.data?.display_url;
        data.role = "user";

        if (data?.studentImage) {
          fetch("http://localhost:5000/addStudent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              if (result.insertedId) {
                localStorage.setItem("email", data?.email);
                console.log(result);
                setLoadingSpin(false);
                history.push(redirect_url);

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

  return (
    <div>
      <Menubar></Menubar>\<h6>Student register</h6>
      <div className="container">
        {/* <h1>Student Login</h1> */}
        <div className="row d-flex align-items-center justify-content-center ">
          <div className="col-lg-6 col-md-6 col-sm-6 p-5">
            <div className="login-img p-5">
              <img
                className="w-100"
                src="https://phitron.io/static/media/login.60b00691.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 ">
            <div className="login-box p-4">
              <div className="login-area ">
                <h4 className="text-start ps-5">Welcome Back</h4>
                {/* asdsadasdasdsada */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register("name")}
                    className="input-fields"
                    placeholder="Name"
                    name="name"
                    required
                  />
                  <input
                    {...register("email")}
                    className="input-fields"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />

                  <input
                    {...register("password", { required: true })}
                    className="input-fields"
                    placeholder="Password"
                    type="password"
                    required
                  />
                  <br />
                  <input
                    {...register("phone", { required: true })}
                    className="input-fields"
                    placeholder="Phone Number"
                    required
                    type="number"
                  />
                  <br />
                  <select className="w-50 mt-3 p-2" {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </select>
                  <br />

                  <input
                    {...register("studentImage", { required: true })}
                    className="input-fields"
                    type="file"
                    name="file"
                    id="service-pic"
                    required
                    onChange={(e) => setFiles(e.target.files[0])}
                  />
                  <br />
                  <div className="d-flex  align-items-center justify-content-center p-3">
                    <Link to="/login">
                      <p className="text-danger">Already have an account ?</p>
                    </Link>
                  </div>
                  <div className="d-flex  align-items-center justify-content-center p-3">
                    <div className="d-flex">
                      <input className="input-check mt-2" type="checkbox" />
                      <label className="ms-3 rememberMe">Remember me </label>
                    </div>
                    <p className="ms-5 text-danger"> Forget password ?</p>
                  </div>
                  <button type="submit" className="btn  login-button p-2">
                    Register
                  </button>
                </form>
                <div className=" google-btn-logo w-100 m-auto">
                  <img
                    onClick={() => signInWithGoogle()}
                    className="w-100 "
                    src="https://i.ibb.co/dQwPQcK/google-signin-button-removebg-preview.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default StudentRegister;
