import React, { useEffect, useState } from "react";
import ParkingSlotDetails from "./ParkingSlotDetails";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const ParkingSlot = ({ parkingSlotArray, getParkingData }) => {
  const [parkingSlotInput, setParkingSlotInput] = useState();
  const [parkingSlotList, setParkingSlotList] = useState(getParkingData());

  const inputChangeHandler = (e) => {
    setParkingSlotInput(e.target.value);
  };

  const checkParkingValue = parkingSlotList.map((item) =>
    item == parkingSlotInput ? 1 : 0
  );
  const ParkingInputSubmitHandler = (e) => {
    e.preventDefault();
    setParkingSlotList(
      [...parkingSlotList, "P: " + parkingSlotInput].reverse()
    );
    setParkingSlotInput("");
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem("Parking-slot-list", JSON.stringify(parkingSlotList));
  }, [parkingSlotList]);

  return (
    <Item sx={{ bgcolor: "#cfe8fc" }}>
      <h4>Parking Slot </h4>
      <ParkingSlotDetails parkingSlotArray={parkingSlotArray} />
      <input
        id="todo-input"
        type="text"
        value={parkingSlotInput}
        onChange={inputChangeHandler}
        placeholder="P:"
      />
      <button
        disabled={checkParkingValue.includes(1)}
        onClick={ParkingInputSubmitHandler}
      >
        Lock ParkingSlot
      </button>{" "}
      <p>{checkParkingValue.includes(1) ? "not available" : ""}</p>
    </Item>
  );
};

export default ParkingSlot;
