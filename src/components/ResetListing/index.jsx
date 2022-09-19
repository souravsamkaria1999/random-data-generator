import React from "react";
import { Button, Tooltip } from "@mui/material";
import { ResetListingContent } from "../../Content";
import classes from "./index.module.css";
const ResetListing = ({ resetDataHandler }) => {
  
  return (
    <center>
      <Tooltip title={ResetListingContent[0]} arrow>
        <Button
          sx={{ mt: 3, ml: 1, width: "17ch" }}
          variant="contained"
          onClick={resetDataHandler}
        >
          <div className={classes.save_btn}> {ResetListingContent[1]}</div>
        </Button>
      </Tooltip>
    </center>
  );
};

export default ResetListing;
