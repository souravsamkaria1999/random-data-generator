import React, { useState, useEffect } from "react";
import FlatSlotInfo from "./FlatSlotInfo/index";

const FlatSlot = ({ flatListArray, getFlatData }) => {
  const [flatSlotInput, setFlatSlotInput] = useState();
  const [flatSlotList, setFlatSlotList] = useState(getFlatData());
  const [disabled, setDisabled] = React.useState(false);

  const inputChangeHandler = (e) => {
    setFlatSlotInput(e.target.value);
  };

  const checkflatValue = flatSlotList.map((item) =>
    item == flatSlotInput ? 1 : 0
  );

  const FlatInputSubmitHandler = (e) => {
    e.preventDefault();
    setFlatSlotList([...flatSlotList, flatSlotInput]);
    setFlatSlotInput("");
    setDisabled(true);
    // window.location.reload();
  };
  useEffect(() => {
    localStorage.setItem("Flat list", JSON.stringify(flatSlotList));
  }, [flatSlotList]);

  return (
    <main>
      <center>
        {" "}
        <h4 style={{ marginBottom: "0px", marginTop: "50px" }}>flats </h4>
      </center>
      <FlatSlotInfo flatListArray={flatListArray} />
      <br />
      <input
        id="todo-input"
        type="text"
        value={flatSlotInput}
        onChange={inputChangeHandler}
        style={{ width: "100px", marginLeft: "40px" }}
      />
      <button
        type="submit"
        disabled={checkflatValue.includes(1)}
        onClick={FlatInputSubmitHandler}
      >
        Lock Flatslot
      </button>{" "}
      <p>{checkflatValue.includes(1) ? "not available" : ""}</p>
    </main>
  );
};

export default FlatSlot;
