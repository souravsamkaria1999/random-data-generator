import { Button, Grid } from "@mui/material";
import React from "react";
import { LockListingContent } from "../../Content";
import classes from './index.module.css'
const LockListing = ({ handleOpen, setType, flatSlotList, setShow }) => {
  const BtnHandler = () => {
    if (flatSlotList?.length > 0) {
      setShow(true);
    } else {
      handleOpen();
      setType(2);
    }
  };
  return (
    <Grid
      item
      xs={12}
      style={{
        textAlign: "center",
      }}
    >
      <Button
        sx={{ mt: 3, ml: 1, width: "18ch" }}
        variant="contained"
        onClick={BtnHandler}
      >
       <div className={classes.lock_btn}> {LockListingContent[0]}
       </div> </Button>
      <br />
      <br />
    </Grid>
  );
};

export default LockListing;
