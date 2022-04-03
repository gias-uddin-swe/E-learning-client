import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StudentLogin from "./components/Login/StudentLogin/StudentLogin";
import Error404 from "./components/Error/Error404/Error404";
import StudentDashboard from "./components/Dashboard/StudentDashboard/StudentDashboard";
import MyClass from "./components/MyClass/MyClass";
import AvilableCourse from "./components/Home/AvilableCourse/AvilableCourse";
import CourseDetails from "./components/Sheared/CourseDetails/CourseDetails";
import PaymentRoute from "./config/PaymentRoute/PaymentRoute";
import Courses from "./components/Home/Courses/Courses";
import AllCourses from "./components/Sheared/AllCourses/AllCourses";
import Contact from "./components/Sheared/Contact/Contact";
import Menubar from "./components/Sheared/Menubar/Menubar";
import Footer from "./components/Sheared/Footer/Footer";
import TeacherRegister from "./components/Register/TeacherRegister/TeacherRegister";
import TeacherLogin from "./components/Login/TeacherLogin/TeacherLogin";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/category/:categoryName">
              <AvilableCourse></AvilableCourse>
            </Route>
            <Route path="/login">
              <StudentLogin></StudentLogin>
            </Route>
            <Route path="/courses">
              <AllCourses></AllCourses>
            </Route>
            <Route path="/contact">
              <Menubar></Menubar>
              <Contact></Contact>
              <Footer></Footer>
            </Route>
            <Route path="/studentDashboard">
              <StudentDashboard></StudentDashboard>
            </Route>
            <Route path="/myClass">
              <MyClass></MyClass>
            </Route>
            <Route path="/courseDetails">
              <CourseDetails></CourseDetails>
            </Route>
            <Route path="/paymentMethod">
              <PaymentRoute></PaymentRoute>
            </Route>
            <Route path="/teacherRegister">
              <TeacherRegister></TeacherRegister>
            </Route>
            <Route path="/teacherLogin">
              <TeacherLogin></TeacherLogin>
            </Route>

            <Route path="*">
              <Error404></Error404>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
