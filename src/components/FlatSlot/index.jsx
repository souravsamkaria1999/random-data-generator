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
  show,
}) => {
  const [flatSlotInput, setFlatSlotInput] = useState();

  const inputChangeHandler = (e) => {
    setFlatSlotInput(e.target.value);
  };

  const checkflatValue = flatSlotList.map((item) =>
    item == flatSlotInput ? 1 : 0
  );
  const FlatInputSubmitHandler = (e) => {
    e.preventDefault();
    setFlatSlotList([...flatSlotList, flatSlotInput].reverse());
    setFlatSlotInput("");
    setType(2);
  };
  const checkflatInput = checkflatValue.includes(1);
  const checkInputSpacing =
    flatSlotInput && flatSlotInput.includes(" ") ? true : false;
  const startBtnHandler = flatSlotInput?.length > 2 ? false : true;
  return (
    <Item>
      <Typography variant="heading" className={classes.heading}>
        {FlatSlotContent[0]}
      </Typography>
      <hr />
      <br />
      <FlatSlotInfo flatSlotList={flatSlotList} />
      <Box component="form" noValidate autoComplete="off">
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
              size="small"
              error={checkflatValue.includes(1) ? true : false}
              label={
                checkflatValue.includes(1)
                  ? FlatSlotContent[1]
                  : FlatSlotContent[2]
              }
              type="text"
              value={flatSlotInput}
              helperText={checkflatValue.includes(1) ? FlatSlotContent[3] : ""}
              onChange={inputChangeHandler}
            />
            <Button
              sx={{ mt: 3, ml: 1, p: 1, width: "12ch" }}
              type={FlatSlotContent[4]}
              disabled={checkflatInput || checkInputSpacing || startBtnHandler}
              onClick={FlatInputSubmitHandler}
              variant="contained"
              size="small"
            >
              <Typography> {FlatSlotContent[4]}</Typography>
            </Button>
          </>
        ) : (
          ""
        )}
      </Box>
      {/* <p>{checkflatValue.includes(1) ? "not available" : ""}</p> */}
    </Item>
  );
};

export default FlatSlot;
