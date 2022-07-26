import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

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

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
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
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
const Fqa = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        // onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography> how we i can learn pyathon</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            <h6 className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quisquam laboriosam dolor doloribus dignissimos odio
              incidunt sequi ad molestiae reiciendis.
            </h6>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* second */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        // onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography> i am school student can i enroll this course</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            <h6 className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quisquam laboriosam dolor doloribus dignissimos odio
              incidunt sequi ad molestiae reiciendis.
            </h6>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        // onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography> what is web development ?</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            <h6 className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quisquam laboriosam dolor doloribus dignissimos odio
              incidunt sequi ad molestiae reiciendis.
            </h6>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        // onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography> how much time should i give to this course</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            <h6 className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quisquam laboriosam dolor doloribus dignissimos odio
              incidunt sequi ad molestiae reiciendis.
            </h6>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Fqa;
