import React from "react";
import "./VideoList.css";
import MetarialCollapse from "./../MetarialCollapse/MetarialCollapse";

const VideoList = ({ changeVideo, handleChangeVideo }) => {
  const AllModules = [
    {
      name: "start Python",
      modules: [
        {
          module: [
            {
              name: "1st vdeo",
              videos: [
                {
                  videoTitle: "start video 1",
                  link: "https://youtu.be/afPjO7T6kZU",
                },
                {
                  videoTitle: "start video 1",
                  link: "https://youtu.be/afPjO7T6kZU",
                },
                {
                  videoTitle: "start video 1",
                  link: "https://youtu.be/afPjO7T6kZU",
                },
              ],
            },
            {
              name: "2nd vdeo",
              videos: [
                {
                  videoTitle: "start video 1",
                  link: "https://youtu.be/afPjO7T6kZU",
                },
              ],
            },
          ],
        },
        {
          module: [
            {
              name: "1st vdeo",
              videos: [
                {
                  videoTitle: "start video 1",
                  link: "https://youtu.be/afPjO7T6kZU",
                },
              ],
            },
            {
              name: "2nd vdeo",
              videos: [
                {
                  videoTitle: "start video 1",
                  link: "https://youtu.be/afPjO7T6kZU",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "start Python",
      modules: [
        {
          module: [
            {
              name: "1st vdeo",
              videos: [
                {
                  videoTitle: "start video 1",
                  link: "https://youtu.be/afPjO7T6kZU",
                },
              ],
            },
            {
              name: "2nd vdeo",
              videos: [
                {
                  videoTitle: "start video 1",
                  link: "https://youtu.be/afPjO7T6kZU",
                },
              ],
            },
          ],
        },
        {
          module: [
            {
              name: "1st vdeo",
              videos: [
                {
                  videoTitle: "start video 1",
                  link: "https://youtu.be/afPjO7T6kZU",
                },
              ],
            },
            {
              name: "2nd vdeo",
              videos: [
                {
                  videoTitle: "start video 1",
                  link: "https://youtu.be/afPjO7T6kZU",
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  console.log(handleChangeVideo);
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
