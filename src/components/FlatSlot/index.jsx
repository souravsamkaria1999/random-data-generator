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

const FlatSlot = ({ flatSlotList, setFlatSlotList, getFlatData }) => {
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
  };
  const checkflatInput = checkflatValue.includes(1);
  const checkInputSpacing =
    flatSlotInput && flatSlotInput.includes(" ") ? true : false;
  const startBtnHandler = flatSlotInput?.length > 3 ? false : true;
  return (
    <Item>
      <Typography variant="heading" className={classes.heading}>
        {FlatSlotContent[0]}
      </Typography>
      <hr />

      <FlatSlotInfo flatSlotList={flatSlotList} />
      <Box component="form" noValidate autoComplete="off">
        <TextField
          pattern="/^\S*$/"
          sx={{
            mt: 4,
            ml: 0,
            width: "25ch",
          }}
          size="medium"
          error={checkflatValue.includes(1) ? true : false}
          label={
            checkflatValue.includes(1) ? FlatSlotContent[1] : FlatSlotContent[2]
          }
          type="text"
          value={flatSlotInput}
          helperText={checkflatValue.includes(1) ? "Value already exists" : ""}
          onChange={inputChangeHandler}
        />
        <Button
          sx={{ mt: 5, ml: 1, p: 1, width: "12ch" }}
          type={FlatSlotContent[3]}
          disabled={checkflatInput || checkInputSpacing || startBtnHandler}
          onClick={FlatInputSubmitHandler}
          variant="contained"
        >
          {" "}
          {FlatSlotContent[3]}
        </Button>
      </Box>
      {/* <p>{checkflatValue.includes(1) ? "not available" : ""}</p> */}
    </Item>
  );
};

export default FlatSlot;
