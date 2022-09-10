import React from "react";
import Alotted from "./components/Alotted/index";
import FlatSlot from "./components/FlatSlot/index";
import ParkingSlot from "./components/ParkingSlot/index";
const App = () => {
  return (
    <>
      <div style={{ display: "flex", marginRight: "30px" }}>
        <FlatSlot />
        <div style={{ marginLeft: "50px" }}>
          <ParkingSlot />
        </div>

        <div style={{ marginLeft: "50px" }}>
          <Alotted />
        </div>
      </div>

      <center> </center>
    </>
  );
};
export default App;
