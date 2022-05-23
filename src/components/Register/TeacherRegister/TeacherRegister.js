import React from "react";
import Footer from "./../../Sheared/Footer/Footer";
import Menubar from "./../../Sheared/Menubar/Menubar";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const TeacherRegister = () => {
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
            <div className="rout-btn text-center">
              <Link to="/studentLogin">
                <button className="btn btn-info m-2 p-2">Student</button>
              </Link>
              <Link to="/teacherLogin">
                <button className="btn btn-info m-2 p-2">Teacher</button>
              </Link>
              <Link to="/adminLogin">
                <button className="btn btn-info m-2 p-2">Admin</button>
              </Link>
            </div>
            <div className="login-box p-4">
              <div className="login-area ">
                <h4 className="text-start ps-5">Create an Account</h4>
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
                    {...register("universityName", { required: true })}
                    className="input-fields"
                    placeholder="University Name"
                    required
                  />
                  <br />
                  <input
                    {...register("teacherImage", { required: true })}
                    className="input-fields"
                    type="file"
                    required
                  />
                  <br />
                  <input
                    {...register("facebook", { required: true })}
                    className="link w-25 p-2 ms-1 mt-2"
                    placeholder="FB"
                    required
                  />
                  <input
                    {...register("github", { required: true })}
                    className="link w-25 p-2 ms-1 mt-2"
                    placeholder="github"
                    required
                  />
                  <input
                    {...register("instagram", { required: true })}
                    className="link w-25 p-2 ms-1 mt-2"
                    placeholder="Insta"
                    required
                  />
                  <div className="d-flex  align-items-center justify-content-center p-3">
                    <Link to="/teacherLogin">
                      <p className="text-danger">Already have an account ?</p>
                    </Link>
                  </div>
                  <button type="submit" className="btn  login-button p-2">
                    Register
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

export default TeacherRegister;
