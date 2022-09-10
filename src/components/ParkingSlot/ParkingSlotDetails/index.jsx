import React from "react";
import classes from "./index.module.css";
const ParkingSlotDetails = ({ parkingSlotList }) => {
  const ParkingSlotValue = parkingSlotList.map((value, index, key) => {
    return <div key={index}>{value}</div>;
  });
  return <div className={classes.box}>{ParkingSlotValue}</div>;
};

export default ParkingSlotDetails;
