import { Typography } from "@mui/material";
import React from "react";
import classes from "./index.module.css";
const FlatSlotInfo = ({ flatSlotList }) => {
  const NewUser = flatSlotList?.map((value) => {
    return (
      <Typography variant="container" className={classes.container}>
        <Typography variant="outer_box" className={classes.outer_box}>
          <Typography variant="title" className={classes.title}>
            {value}
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

export default FlatSlotInfo;
