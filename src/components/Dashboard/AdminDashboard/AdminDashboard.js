import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./AdminDashboard.css";
import Topbar from "./../../Sheared/Topbar/Topbar";

import AddCategory from "../Admin/Course/AddCategory/AddCategory";
import AllCourses from "./../Admin/Course/AllCourses/AllCourses";
import AddCourse from "./../Admin/Course/AddCourse/AddCourse";
import MakeTeacher from "../Admin/Teacher/AddTeacher/MakeTeacher";
import AllTeacher from "../Admin/Teacher/ManageTeachers/AllTeacher";
import ManageUser from "../ManageUser/ManageUser";
import Review from "./../../Sheared/Review/Review";
import Approve from "../Action/Approve/Approve";
import AddVideos from "../Admin/AddVideos/AddVideos";

const AdminDashboard = () => {
  const [collapse, setCollapse] = useState(false);
  const [show, setShow] = useState("AddVideos");

  return (
    <div>
      <div className="top-adminbar">
        <Topbar></Topbar>
      </div>
      <div className=" row">
        <div className=" dashboard col-md-4">
          <ProSidebar toggled={false} collapsed={collapse} rtl={false}>
            <SidebarHeader>
              <div className="d-flex collapse justify-content-end">
                {collapse ? (
                  <h3 class onClick={(e) => setCollapse(false)}>
                    {">"}
                  </h3>
                ) : (
                  <h3 class onClick={(e) => setCollapse(true)}>
                    {"<"}
                  </h3>
                )}
              </div>
            </SidebarHeader>
            <Menu iconShape="square" toggled={false}>
              <MenuItem icon={collapse ? "Main" : "D"}>Dashboard</MenuItem>
              <SubMenu title="Course" icon={"C"}>
                <MenuItem onClick={() => setShow("AddCourse")}>
                  Add Course
                </MenuItem>
                <MenuItem onClick={() => setShow("AllCourses")}>
                  All Course
                </MenuItem>
                <MenuItem onClick={() => setShow("AllCourses")}>
                  Manage Course
                </MenuItem>
                <MenuItem onClick={() => setShow("AddCategory")}>
                  Add Course Category
                </MenuItem>
                <MenuItem>Approvals Course </MenuItem>
              </SubMenu>
              <SubMenu title="Teacher" icon={"T"}>
                <MenuItem onClick={() => setShow("MakeTeacher")}>
                  Add Teacher
                </MenuItem>
                <MenuItem onClick={() => setShow("AllTeachers")}>
                  All Teacher
                </MenuItem>
                <MenuItem onClick={() => setShow("AllTeachers")}>
                  Teacher Management
                </MenuItem>
                <SubMenu title="Teacher Monitoring">
                  <MenuItem>Done Assignment</MenuItem>
                  <MenuItem>Support Monitoring</MenuItem>
                </SubMenu>
              </SubMenu>
              <SubMenu title="Student" icon={"A S"}>
                <MenuItem>All Student</MenuItem>
                <MenuItem>Add Student</MenuItem>
                <MenuItem>Monitoring Student</MenuItem>
              </SubMenu>
              <MenuItem onClick={() => setShow("ManageUser")} icon={"M"}>
                Mange Users
              </MenuItem>
              <MenuItem icon={"C D"}>Clear Device</MenuItem>
              <MenuItem icon={"A"}>Assignment</MenuItem>
              <MenuItem icon={"M A"}>My Assignment</MenuItem>
              <MenuItem icon={"M A"}>Make Admin</MenuItem>
              <MenuItem onClick={() => setShow("Review")} icon={"R"}>
                Review
              </MenuItem>
              <MenuItem onClick={() => setShow("Approve")} icon={"APP"}>
                Approve
              </MenuItem>
              <MenuItem onClick={() => setShow("AddVideos")} icon={"Ad V"}>
                AddVideos
              </MenuItem>
            </Menu>

            <SidebarFooter>
              <h6>Hello</h6>
            </SidebarFooter>
          </ProSidebar>
          ;
        </div>
        <div className="ms-5">
          <div className=" mt-5 text-center  m-auto">
            {show == "AddCourse" && <AddCourse></AddCourse>}
            {show == "AddCategory" && <AddCategory></AddCategory>}
            {show == "AllCourses" && <AllCourses></AllCourses>}
            {show == "MakeTeacher" && <MakeTeacher></MakeTeacher>}
            {show == "AllTeachers" && <AllTeacher></AllTeacher>}
            {show == "ManageUser" && <ManageUser></ManageUser>}
            {show == "Review" && <Review></Review>}
            {show == "Approve" && <Approve></Approve>}
            {show == "AddVideos" && <AddVideos></AddVideos>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
