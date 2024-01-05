import React from "react";
import "./Contact.css";
// import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
// init("user_ERaQzOqot4Pu09jhg49n4");
import contactImg from "../../../Images/contact.png";

const Contact = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_q0aucxa",
        "template_0stmcwl",
        e.target,
        "user_ERaQzOqot4Pu09jhg49n4"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="p-5"
      >
        Contact with us
      </h1>
      <div className="contact-form p-3">
        <div className="row  d-flex justify-content-center ">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="col-md-6 mt-5"
          >
            <form onSubmit={handleSubmit}>
              <input
                className="input-field"
                placeholder="Enter Your Name"
                name="name"
              />
              <br />
              <input
                placeholder="Enter Your Email"
                type="email"
                className="input-field"
                name="email"
              />
              <br />

              <input
                className="input-field p-4"
                placeholder="Type Your Massage"
                name="message"
              />
              <br />
              <input
                value="Send Email"
                type="submit"
                className="btn btn-primary mt-4 w-50"
              />
            </form>
          </div>
          <div className="col-md-6">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="contact-im"
            >
              <img className="w-75" src={contactImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
