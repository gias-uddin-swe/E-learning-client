import React, { useState } from "react";
import "./FQA.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import menu3 from "react-useanimations/lib/menu3";
import MetarialCollapse from "../../Sheared/MetarialCollapse/MetarialCollapse";

const FQA = () => {
  return (
    <div className="container p-5 mt-5 ">
      <div className="row d-flex  justify-content-center align-items-center">
        <div className="col-md-6 col-lg-5">
          <div className="fqa-img">
            <img
              src="https://i.ibb.co/svk5j6m/image-removebg-preview-3.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-6 col-lg-7">
          <MetarialCollapse></MetarialCollapse>
        </div>
      </div>
    </div>
  );
};

export default FQA;
