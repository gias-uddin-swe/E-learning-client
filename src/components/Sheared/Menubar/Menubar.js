import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../../Hooks/firebase.config";

const Menubar = () => {
  const [control, setControl] = useState(true);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setEmail(sessionStorage.getItem("email"));
    setUser(sessionStorage.getItem("role"));
    setName(sessionStorage.getItem("user"));
  }, [control]);
  console.log(email);

  const handleSignOut = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("user");
    signOut(auth);
    setControl(!control);
    window.location.reload();
  };
  return (
    <div>
      <nav className="menubar ">
        <div className="row ">
          <div className="col-md-2">Company Logo</div>
          <div className="col-md-10">
            <ul className="d-flex justify-content-end menu-container w-100 m-auto">
              <Link className="items-parent" to="/home">
                <li className="ms-3 items">Home</li>
              </Link>
              <Link className="items-parent" to="/courses">
                <li className="ms-3 items">Courses</li>
              </Link>

              {user && (
                <Link className="items-parent" to="/studentDashboard">
                  <li className="ms-3 items">Dashboard</li>
                </Link>
              )}
              <Link className="items-parent" to="/playGround">
                <li className="ms-3 items">PlayGround</li>
              </Link>
              <Link className="items-parent" to="/contact">
                <li className="ms-3 items">Contact</li>
              </Link>
              {email ? (
                <button onClick={handleSignOut} className="btn btn-danger">
                  SignOut
                </button>
              ) : (
                <Link className="items-parent" to="/login">
                  <li className="ms-3 items">Login</li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menubar;
