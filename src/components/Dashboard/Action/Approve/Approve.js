import React, { useEffect, useState } from "react";
import UseAnimations from "react-useanimations";
import radioButton from "react-useanimations/lib/radioButton";
import Swal from "sweetalert2";
import ClipLoader from "react-spinners/ClipLoader";
import useUpdate from "../../../../Hooks/useUpdate";
import { Table } from "react-bootstrap";

const Approve = () => {
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState(false);
  const { response, handleUpdate } = useUpdate();
  const [control, setControl] = useState(true);
  const [spiner, setSpiner] = useState(true);
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("https://stormy-coast-94692.herokuapp.com/bookedCourse")
      .then((res) => res.json())
      .then((result) => {
        setCourse(result);
        setSpiner(false);
      });
  }, [control]);

  const handleCall = (id, route, updateStatus, status) => {
    console.log(id, status);

    if (status === updateStatus.status) {
      setAlert(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This course ststus already Approved!",
        footer: "Try to change the ststus !!",
      });
    } else if (status === "pending" || status === "") {
      setAlert(true);
      handleUpdate(id, route, updateStatus);
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
  return (
    <div className="container p-2">
      <h1>Approve Student course</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mark</th>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Email</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        {course?.map((user, index) => (
          <tbody>
            <tr>
              <td>
                <UseAnimations
                  animation={radioButton}
                  animationKey="checkbox"
                  size={22}
                  fillColor={"red"}
                  style={{
                    padding: 100,
                    textAlign: "center",
                    color: "red",
                  }}
                />
              </td>
              <td>{index + 1}</td>
              <td>{user?.courseName}</td>
              <td>
                <button className="btn btn-dark disabled ">
                  {user?.status}
                </button>
              </td>
              <td>{user?.email}</td>
              <td>{user?.courseTitle}</td>
              <td className="text-center">
                {user?.status == "pending" ? (
                  <button
                    onClick={(e) =>
                      handleCall(
                        user?._id,
                        "courseStatus",
                        { email: user?.email, status: "approved" },
                        user?.status
                      )
                    }
                    className="btn btn-danger"
                  >
                    Approve
                  </button>
                ) : (
                  <button
                    onClick={(e) =>
                      handleCall(
                        user?._id,
                        "courseStatus",
                        { email: user?.email, status: "pending" },
                        user?.status
                      )
                    }
                    className="btn btn-info"
                  >
                    Change Status
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      <ClipLoader color={"cyan"} loading={spiner} size={100} />
    </div>
  );
};

export default Approve;
