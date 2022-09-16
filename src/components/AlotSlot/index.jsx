import { Button, Grid } from "@mui/material";
import React from "react";
import classes from "./index.module.css";
import { AlottedSlotContent } from '../../Content/index';
const AlotSlot = ({ SlotsHandler }) => {
  return (
    <Grid xs={6}
    
    style={{
      textAlign: "left",
    }}>
      <Button
        sx={{ mt: 3, ml: 2, width: "19ch" }}
        type="button"
        onClick={SlotsHandler}
        variant="contained"
        size="small"
      >
        <div className={classes.save_btn}>{AlottedSlotContent[0]}</div>
      </Button>
    </Grid>
  );
};

export default AlotSlot;
