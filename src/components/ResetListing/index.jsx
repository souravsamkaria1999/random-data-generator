import React from "react";
import classes from "./index.module.css";
import { Button, Tooltip } from "@mui/material";
import { ResetListingConstant } from "../../Constant";
import PropTypes from "prop-types";

const ResetListing = ({ resetDataHandler }) => {
  return (
    <center>
      <Tooltip title={ResetListingConstant[0]} arrow>
        <Button
          sx={{ mt: 3, ml: 1, width: "17ch" }}
          variant="contained"
          onClick={resetDataHandler}
        >
          <span className={classes.save_btn}> {ResetListingConstant[1]}</span>
        </Button>
      </Tooltip>
    </center>
  );
};
ResetListing.propTypes = {
  resetDataHandler: PropTypes.func,
};
export default ResetListing;
