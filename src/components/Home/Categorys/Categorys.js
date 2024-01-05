import React, { useEffect, useState } from "react";
import "./Categorys.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCode } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Categorys = () => {
  const [allCategorys, setAllCategorys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setAllCategorys(data));
  }, []);
  console.log(allCategorys);
  return (
    <div className="mt-5">
      <h1>Choice Your Categories</h1>
      <div className="category-container row container d-flex justify-content-center w-100 m-auto mt-4">
        {allCategorys?.map((category, index) => (
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="category-button col-md-4 col-lg-3 col-sm-6"
          >
            <Link to={`/category/${category?.category}`} className="text-dark">
              <div className="category">
                <div className="category-logo">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <h5>{category?.category || "not found"}</h5>
                {/* <p>{category?.link || "not found"} </p> */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorys;
