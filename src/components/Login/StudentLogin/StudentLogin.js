import { React, useState } from "react";
import "./StudentLogin.css";
import Menubar from "./../../Sheared/Menubar/Menubar";
import Footer from "../../Sheared/Footer/Footer";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import auth from "./../../../Hooks/firebase.config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useHistory, useLocation } from "react-router";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from "sweetalert2";

const StudentLogin = () => {
  const history = useHistory();
  const location = useLocation();
  const [err, setErr] = useState({});
  const [loadingSpin, setLoadingSpin] = useState(false);

  const redirect_url = location.state?.from || "home";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user?.user?.email) {
    sessionStorage.setItem("email", user?.user?.email);
    history.push(redirect_url);
  }
  console.log(user?.user?.email);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    setLoadingSpin(true);
    console.log(data);
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status) {
          sessionStorage.setItem("email", data?.email);
          history.push(redirect_url);
          setLoadingSpin(false);
          setErr("");
        } else {
          Swal.fire({
            icon: "error",
            title: result?.message,
            text: "please try again with valid information",
            footer: '<a href="">Why do I have this issue?</a>',
          });
          setLoadingSpin(false);
          console.log(result);
          setErr(result);
        }
      });
  };
  console.log(err);
  return (
    <div>
      <div className="container">
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
            <div className="rout-btn text-center">
              <Link to="/login">
                <button className="btn btn-info m-2 p-2">User</button>
              </Link>
              <Link to="/adminLogin">
                <button className="btn btn-danger m-2 p-2">Admin</button>
              </Link>
            </div>
            <h6 className="">Student Login</h6>
            <div className="login-box p-4">
              <div className="login-area ">
                <h4 className="text-start ps-5">Welcome Back</h4>
                {err && <h6 className="text-danger mt-2">{err?.message}</h6>}
                {/* asdsadasdasdsada */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register("email")}
                    className="input-fields"
                    placeholder="Email"
                    type="email"
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
                  <div className="d-flex  align-items-center justify-content-center p-3">
                    <div className="d-flex">
                      <input className="input-check mt-2" type="checkbox" />
                      <label className="ms-3 rememberMe">Remember me </label>
                    </div>
                    <p className="ms-5 text-danger"> Forget password ?</p>
                  </div>
                  <button type="submit" className="btn  login-button p-2">
                    <div className="d-flex text-center justify-content-center">
                      Login
                      <ClipLoader
                        color={"cyan"}
                        // height={40}
                        // width={100}
                        loading={loadingSpin}
                        size={25}
                      />
                    </div>
                  </button>
                  <Link to="/register">
                    <p className="text-danger mt-2">Create an new account </p>
                  </Link>
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
    </div>
  );
};

export default StudentLogin;
