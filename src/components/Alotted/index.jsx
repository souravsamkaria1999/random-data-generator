import React from "react";
import { styled } from "@mui/material/styles";
import classes from "./index.module.css";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography } from "@mui/material";
import { AlottedSlotContent } from "../../Content";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F0F8FD",
  padding: theme.spacing(5),
  margin: theme.spacing(1),
}));
const Alotted = ({ SlotsHandler, updatedValue }) => {
  const [disabled, setDisabled] = React.useState(false);
  const slotHandler = () => {
    SlotsHandler();
    setDisabled(true);
  };
  const data = (
    <Typography variant="container" className={classes.container}>
      {updatedValue?.length > 0 ? (
        <Typography variant="outer_box" className={classes.outer_box}>
          <Typography variant="title" className={classes.title}>
            {updatedValue?.[0]}
            <br />
            {updatedValue?.[1]}
          </Typography>
        </Typography>
      ) : (
        ""
      )}
    </Typography>
  );
  return (
    <Item>
      <Typography variant="heading" className={classes.heading}>
        {AlottedSlotContent[0]}
      </Typography>
      <hr />
      <br />

      <Typography variant="scrolling_box" className={classes.scrolling_box}>
        {data}
      </Typography>
      <Box data-testid={AlottedSlotContent[2]}>
        <center>
          <Button
            sx={{ mt: 6, ml: 4, width: "23ch" }}
            type={AlottedSlotContent[1]}
            disabled={disabled}
            onClick={slotHandler}
            style={{ marginLeft: "10px" }}
            variant="contained"
          >
            <div className={classes.save_btn}> {AlottedSlotContent[1]}</div>
          </Button>
        </center>
      </Box>
    </Item>
  );
};

export default Alotted;
