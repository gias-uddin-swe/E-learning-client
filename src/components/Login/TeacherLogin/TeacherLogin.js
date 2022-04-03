import React from "react";
import "./TeacherLogin.css";
import Menubar from "./../../Sheared/Menubar/Menubar";
import { useForm } from "react-hook-form";
import Footer from "./../../Sheared/Footer/Footer";
import { Link } from "react-router-dom";

const TeacherLogin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
            <div className="login-box p-4">
              <div className="login-area ">
                <h4 className="text-start ps-5">Welcome Back</h4>
                {/* asdsadasdasdsada */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register("email")}
                    className="input-fields"
                    type="email"
                    placeholder="Email"
                    required
                  />

                  <input
                    {...register("password", { required: true })}
                    className="input-fields"
                    type="password"
                    placeholder="Password"
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
                    Login
                  </button>
                  <Link to="/teacherRegister">
                    <p className="text-danger mt-2">Create an new account </p>
                  </Link>
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

export default TeacherLogin;
