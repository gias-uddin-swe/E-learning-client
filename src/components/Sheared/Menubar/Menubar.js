import React from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";
const Menubar = () => {
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
              <Link className="items-parent" to="/playGround">
                <li className="ms-3 items">PlayGround</li>
              </Link>
              <Link className="items-parent" to="/contact">
                <li className="ms-3 items">Contact</li>
              </Link>
              <Link className="items-parent" to="/login">
                <li className="ms-3 items">Login</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menubar;
