import React, { useState } from "react";
import classes from "./index.module.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import FlatSlotInfo from "./FlatSlotInfo/index";
import { FlatSlotConstant } from "../../Constant/index";
import PropTypes from "prop-types";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#828382" : "#F0F8FD",
  padding: theme.spacing(5),
  margin: theme.spacing(1),
}));
const ALPHA_NUMERIC_DASH_REGEX = /^[a-zA-Z0-9-]+$/;

const FlatSlot = ({ flatSlotList, setFlatSlotList, show }) => {
  const [flatSlotInput, setFlatSlotInput] = useState();
  const inputChangeHandler = (e) => {
    setFlatSlotInput(e.target.value);
  };
  // flat Slot submit handler
  const FlatInputSubmitHandler = (e) => {
    e.preventDefault();
    setFlatSlotList([...flatSlotList, flatSlotInput].reverse());
    setFlatSlotInput("");
  };

  // btn enable disable handler
  const checkflatValue = flatSlotList?.map((item) =>
    item == flatSlotInput ? 1 : 0
  );
  const checkflatInput = checkflatValue?.includes(1);
  return (
    <Grid item sm={5} md={5} style={{ margin: "auto" }}>
      <Item className={classes.backgroundColor}>
        <Typography variant="heading" className={classes.heading}>
          {FlatSlotConstant[0]}
        </Typography>
        <hr />
        <br />
        <FlatSlotInfo flatSlotList={flatSlotList} />
        <Box component="form" autoComplete="off">
          <TextField
            sx={{
              mt: 3,
              ml: 0,
              width: "25ch",
            }}
            type="text"
            size={FlatSlotConstant[6]}
            label={
              checkflatValue?.includes(1) ? (
                <div className={classes.inter_font}>{FlatSlotConstant[1]}</div>
              ) : (
                <div className={classes.inter_font}>{FlatSlotConstant[2]}</div>
              )
            }
            value={flatSlotInput}
            error={checkflatValue?.includes(1) ? true : false}
            onKeyDown={(event) => {
              if (!ALPHA_NUMERIC_DASH_REGEX.test(event.key)) {
                event.preventDefault();
              }
            }}
            helperText={
              checkflatValue?.includes(1) ? (
                <div className={classes.inter_font}>{FlatSlotConstant[3]}</div>
              ) : (
                ""
              )
            }
            onChange={inputChangeHandler}
            disabled={show}
            data-testid="text-field"
          />
          <Button
            sx={{ mt: 3, ml: 1, width: "12ch" }}
            type={FlatSlotConstant[4]}
            variant={FlatSlotConstant[7]}
            data-testid={FlatSlotConstant[5]}
            size={FlatSlotConstant[6]}
            onClick={FlatInputSubmitHandler}
            disabled={checkflatInput || show || !flatSlotInput}
          >
            <span className={classes.save_btn}>{FlatSlotConstant[4]}</span>
          </Button>
        </Box>
      </Item>
    </Grid>
  );
};
FlatSlot.propTypes = {
  flatSlotList: PropTypes.array,
  setFlatSlotList: PropTypes.func,
  show: PropTypes.bool,
};
export default FlatSlot;
