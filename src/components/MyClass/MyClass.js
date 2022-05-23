import { React, useState, useEffect } from "react";
import Footer from "../Sheared/Footer/Footer";
import "./MyClass.css";
import StudentMenubar from "../Sheared/StudentMenubar/StudentMenubar";
import ReactPlayer from "react-player/youtube";
import UseAnimations from "react-useanimations";
import volume from "react-useanimations/lib/volume";
import VideoList from "./../Sheared/VideoList/VideoList";
import { useParams } from "react-router-dom";
const MyClass = () => {
  const [volumes, setVolumes] = useState(10);
  const [muted, setMuted] = useState(false);
  const { courseId } = useParams();
  console.log(courseId);

  const [videoData, setVideoData] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:5000/courseVideos")
      .then((res) => res.json())
      .then((result) => setVideoData(result));
  }, [courseId]);

  console.log(videoData[0]?.videos);

  const [control, setControl] = useState({
    url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    width: "100",
    height: "100",
  });
  const changeVideo = (e) => {
    const previewLink = { ...control };
    previewLink.url = e?.target?.innerText;
    setControl(previewLink);
    console.log(e.target.innerText);
  };

  // const Modules = [
  //   {
  //     title:""
  //   }
  // ]
  const handleChangeVideo = (url) => {
    console.log(url);
    const previewLink = { ...control };
    previewLink.url = url;
    setControl(previewLink);
  };

  return (
    <div>
      <StudentMenubar></StudentMenubar>
      <div className="my-class-container container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="player-wrapper w-100">
              <ReactPlayer
                control
                onReady="true"
                className="react-player"
                url={control?.url}
                width="100%"
                height="100%"
                volume={volumes}
                playing={true}
                muted={muted}
                controls={true}
              />
            </div>
            <button onClick={() => setVolumes(volumes + 5)}>+</button>
            <button onClick={() => setVolumes(volumes - 5)}>-</button>
            <button onClick={() => setMuted(!muted)}>
              <UseAnimations animationKey="volume" animation={volume} />
            </button>
          </div>
          <div className="col-md-6 video-list-container">
            <VideoList
              handleChangeVideo={handleChangeVideo}
              changeVideo={changeVideo}
            ></VideoList>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyClass;
