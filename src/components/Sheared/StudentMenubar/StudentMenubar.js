import React from "react";
import { Link } from "react-router-dom";
import "./StudentMenubar.css";
import ReactModal from "./../ReactModal/ReactModal";
import ReviewModal from "../ReviewModal/ReviewModal";

const StudentMenubar = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <nav id="StudentMenuBar" className="menubar ">
        <div className="row d-flex">
          <div className="col-md-2">Company Logo</div>
          <div className="col-md-10 d-flex">
            <ul className="d-flex justify-content-end menu-container w-100 m-auto">
              <Link className="items-parent" to="/home">
                <li className="ms-3 items">Home</li>
              </Link>
              <li onClick={() => setModalShow(true)} className="ms-3 items">
                Review
              </li>

              <Link className="items-parent" to="/contact">
                <li className="ms-3 items">Submit Assignment</li>
              </Link>
            </ul>
            <div className="ms-3 profile-pic me-5">
              <button className="profile-modal-button" onClick={openModal}>
                <img src="https://i.ibb.co/r2V0cMm/image.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <ReviewModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></ReviewModal>

      <ReactModal
        openModal={openModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      ></ReactModal>
    </div>
  );
};

export default StudentMenubar;
