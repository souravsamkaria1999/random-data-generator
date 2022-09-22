import React, { useState } from "react";
import classes from "./index.module.css";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Box, Button, InputAdornment, Typography } from "@mui/material";
import { ParkingSlotConstant } from "../../Constant";
import ParkingSlotDetails from "./ParkingSlotDetails";
import PropTypes from "prop-types";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#828382" : "#F0F8FD",
  padding: theme.spacing(5),
  margin: theme.spacing(1),
}));
const ALPHA_NUMERIC_DASH_REGEX = /^[a-zA-Z0-9-]+$/;

const ParkingSlot = ({ parkingSlotList, setParkingSlotList, show }) => {
  const [parkingSlotInput, setParkingSlotInput] = useState();

  const inputChangeHandler = (e) => {
    setParkingSlotInput(e.target.value);
  };
  const val = "P: ";

  // parking slot submit handler
  const ParkingInputSubmitHandler = (e) => {
    e.preventDefault();
    setParkingSlotList([...parkingSlotList, val + parkingSlotInput].reverse());
    setParkingSlotInput("");
  };

  const checkParkingValue = parkingSlotList?.map((item) =>
    item == val + parkingSlotInput ? 1 : 0
  );
  const checkParkingInput = checkParkingValue?.includes(1);
  return (
    <Grid item sm={5} md={5} style={{ margin: "auto" }}>
      <Item>
        <Typography variant="heading" className={classes.heading}>
          {ParkingSlotConstant[0]}
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
                <InputAdornment position="start">{val}</InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{
              mt: 3,
              ml: 0,
              width: "25ch",
            }}
            type="text"
            size="small"
            value={parkingSlotInput}
            helperText={
              checkParkingValue?.includes(1) ? ParkingSlotConstant[3] : ""
            }
            onChange={inputChangeHandler}
            disabled={show}
            data-testid="text-field"
            error={checkParkingValue?.includes(1) ? true : false}
            label={
              checkParkingValue?.includes(1) ? (
                <div className={classes.inter_font}>
                  {ParkingSlotConstant[1]}
                </div>
              ) : (
                <div className={classes.inter_font}>
                  {ParkingSlotConstant[2]}
                </div>
              )
            }
            onKeyDown={(event) => {
              if (!ALPHA_NUMERIC_DASH_REGEX.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
          <Button
            sx={{ mt: 3, ml: 1, width: "12ch" }}
            variant="contained"
            size="small"
            data-testid={ParkingSlotConstant[5]}
            type={ParkingSlotConstant[4]}
            disabled={checkParkingInput || show || !parkingSlotInput}
            onClick={ParkingInputSubmitHandler}
          >
            <span className={classes.save_btn}>{ParkingSlotConstant[4]}</span>
          </Button>
        </Box>
      </Item>
    </Grid>
  );
};
ParkingSlot.propTypes = {
  parkingSlotList: PropTypes.array,
  setParkingSlotList: PropTypes.func,
  show: PropTypes.bool,
};
export default ParkingSlot;
