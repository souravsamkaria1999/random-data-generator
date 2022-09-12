import React from "react";
import classes from "./index.module.css";

const Alotted = ({ SlotsHandler, flatRandomNumber, parkingRandomNumber }) => {
  const [disabled, setDisabled] = React.useState(false);

  const slotHandler = () => {
    SlotsHandler();
    setDisabled(true);
  };
  return (
    <main style={{ marginTop: "43px", width: "350px" }}>
      <center>
        <h4>Alotted Slot </h4>
      </center>
      <div className={classes.box}>
        {flatRandomNumber}
        <br />
        <br />

        {parkingRandomNumber}
      </div>
      <br />
      <center>
        {" "}
        <button
          disabled={disabled}
          onClick={slotHandler}
          style={{ marginLeft: "10px" }}
        >
          Get a random setValue
        </button>
      </center>
    </main>
  );
};

export default Alotted;
