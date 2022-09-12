import React from "react";
import classes from "./index.module.css";
const FlatSlotInfo = ({ flatListArray }) => {
  
  return (
    <div className={classes.box}>
      {flatListArray.map((value, index, key) => {
        return <div key={index}>{value}</div>;
      })}
    </div>
  );
};

export default FlatSlotInfo;
