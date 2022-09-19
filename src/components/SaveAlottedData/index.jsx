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
const SaveAlottedData = ({ alottedDataSaveHandler, updatedValue }) => {
  const array = updatedValue;

  const updatedAlottedValue = array.reduce(function (
    updatedAlottedValue,
    key,
    index
  ) {
    return (
      (index % 2 == 0
        ? updatedAlottedValue.push([key])
        : updatedAlottedValue[updatedAlottedValue.length - 1].push(key)) &&
      updatedAlottedValue
    );
  },
  []);
  const NewUser = updatedAlottedValue?.map((value, key) => {
    return (
      <Typography
        variant="container"
        className={value != undefined ? classes.container : null}
        key={key}
      >
        {value != undefined ? (
          <Typography variant="outer_box" className={classes.outer_box}>
            <Typography variant="title" className={classes.title}>
              {value[0]}
              <hr />
              {value[1]}
            </Typography>
          </Typography>
        ) : null}
      </Typography>
    );
  });
  return (
    <Grid item sm={12} md={8} style={{ margin: "auto" }}>
      <Item>
        <Typography variant="heading" className={classes.heading}>
          {AlottedSlotContent[0]}
        </Typography>
        <hr />
        <br />
        <div variant="scrolling_box" className={classes.scrolling_box}>
          {NewUser}
        </div>
        <Box>
          <center>
            <Button
              sx={{ mt: 6, ml: 4, width: "23ch" }}
              type={AlottedSlotContent[1]}
              onClick={alottedDataSaveHandler}
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

export default SaveAlottedData;
