import axios from "axios";
import React, { useContext, useState } from "react";

const handleImageUpload = (event) => {
  const imageData = new FormData();
  imageData.set("key", "2cba9267a477da53356313c7b21d374e");
  imageData.append("image", event?.target?.files[0]);

  axios
    .post("https://api.imgbb.com/1/upload", imageData)
    .then(function (response) {
      console.log(response?.data?.data?.display_url);

      return response?.data?.data?.display_url;
    })
    .catch(function (error) {
      console.log(error);
    });
};
export default handleImageUpload;
