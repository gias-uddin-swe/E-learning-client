import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import UseAnimations from "react-useanimations";
import radioButton from "react-useanimations/lib/radioButton";
import Swal from "sweetalert2";
import useUpdate from "../../../../../Hooks/useUpdate";
import ClipLoader from "react-spinners/ClipLoader";

const MakeTeacher = () => {
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState(false);
  const { response, handleUpdate } = useUpdate();
  const [control, setControl] = useState(true);
  const [spiner, setSpiner] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        if (data.length > 0) {
          setSpiner(false);
        }
      });
  }, [control]);

  //   if (response?.modifiedCount > 0) {
  //     console.log(response);
  //     setControl(!control);
  //   }

  const handleCall = (id, role) => {
    console.log(id, role);

    if (role === "teacher") {
      setAlert(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This user roll already as a teacher!",
        footer: "Try to change other user rool !!",
      });
    } else if (role === "user") {
      setAlert(true);
      handleUpdate(id, "makeTeacher");
      Swal.fire({
        title: "Are you sure?",
        text: "Are you sure to make him as teacher!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Make Teacher !",
      }).then((result) => {
        if (result.isConfirmed) {
          setControl(!control);
          Swal.fire(
            "Updated!",
            "Your make him as a Teacher Successfully.",
            "success"
          );
        }
      });
    }
  };

  console.log(response);

  return (
    <div className="container">
      <h1>Add Teacher Role</h1>
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
                  size={36}
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
                <button
                  onClick={(e) => handleCall(user?._id, user?.role)}
                  className="btn btn-danger"
                >
                  Make Teacher
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      <ClipLoader color={"cyan"} loading={spiner} size={100} />
    </div>
  );
};

export default MakeTeacher;
