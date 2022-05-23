import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import UseAnimations from "react-useanimations";
import trash2 from "react-useanimations/lib/trash2";
import radioButton from "react-useanimations/lib/radioButton";
import { css } from "@emotion/react";
import alertCircle from "react-useanimations/lib/alertCircle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./AllCourse.css";
import Swal from "sweetalert2";
// import DeleteFromDB from "../../../../../Hooks/Delete";
import useDelete from "../../../../../Hooks/useDelete";
import ClipLoader from "react-spinners/ClipLoader";
import DetailsModal from "./../../../../Sheared/DetailsModal/DetailsModal";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [courseId, setCourseId] = useState("");
  const [control, setControl] = useState(true);
  const { DeleteFromDB, response } = useDelete();
  const [spiner, setSpiner] = useState(true);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handleDelete = (id) => {
    setCourseId(id);
    setIsDelete(true);
  };

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        if (data.length > 0) {
          setSpiner(false);
        }
        console.log(data);
      });
  }, [control]);
  console.log(control);

  if (isDelete) {
  }

  const handleCourseDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        DeleteFromDB(id, "deleteCourse");
        setControl(!control);
      }
    });
    if (response.deletedCount > 0) {
      console.log(response);
      setIsDelete(false);
      setControl(!control);
      console.log(response);
    }
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div className="container ">
      <h4>All courses here </h4>
      <div className="allCourses-table p-2 ">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Mark</th>
              <th>#</th>
              <th>Course Name</th>
              <th>Course Teacher</th>
              <th>Price</th>
              <th>Course Category</th>
              <th>Action</th>
            </tr>
          </thead>

          {courses?.map((course, index) => (
            <tbody>
              <tr>
                <td>
                  <UseAnimations
                    animation={radioButton}
                    animationKey="checkbox"
                    size={24}
                    fillColor={"red"}
                    style={{
                      padding: 100,
                      textAlign: "center",
                      color: "red",
                    }}
                  />
                </td>
                <td>{index + 1}</td>
                <td>{course?.courseName}</td>
                <td>{course?.courseTeacher}</td>
                <td>{course?.price}</td>
                <td>{course?.category}</td>
                <td className="text-center">
                  <div className="d-flex text-danger">
                    <UseAnimations
                      onClick={() => handleCourseDelete(course?._id)}
                      animation={trash2}
                      animationKey="menu3"
                      size={36}
                      fillColor={"red"}
                      style={{
                        padding: 100,
                        textAlign: "center",
                        color: "red",
                      }}
                    />
                    <UseAnimations
                      animation={alertCircle}
                      onClick={openModal}
                      animationKey="menu3"
                      size={36}
                      style={{ padding: 100, textAlign: "center" }}
                    />
                    <DetailsModal
                      openModal={openModal}
                      closeModal={closeModal}
                      modalIsOpen={modalIsOpen}
                      user={course}
                    ></DetailsModal>
                    <p className="edit-icon text-dark">
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <ClipLoader color={"cyan"} loading={spiner} size={100} />
      </div>
    </div>
  );
};

export default AllCourses;
