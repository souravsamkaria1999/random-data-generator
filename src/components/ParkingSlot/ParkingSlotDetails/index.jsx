import React from "react";
import { Typography } from "@mui/material";
import classes from "./index.module.css";
import PropTypes from "prop-types";

const ParkingSlotDetails = ({ parkingSlotList }) => {
  const NewUser = parkingSlotList?.map((value, key) => {
    return (
      <Typography key={key} variant="container" className={classes.container}>
        <Typography variant="outer_box" className={classes.outer_box}>
          <Typography variant="title" className={classes.title}>
            {" "}
            {value}{" "}
          </Typography>
        </Typography>
      </Typography>
    );
  });
  return (
    <Typography variant="scrolling_box" className={classes.scrolling_box}>
      {NewUser}
    </Typography>
  );
};
ParkingSlotDetails.propTypes = {
  parkingSlotList: PropTypes.array,
};
export default ParkingSlotDetails;
