import React, { useState } from "react";
import classes from "./index.module.css";
import ParkingSlotDetails from "./ParkingSlotDetails";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Box, Button, InputAdornment, Typography } from "@mui/material";
import { ParkingSlotContent } from "../../Content";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#828382" : "#F0F8FD",
  padding: theme.spacing(5),
  margin: theme.spacing(1),
}));
const ParkingSlot = ({ parkingSlotList, setParkingSlotList, show }) => {
  const [parkingSlotInput, setParkingSlotInput] = useState();

  const inputChangeHandler = (e) => {
    setParkingSlotInput(e.target.value);
  };

  const checkParkingValue = parkingSlotList?.map((item) =>
    item == "P: " + parkingSlotInput ? 1 : 0
  );
  const ParkingInputSubmitHandler = (e) => {
    e.preventDefault();

    setParkingSlotList(
      [...parkingSlotList, "P: " + parkingSlotInput].reverse()
    );
    setParkingSlotInput("");
  };
  const checkParkingInput = checkParkingValue?.includes(1);
  return (
    <Item>
      <Typography variant="heading" className={classes.heading}>
        {ParkingSlotContent[0]}
      </Typography>
      <hr />
      <br />
      <ParkingSlotDetails parkingSlotList={parkingSlotList} />
      <Box component="form" noValidate autoComplete="off">
        <TextField
          sx={{
            mt: 3,
            ml: 0,
            width: "5ch",
          }}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">P: </InputAdornment>
            ),
          }}
        />{" "}
        <TextField
          sx={{
            mt: 3,
            ml: 0,
            width: "25ch",
          }}
          size="small"
          error={checkParkingValue?.includes(1) ? true : false}
          label={
            checkParkingValue?.includes(1) ? (
              <div className={classes.inter_font}>{ParkingSlotContent[1]}</div>
            ) : (
              <div className={classes.inter_font}>{ParkingSlotContent[2]}</div>
            )
          }
          type="text"
          value={parkingSlotInput}
          helperText={
            checkParkingValue?.includes(1) ? ParkingSlotContent[3] : ""
          }
          onChange={inputChangeHandler}
          disabled={show}
          data-testid="text-field"
        />
        <Button
          sx={{ mt: 3, ml: 1, width: "12ch" }}
          type={ParkingSlotContent[4]}
          disabled={checkParkingInput || show || !parkingSlotInput}
          onClick={ParkingInputSubmitHandler}
          variant="contained"
          size="small"
          data-testid={ParkingSlotContent[5]}
        >
          <div className={classes.save_btn}>{ParkingSlotContent[4]}</div>
        </Button>
      </Box>
    </Item>
  );
};

export default ParkingSlot;
