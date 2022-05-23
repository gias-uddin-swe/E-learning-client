import React, { useState } from "react";
import { Link } from "react-router-dom";
import StudentLogin from "./StudentLogin/StudentLogin";
import TeacherRegister from "./../Register/TeacherRegister/TeacherRegister";
import TeacherLogin from "./TeacherLogin/TeacherLogin";
import StudentRegister from "./../Register/StudentRegister/StudentRegister";
import AdminLogin from "./AdminLogin/AdminLogin";

const Login = () => {
  const [control, setCounter] = useState("studentLogin");

  return (
    <div>
      <div className="rout-btn text-center">
        <StudentLogin></StudentLogin>
      </div>
    </div>
  );
};

export default Login;
