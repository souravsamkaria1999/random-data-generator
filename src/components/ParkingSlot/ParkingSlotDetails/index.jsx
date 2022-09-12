import React from "react";
import classes from "./index.module.css";
const ParkingSlotDetails = ({ parkingSlotArray }) => {
  const ParkingSlotValue = parkingSlotArray.map((value, index, key) => {
    return <div key={index}>{value}</div>;
  });

  return (
    <>
      {ParkingSlotValue}
    </>
  );
};

export default ParkingSlotDetails;
