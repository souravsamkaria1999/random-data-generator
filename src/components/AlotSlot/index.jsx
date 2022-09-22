import React from "react";
import classes from "./index.module.css";
import { Button, Grid } from "@mui/material";
import { AlotSlotConstant } from "../../Constant/index";
import PropTypes from "prop-types";
const AlotSlot = ({ SlotsHandler }) => {
  return (
    <Grid
      item
      sm={6}
      md={6}
      style={{
        textAlign: "left",
      }}
      data-testid="show-alotted-value"
    >
      <Button
        sx={{ mt: 3, ml: 2, width: "19ch" }}
        type="button"
        onClick={SlotsHandler}
        variant="contained"
        size="small"
      >
        <span className={classes.save_btn}>{AlotSlotConstant[0]}</span>
      </Button>
    </Grid>
  );
};

AlotSlot.propTypes = {
  SlotsHandler: PropTypes.func,
};
export default AlotSlot;
