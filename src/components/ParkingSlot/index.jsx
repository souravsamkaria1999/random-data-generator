import React, { useEffect, useState } from "react";
import ParkingSlotDetails from "./ParkingSlotDetails";

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
    setParkingSlotList([...parkingSlotList, "P: " + parkingSlotInput]);
    setParkingSlotInput("");
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem("Parking-slot-list", JSON.stringify(parkingSlotList));
  }, [parkingSlotList]);

  return (
    <main>
      <center>
        {" "}
        <h4 style={{ marginBottom: "0px", marginTop: "50px" }}>
          Parking Slot{" "}
        </h4>
      </center>
      <ParkingSlotDetails parkingSlotArray={parkingSlotArray} />
      <br />
      <input
        id="todo-input"
        type="text"
        value={parkingSlotInput}
        onChange={inputChangeHandler}
        placeholder="P:"
        style={{ width: "100px", marginLeft: "35px" }}
      />
      <button
        disabled={checkParkingValue.includes(1)}
        onClick={ParkingInputSubmitHandler}
      >
        Lock ParkingSlot
      </button>{" "}
      <p>{checkParkingValue.includes(1) ? "not available" : ""}</p>
    </main>
  );
};

export default ParkingSlot;
