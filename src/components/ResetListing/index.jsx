import React from "react";
import { Button } from "@mui/material";
import { ResetListingContent } from "../../Content";
import classes from "./index.module.css";
const ResetListing = ({ resetDataHandler }) => {
  return (
    <center>
      <Button
        sx={{ mt: 3, ml: 1, width: "18ch" }}
        variant="contained"
        onClick={resetDataHandler}
      >
        <div className={classes.save_btn}> {ResetListingContent[0]}</div>
      </Button>
    </center>
  );
};

export default ResetListing;
