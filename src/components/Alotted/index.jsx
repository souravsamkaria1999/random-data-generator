import React, { useState } from "react";
import classes from "./index.module.css";

const getParkingData = () => {
  let list = localStorage.getItem("Parking-slot-list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
const getFlatData = () => {
  let list = localStorage.getItem("Flat list");
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
const Alotted = () => {
  const [parkingSlotList, setParkingSlotList] = useState(getParkingData());
  const [flatSlotList, setFlatSlotList] = useState(getFlatData(),getAlottedData());

  var flatRandomValue = flatSlotList[~~(Math.random() * flatSlotList.length)];

  var ParkingRandomValue =
    parkingSlotList[~~(Math.random() * parkingSlotList.length)];

  const [flatRandomNumber, setFlatRandomNumber] = useState();
  const [ParkingRandomNumber, setParkingRandomNumber] = useState();

  const SlotsHandler = () => {
    setFlatRandomNumber(flatRandomValue);
    setParkingRandomNumber(ParkingRandomValue);
  };
  React.useEffect(() => {
    localStorage.setItem("Alotted-slot-list", JSON.stringify(flatSlotList));
  }, [flatSlotList]);
  return (
    <main style={{ marginTop: "43px", width: "350px" }}>
      <center>
        <div>Alotted Slot </div>
      </center>

      <div className={classes.box}>
        {flatRandomNumber != undefined ? (
          <p>
            flatsSlot:
            <b>
              {flatRandomNumber == undefined ? "No data" : flatRandomNumber}
            </b>
          </p>
        ) : (
          ""
        )}
        {flatRandomNumber != undefined ? (
          <p>
            ParkingSlot:
            <b>
              {ParkingRandomNumber == undefined
                ? ParkingRandomNumber
                : ParkingRandomNumber}
            </b>
          </p>
        ) : (
          ""
        )}
      </div>
      <br />
      <center>
        {" "}
        <button
          typeof="button"
          onClick={SlotsHandler}
          style={{ marginLeft: "10px" }}
        >
          get a random data
        </button>
      </center>
    </main>
  );
};

export default Alotted;
