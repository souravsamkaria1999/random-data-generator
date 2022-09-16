import React from "react";
import { styled } from "@mui/material/styles";
import classes from "./index.module.css";
import Paper from "@mui/material/Paper";
import { Box, Button, Typography } from "@mui/material";
import { AlottedSlotContent } from "../../Content";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F0F8FD",
  padding: theme.spacing(5),
  margin: theme.spacing(1),
}));
const Alotted = ({ SlotsHandler, updatedValue }) => {
  const slotHandler = () => {
    SlotsHandler();
  };

  const NewUser = updatedValue?.map((value, key) => {
    return (
      <Typography
        variant="container"
        className={value != undefined ? classes.container : null}
        key={key}
      >
        {value != undefined ? (
          <Typography variant="outer_box" className={classes.outer_box}>
            <Typography variant="title" className={classes.title}>
              {value}
            </Typography>
          </Typography>
        ) : null}
      </Typography>
    );
  });
  return (
    <Grid item xs={8} style={{ margin: "auto" }}>
      <Item>
        <Typography variant="heading" className={classes.heading}>
          {AlottedSlotContent[0]}
        </Typography>
        <hr />
        <br />
        <div variant="scrolling_box" className={classes.scrolling_box}>
          {NewUser}
        </div>
        <Box data-testid="show-alotted-value">
          <center>
            <Button
              sx={{ mt: 6, ml: 4, width: "23ch" }}
              type={AlottedSlotContent[1]}
              onClick={slotHandler}
              style={{ marginLeft: "10px" }}
              variant="contained"
            >
              <div className={classes.save_btn}> {AlottedSlotContent[1]}</div>
            </Button>
          </center>
        </Box>
      </Item>
    </Grid>
  );
};

export default Alotted;
