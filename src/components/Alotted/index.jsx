import React from "react";
import { styled } from "@mui/material/styles";

import classes from "./index.module.css";
import Paper from "@mui/material/Paper";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Alotted = ({ SlotsHandler, updatedValue }) => {
  const [disabled, setDisabled] = React.useState(false);
  const slotHandler = () => {
    SlotsHandler();
    setDisabled(true);
  };
  const flatFinalValue = [updatedValue?.[0]];
  const parkingFinalValue = [updatedValue?.[1]];

  return (
    <Item sx={{ bgcolor: "#cfe8fc" ,}}>
      <center>
        <h4>Alotted Slot </h4>
      </center>
      <div className={classes.box}>
        {flatFinalValue}
        <br />
        {parkingFinalValue}
      </div>
      <br />
      <center>
        {" "}
        <button
          disabled={disabled}
          onClick={slotHandler}
          style={{ marginLeft: "10px" }}
        >
          Get a random value
        </button>
      </center>
    </Item>
  );
};

export default Alotted;
