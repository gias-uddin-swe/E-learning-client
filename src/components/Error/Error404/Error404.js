import React from "react";
import Menubar from "../../Sheared/Menubar/Menubar";
import "./Error404.css";
import { useHistory } from "react-router-dom";

const Error404 = () => {
  const history = useHistory();

  const handleOnClick = (e) => {
    e.preventDefault();
    history.push("/home");
    console.log("You have clicked in the specified area");
  };
  return (
    <div>
      <Menubar></Menubar>
      <div className="error-img">
        <img
          src="https://i.ibb.co/Z1Br96k/image.png"
          alt=""
          usemap="#workmap"
        />
        <map id="workmap" name="workmap">
          <area
            shape="circle"
            coords="587,505,88.5"
            alt="test"
            href="https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg"
            onClick={handleOnClick}
          />
        </map>
      </div>
    </div>
  );
};

export default Error404;
