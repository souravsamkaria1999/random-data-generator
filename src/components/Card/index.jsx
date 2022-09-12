import React, { useState } from "react";
import Alotted from "../Alotted/index";
import { styled } from "@mui/material/styles";

import FlatSlot from "../FlatSlot/index";
import ParkingSlot from "../ParkingSlot/index";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const getFlatData = () => {
  let list = localStorage.getItem("Flat list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const getParkingData = () => {
  let list = localStorage.getItem("Parking-slot-list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const getAlottedData = () => {
  let list = localStorage.getItem("Alotted-slot-list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const Card = () => {
  const [flatSlotList, setFlatSlotList] = useState(getFlatData());
  const [parkingSlotList, setParkingSlotList] = useState(getParkingData());
  var flatRandomValue = flatSlotList[~~(Math.random() * flatSlotList.length)];

  var ParkingRandomValue =
    parkingSlotList[~~(Math.random() * parkingSlotList.length)];

  const [updatedValue, setUpdatedValue] = useState(getAlottedData());
  const SlotsHandler = () => {
    setUpdatedValue([flatRandomValue, ParkingRandomValue]);
    const index = flatSlotList.indexOf(flatRandomValue);
    flatSlotList.splice(index, 1);
    const ParkingIndex = parkingSlotList.indexOf(ParkingRandomValue);
    parkingSlotList.splice(ParkingIndex, 1);
  };
  React.useEffect(() => {
    localStorage.setItem("Alotted-slot-list", JSON.stringify(updatedValue));
  }, [updatedValue]);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FlatSlot flatListArray={flatSlotList} getFlatData={getFlatData} />
          </Grid>
          <Grid item xs={6}>
            <ParkingSlot
              parkingSlotArray={parkingSlotList}
              getParkingData={getParkingData}
            />
          </Grid>
          <Grid item xs={6} style={{margin:'auto'}}>
            <Alotted SlotsHandler={SlotsHandler} updatedValue={updatedValue} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Card;
