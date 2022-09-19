import { Button, Grid } from "@mui/material";
import React from "react";
import classes from "./index.module.css";
import { AlotSlotContent } from "../../Content/index";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
const AlotSlot = ({ SlotsHandler }) => {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(5),
    margin: theme.spacing(1),
  }));
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
        <div className={classes.save_btn}>{AlotSlotContent[0]}</div>
      </Button>
    </Grid>
  );
};

export default AlotSlot;
