import React, { useState } from "react";
import Alotted from "../Alotted/index";
import { styled } from "@mui/material/styles";

import FlatSlot from "../FlatSlot/index";
import ParkingSlot from "../ParkingSlot/index";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { isDisabled } from "@testing-library/user-event/dist/utils";
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
  let list = localStorage.getItem("Alotted-slot-list2");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const Card = () => {
  const [flatSlotList, setFlatSlotList] = useState(getFlatData());
  const [parkingSlotList, setParkingSlotList] = useState(getParkingData());
  // const [type, setType] = useState(1);
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
  const flatFinalValue = [updatedValue?.[0]];
  const parkingFinalValue = [updatedValue?.[1]];
  const [show, setShow] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);

  React.useEffect(() => {
    localStorage.setItem("Alotted-slot-list", JSON.stringify(updatedValue));
    localStorage.setItem("Flat list", JSON.stringify(flatSlotList));
    localStorage.setItem("Parking-slot-list", JSON.stringify(parkingSlotList));
    localStorage.removeItem("flatFinalValue");
    localStorage.removeItem("parkingFinalValue");
  }, [flatFinalValue, parkingFinalValue, flatSlotList, parkingSlotList]);
  // console.log(parkingSlotList)
  return (
    <>
      <Box>
        <Grid container spacing={0}>
          {/* {type === 1 && ( */}
          <Grid item xs={5} style={{ margin: "auto" }}>
            <FlatSlot
              flatSlotList={flatSlotList}
              setFlatSlotList={setFlatSlotList}
              getFlatData={getFlatData}
              show={show}
              // setType={setType}
            />
          </Grid>
          {/* )} */}
          {/* {type === 2 && ( */}
          <Grid item xs={5} style={{ margin: "auto" }}>
            <ParkingSlot
              parkingSlotList={parkingSlotList}
              setParkingSlotList={setParkingSlotList}
              getParkingData={getParkingData}
              show={show}
              setShowFinalPage={setShowFinalPage}
              // setType={setType}
            />
          </Grid>
          {/* )} */}
          {/* {type === 3 && ( */}
          <Grid item xs={5} style={{ margin: "auto" }}>
            <Alotted
              SlotsHandler={SlotsHandler}
              updatedValue={updatedValue}
              setShow={setShow}
              showFinalPage={showFinalPage}
            />
          </Grid>
          {/* )} */}
        </Grid>
      </Box>
    </>
  );
};
export default Card;
