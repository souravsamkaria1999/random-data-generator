import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import classes from "./index.module.css";
import FlatSlotInfo from "./FlatSlotInfo/index";
import TextField from "@mui/material/TextField";
import { Box, Button, Typography } from "@mui/material";
import { FlatSlotContent } from "../../Content/index";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#828382" : "#F0F8FD",
  padding: theme.spacing(5),
  margin: theme.spacing(1),
}));
const FlatSlot = ({
  flatSlotList,
  setFlatSlotList,
  getFlatData,
  setType,
  setInputEnable,
  show,
}) => {
  const [flatSlotInput, setFlatSlotInput] = useState();
  const [inputDisabled, setInputDisabled] = useState(false);
  const inputChangeHandler = (e) => {
    setFlatSlotInput(e.target.value);
  };

  const checkflatValue = flatSlotList?.map((item) =>
    item == flatSlotInput ? 1 : 0
  );
  const FlatInputSubmitHandler = (e) => {
    setInputEnable(false);
    setInputDisabled(true);
    e.preventDefault();
    setFlatSlotList([...flatSlotList, flatSlotInput].reverse());
    setFlatSlotInput("");
    setType(2);
  };
  const checkflatInput = checkflatValue?.includes(1);
  const checkInputSpacing =
    flatSlotInput && flatSlotInput?.includes(" ") ? true : false;
  const startBtnHandler = flatSlotInput?.length > 2 ? false : true;

  return (
    <Item className={classes.backgroundColor}>
      <Typography variant="heading" className={classes.heading}>
        {FlatSlotContent[0]}
      </Typography>
      <hr />
      <br />
      <FlatSlotInfo flatSlotList={flatSlotList} />
      <Box>
        {show != true ? (
          <>
            {" "}
            <TextField
              pattern="/^\S*$/"
              sx={{
                mt: 3,
                ml: 0,
                width: "25ch",
              }}
              size={FlatSlotContent[6]}
              error={checkflatValue?.includes(1) ? true : false}
              label={
                checkflatValue?.includes(1) ? (
                  <div className={classes.inter_font}>{FlatSlotContent[1]}</div>
                ) : (
                  <div className={classes.inter_font}>{FlatSlotContent[2]}</div>
                )
              }
              type="text"
              value={flatSlotInput}
              helperText={
                checkflatValue?.includes(1) ? (
                  <div className={classes.inter_font}>{FlatSlotContent[3]}</div>
                ) : (
                  ""
                )
              }
              onChange={inputChangeHandler}
              disabled={inputDisabled}
              data-testid="text-field"
            />
            <Button
              sx={{ mt: 3, ml: 1, width: "12ch" }}
              type={FlatSlotContent[4]}
              disabled={checkflatInput || checkInputSpacing || startBtnHandler}
              onClick={FlatInputSubmitHandler}
              variant={FlatSlotContent[7]}
              data-testid={FlatSlotContent[5]}
              size={FlatSlotContent[6]}
            >
              <div className={classes.save_btn}>{FlatSlotContent[4]}</div>
            </Button>
          </>
        ) : (
          ""
        )}
      </Box>
      {/* {inputDisabled == true ?  <Typography className={classes.message}>{FlatSlotContent[8]}</Typography> : ""} */}
      {/* <p>{checkflatValue.includes(1) ? "not available" : ""}</p> */}
    </Item>
  );
};

export default FlatSlot;
