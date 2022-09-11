import React, { useState } from "react";
import classes from "./index.module.css";

const Alotted = ({ datas, flatRandomValue, SlotsHandler }) => {
  return (
    <main style={{ marginTop: "43px", width: "350px" }}>
      <center>
        <div>Alotted Slot </div>
      </center>

      {datas}
      <div className={classes.box}>{flatRandomValue} ---</div>
      <br />
      <center>
        {" "}
        <button onClick={SlotsHandler} style={{ marginLeft: "10px" }}>
          get a random data
        </button>
      </center>
    </main>
  );
};

export default Alotted;
