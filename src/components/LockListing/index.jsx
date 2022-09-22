import React from "react";
import classes from "./index.module.css";
import { Button, Grid } from "@mui/material";
import { LockListingConstant } from "../../Constant";
import PropTypes from "prop-types";

const LockListing = ({ handleOpen, setType, flatSlotList, setShow }) => {
  // disabled input fields
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
      xs={6}
      style={{
        textAlign: "right",
      }}
    >
      <Button
        sx={{ mt: 3, ml: 1, width: "18ch" }}
        variant="contained"
        onClick={BtnHandler}
      >
        <span className={classes.lock_btn}> {LockListingConstant[0]}</span>{" "}
      </Button>
      <br />
      <br />
    </Grid>
  );
};

LockListing.propTypes = {
  handleOpen: PropTypes.func,
  setType: PropTypes.func,
  flatSlotList: PropTypes.array,
  setShow: PropTypes.func,
};
export default LockListing;
