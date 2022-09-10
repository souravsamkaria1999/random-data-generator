import React from "react";
import classes from "./index.module.css";
const FlatSlotInfo = ({ flatSlotList }) => {
  // console.log(flatSlotList);
  return (
    <div className={classes.box}>
      {flatSlotList.map((value, index, key) => {
        return <div key={index}>{value}</div>;
      })}
    </div>
  );
};

export default FlatSlotInfo;
