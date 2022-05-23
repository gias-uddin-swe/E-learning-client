import { React, useState } from "react";
import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import UseAnimations from "react-useanimations";
import menu3 from "react-useanimations/lib/menu3";
import { useParams } from "react-router-dom";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <UseAnimations
        animation={menu3}
        animationKey="menu3"
        size={38}
        style={{ padding: 100, textAlign: "end" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function MetarialCollapse({ handleChangeVideo, AllModules }) {
  const [expanded, setExpanded] = useState("");

  const { courseId } = useParams();
  console.log(courseId);

  const handleChange = (panel) => (event, newExpanded) => {
    console.log(panel);
    console.log(newExpanded);
    setExpanded(newExpanded ? panel : false);
    // setExpanded(true);
  };
  // console.log(AllModules);

  // const module = AllModules?.filter((pd) => {
  //   const test = pd?.modules;
  //   console.log(test[0]?.module[0].videos);
  // });

  const videos = [
    {
      name: "Python programming Language",
      module1: [
        {
          videoTitle:
            "Be Ready  fr the course make ready your Editr and extension",
          link: "https://youtu.be/pniVCEypZYI",
        },
        {
          videoTitle: "Learn from Programming fundamental (variable) ",
          link: "https://youtu.be/afPjO7T6kZU",
        },
        {
          videoTitle: "basic programming concept (Array,method)",
          link: "https://youtu.be/afPjO7T6kZU",
        },
      ],
    },
    {
      name: "Web-Development (Fullstack)",
      module2: [
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
  ];

  return (
    <div>
      {videos.map((pd) => (
        <Accordion
          expanded={expanded === "paython"}
          onChange={handleChange("paython")}
          // onChange={() => setExpanded(!expanded)}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Collapsible Group Item #1</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              {pd?.module1?.map((vd) => (
                <h5
                  className="video-list-item"
                  onClick={(e) => handleChangeVideo(vd?.link)}
                >
                  {vd?.videoTitle}
                </h5>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
