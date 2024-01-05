import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import UseAnimations from "react-useanimations";
import radioButton from "react-useanimations/lib/radioButton";
import trash2 from "react-useanimations/lib/trash2";
import alertCircle from "react-useanimations/lib/alertCircle";
import useDelete from "../../../../../Hooks/useDelete";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import ClipLoader from "react-spinners/ClipLoader";
import DetailsModal from "./../../../../Sheared/DetailsModal/DetailsModal";
const AllTeacher = () => {
  const [teachers, setTeacher] = useState([]);
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
        DeleteFromDB(id, "deleteTeacher");
        setControl(!control);
        console.log(response);
      }
      //   if (response.deletedCount > 0) {
      //     setControl(!control);
      //     console.log(response);
      //   }
    });
  };

  useEffect(() => {
    fetch("http://localhost:5000/teachers")
      .then((res) => res.json())
      .then((data) => {
        setTeacher(data);
        if (data.length > 0) {
          setSpiner(false);
        }
      });
  }, [control]);

  return (
    <div className="container">
      <h1>Mange Teacher Info</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mark</th>
            <th>#</th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        {teachers?.map((user, index) => (
          <tbody>
            <tr>
              <td>
                <UseAnimations
                  animation={radioButton}
                  animationKey="checkbox"
                  size={26}
                  fillColor={"red"}
                  style={{
                    padding: 100,
                    textAlign: "center",
                    color: "red",
                  }}
                />
              </td>
              <td>{index + 1}</td>
              <td>{user?.name}</td>
              <td>
                <button className="btn btn-dark disabled ">{user?.role}</button>
              </td>
              <td>{user?.email}</td>
              <td>{user?.phone}</td>
              <td className="text-center">
                <div className="d-flex text-danger">
                  <UseAnimations
                    onClick={() => handleDelete(user._id)}
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
                    user={user}
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
  );
};

export default AllTeacher;
