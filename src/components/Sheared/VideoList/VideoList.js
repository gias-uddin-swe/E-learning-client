import React from "react";
import "./VideoList.css";
import MetarialCollapse from "./../MetarialCollapse/MetarialCollapse";

const VideoList = ({ changeVideo, handleChangeVideo, AllModules }) => {
  return (
    <div>
      <MetarialCollapse
        handleChangeVideo={handleChangeVideo}
        AllModules={AllModules}
      ></MetarialCollapse>
    </div>
  );
};

export default VideoList;
