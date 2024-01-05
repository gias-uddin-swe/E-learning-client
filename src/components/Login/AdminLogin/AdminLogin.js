import React, { useState } from "react";
import Menubar from "./../../Sheared/Menubar/Menubar";
import Footer from "./../../Sheared/Footer/Footer";
import { useForm } from "react-hook-form";
import "./AdminLogin.css";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import Swal from "sweetalert2";
import ClipLoader from "react-spinners/ClipLoader";

const AdminLogin = () => {
  const history = useHistory();
  const location = useLocation();
  const [loadingSpin, setLoadingSpin] = useState(false);

  const redirect_url = location.state?.from || "adminDashboard";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setLoadingSpin(true);
    data.status = "admin";
    fetch("http://localhost:5000/adminLogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.role == "admin") {
          sessionStorage.setItem("email", data?.email);
          sessionStorage.setItem("role", result?.role);
          sessionStorage.setItem("name", result?.name);
          history.push("/adminDashboard");
          console.log(result);
          setLoadingSpin(false);
        } else {
          Swal.fire({
            icon: "error",
            title: result?.message,
            text: "please try again with valid information",
            footer: '<a href="">Why do I have this issue?</a>',
          });
          setLoadingSpin(false);
        }
      });
  };
  return (
    <div>
      <Menubar></Menubar>
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
            <div className="rout-btn text-center">
              <Link to="/login">
                <button className="btn btn-info m-2 p-2">User</button>
              </Link>
              <Link to="/adminLogin">
                <button className="btn btn-info m-2 p-2">Admin</button>
              </Link>
            </div>
            <div className="login-box p-4">
              <div className="login-area ">
                <h4 className="text-start ps-5">Welcome Back</h4>
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
                  <button
                    type="submit"
                    className="btn  login-button p-2  justify-content-center"
                  >
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AdminLogin;
