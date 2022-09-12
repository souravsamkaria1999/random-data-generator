import React, { useState } from "react";
import Alotted from "../Alotted/index";
import FlatSlot from "../FlatSlot/index";
import ParkingSlot from "../ParkingSlot/index";
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

const Card = () => {
  const [flatSlotList, setFlatSlotList] = useState(getFlatData());
  const [parkingSlotList, setParkingSlotList] = useState(getParkingData());
  var flatRandomValue = flatSlotList[~~(Math.random() * flatSlotList.length)];

  var ParkingRandomValue =
    parkingSlotList[~~(Math.random() * parkingSlotList.length)];

  const [flatRandomNumber, setFlatRandomNumber] = useState();
  const [parkingRandomNumber, setParkingRandomNumber] = useState();

  const SlotsHandler = () => {
    setFlatRandomNumber([flatRandomValue]);
    setParkingRandomNumber([ParkingRandomValue]);
    const index = flatSlotList.indexOf(flatRandomValue);
    flatSlotList.splice(index, 1);
    const ParkingIndex = parkingSlotList.indexOf(ParkingRandomValue);
    parkingSlotList.splice(ParkingIndex, 1);
  };
  return (
    <div style={{ display: "flex", margin: "auto", justifyContent: "center" }}>
      <div style={{ border: "1px solid" }}>
        <FlatSlot flatListArray={flatSlotList} getFlatData={getFlatData} />
      </div>
      <div style={{ border: "1px solid", marginLeft: "30px" }}>
        <ParkingSlot
          parkingSlotArray={parkingSlotList}
          getParkingData={getParkingData}
        />
      </div>
      <div style={{ border: "1px solid", marginLeft: "30px" }}>
        <Alotted
          SlotsHandler={SlotsHandler}
          flatRandomNumber={flatRandomNumber}
          parkingRandomNumber={parkingRandomNumber}
        />
      </div>
    </div>
  );
};
export default Card;
