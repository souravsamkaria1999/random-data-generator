import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FlatSlot from "../FlatSlot/index";
import ParkingSlot from "../ParkingSlot/index";
import LockListing from "../LockListing";
import AlotSlot from "../AlotSlot";
import SaveAlottedData from "../SaveAlottedData/index";
import ResetListing from "../ResetListing/index";
import SaveAllocationModal from "../Modals/SaveAllocationModal";
import LockListingModal from "../Modals/LockListingModal";
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
  const [updatedValue, setUpdatedValue] = useState(getAlottedData());

  const [show, setShow] = useState(false);
  const [type, setType] = useState(0);
  const [open, setOpen] = React.useState(false);
  var flatRandomValue = flatSlotList[~~(Math.random() * flatSlotList.length)];
  var ParkingRandomValue =
    parkingSlotList[~~(Math.random() * parkingSlotList.length)];

  // help to assign alotted slot
  const SlotsHandler = () => {
    if (flatRandomValue && ParkingRandomValue != undefined) {
      setUpdatedValue([...updatedValue, flatRandomValue, ParkingRandomValue]);
      const index = flatSlotList.indexOf(flatRandomValue);
      flatSlotList.splice(index, 1);
      const ParkingIndex = parkingSlotList.indexOf(ParkingRandomValue);
      parkingSlotList.splice(ParkingIndex, 1);
    } else {
      handleOpen();
      setType(1);
    }
  };

  const flatFinalValue = [updatedValue?.[0]];
  const parkingFinalValue = [updatedValue?.[1]];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // set data in local storage
  React.useEffect(() => {
    localStorage.setItem("Flat list", JSON.stringify(flatSlotList));
    localStorage.setItem("Parking-slot-list", JSON.stringify(parkingSlotList));
  }, [flatFinalValue, parkingFinalValue, flatSlotList, parkingSlotList]);

  // save data in local storage
  const alottedDataSaveHandler = () => {
    if (updatedValue.length > 0) {
      localStorage.setItem("Alotted-slot-list", JSON.stringify(updatedValue));
    } else {
      handleOpen();
      setType(1);
    }
  };

  //  reset all data present in flat, parking as well as alotted slot
  const resetDataHandler = () => {
    window.location.reload(false);
    localStorage.removeItem("Alotted-slot-list", JSON.stringify(updatedValue));
    localStorage.removeItem("Flat list", JSON.stringify(flatSlotList));
    localStorage.removeItem(
      "Parking-slot-list",
      JSON.stringify(parkingSlotList)
    );
  };
  return (
    <>
      <Box>
        <Grid container spacing={0}>
          <FlatSlot
            flatSlotList={flatSlotList}
            setFlatSlotList={setFlatSlotList}
            show={show}
          />
          <ParkingSlot
            parkingSlotList={parkingSlotList}
            setParkingSlotList={setParkingSlotList}
            show={show}
          />

          <Grid container spacing={0}>
            <LockListing
              handleOpen={handleOpen}
              setType={setType}
              flatSlotList={flatSlotList}
              setShow={setShow}
            />

            <AlotSlot SlotsHandler={SlotsHandler} />
          </Grid>

          <SaveAlottedData
            alottedDataSaveHandler={alottedDataSaveHandler}
            updatedValue={updatedValue}
          />
        </Grid>

        <ResetListing resetDataHandler={resetDataHandler} />
        {type == 1 && (
          <SaveAllocationModal open={open} handleClose={handleClose} />
        )}
        {type == 2 && (
          <LockListingModal open={open} handleClose={handleClose} />
        )}
        <br />
        <br />
      </Box>
    </>
  );
};
export default Card;
