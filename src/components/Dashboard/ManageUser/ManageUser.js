import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import UseAnimations from "react-useanimations";
import radioButton from "react-useanimations/lib/radioButton";
import Swal from "sweetalert2";
import ClipLoader from "react-spinners/ClipLoader";
import useUpdate from "../../../Hooks/useUpdate";
import trash2 from "react-useanimations/lib/trash2";
import { css } from "@emotion/react";
import alertCircle from "react-useanimations/lib/alertCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import useDelete from "./../../../Hooks/useDelete";
import DetailsModal from "./../../Sheared/DetailsModal/DetailsModal";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState(false);
  //   const { response, handleUpdate } = useUpdate();
  const [control, setControl] = useState(true);
  const [spiner, setSpiner] = useState(true);
  const [isDelete, setIsDelete] = useState(false);
  const [courseId, setCourseId] = useState("");
  const { DeleteFromDB, response } = useDelete();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    fetch("https://stormy-coast-94692.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        if (data.length > 0) {
          setSpiner(false);
        }
      });
  }, [control]);

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
        DeleteFromDB(id, "deleteUser");
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        setControl(!control);
        if (response.deletedCount > 0) {
          setControl(!control);
          setIsDelete(true);
        }
      }
    });
  };

  const handleDetails = (user) => {
    console.log(user);

    Swal.fire({
      title: `Name: ${user?.name}`,
      text: `Email: ${user?.email}  
          Phone: ${user?.phone}`,
      imageUrl: user?.studentImage,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };

  return (
    <div className="container p-2">
      <h1>Manage All User</h1>
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
        {users?.map((user, index) => (
          <tbody>
            <tr>
              <td>
                <UseAnimations
                  animation={radioButton}
                  animationKey="checkbox"
                  size={20}
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
                    onClick={() => handleDelete(user?._id)}
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
                  <p className="edit-icon text-dark">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </p>
                  <DetailsModal
                    openModal={openModal}
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                    user={user}
                  ></DetailsModal>
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

export default ManageUser;
