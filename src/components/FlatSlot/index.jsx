import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import FlatSlotInfo from "./FlatSlotInfo/index";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const FlatSlot = ({ flatListArray, getFlatData }) => {
  const [flatSlotInput, setFlatSlotInput] = useState();
  const [flatSlotList, setFlatSlotList] = useState(getFlatData());

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
    window.location.reload();
  };
  useEffect(() => {
    localStorage.setItem("Flat list", JSON.stringify(flatSlotList));
  }, [flatSlotList]);

  return (
    <Item sx={{ bgcolor: "#cfe8fc" }}>
      <h4>flats </h4>
      <FlatSlotInfo flatListArray={flatListArray} />
      <input
        id="input"
        type="text"
        value={flatSlotInput}
        onChange={inputChangeHandler}
      />
      <button
        type="submit"
        disabled={checkflatValue.includes(1)}
        onClick={FlatInputSubmitHandler}
      >
        Lock Flatslot
      </button>{" "}
      <p>{checkflatValue.includes(1) ? "not available" : ""}</p>
    </Item>
  );
};

export default FlatSlot;
