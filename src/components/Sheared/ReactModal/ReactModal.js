import React from "react";
import "./ReactModal.css";
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

const ReactModal = ({ openModal, closeModal, modalIsOpen }) => {
  console.log(openModal);
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

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
        <div className="modal-profile-pic text-center">
          <img src="https://i.ibb.co/r2V0cMm/image.png" alt="" />
        </div>
        <div className="profile-description text-center mt-2">
          <h3>MD GIAS UDDIN</h3>
          <p>Student ID: WEB3-15455</p>
          <button className="profile-button">View Profile</button>
        </div>
        <hr />
        <div className="course-extra p-3">
          <ul>
            <div className="d-flex align-items-center text-start">
              <FontAwesomeIcon icon={faBookmark} />
              <li className="ms-2 user-extra-menus">Bookmark</li>
            </div>
            <div className="d-flex align-items-center text-start mt-2 ">
              <FontAwesomeIcon icon={faChartLine} />{" "}
              <li className="ms-2 user-extra-menus">Students Analytics</li>
            </div>
            <div className="d-flex align-items-center text-start mt-2">
              <FontAwesomeIcon icon={faTrophy} />{" "}
              <li className="ms-2 user-extra-menus">Leader Board</li>
            </div>
            <div className="d-flex align-items-center text-start mt-2">
              <FontAwesomeIcon icon={faBullhorn} />{" "}
              <li className="ms-2 user-extra-menus">Announcements</li>
            </div>
            <div className="d-flex align-items-center text-start mt-2">
              <FontAwesomeIcon icon={faVideo} />{" "}
              <li className="ms-2 user-extra-menus">Conceptual Session</li>
            </div>
            <div className="d-flex align-items-center text-start mt-2">
              <FontAwesomeIcon icon={faRightFromBracket} />{" "}
              <li className="ms-2 user-extra-menus">Log Out</li>
            </div>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default ReactModal;
