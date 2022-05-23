import React from "react";
import "./DetailsModal.css";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faBookmark,
  faChartLine,
  faTrophy,
  faBullhorn,
  faVideo,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
const customStyles = {
  content: {
    width: "400px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const DetailsModal = ({ openModal, closeModal, modalIsOpen, user }) => {
  console.log(openModal);
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  console.log(user);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="close-button text-end">
          <button className="btn btn-danger" onClick={closeModal}>
            X
          </button>
        </div>
        <div className=" w-50 text-center m-auto">
          <img className="w-100 m-auto" src={user?.courseImage || user?.studentImage} alt="" />
        </div>
        <div className="profile-description text-center mt-2">
          <h3>{user?.courseName || user?.name}</h3>
          {user?.gender ? (
            <p>Student ID: {user?.courseId || user?.StudentId}</p>
          ) : (
            <p>Course ID: {user?.courseId || user?.StudentId}</p>
          )}
          {user?.password ? (
            <button className="profile-button">View Profile</button>
          ) : (
            <button className="profile-button disabled">$ {user?.price}</button>
          )}
          {user?.password && (
            <div>
              <h6>Email: {user?.email}</h6>
              <h6>Phone: {user?.phone}</h6>
              <h6>Dender: {user?.gender}</h6>
            </div>
          )}

          {user?.note && (
            <div>
              <h5>Title: {user?.courseTitle}</h5>
              <div className="d-flex justify-content-around">
                <p>Note: {user?.note}</p>
                <p>Assignment: {user?.assignment}</p>
                <p>Quiz: {user?.quiz}</p>
              </div>
              <h6>Course Duration : {user?.courseDuration}</h6>
            </div>
          )}
        </div>
        <hr />
      </Modal>
    </div>
  );
};

export default DetailsModal;
