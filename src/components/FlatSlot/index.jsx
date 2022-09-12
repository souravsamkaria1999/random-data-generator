import React, { useState, useEffect } from "react";
import { data } from "../../Content";
import FlatSlotInfo from "./FlatSlotInfo/index";
const FlatSlot = ({ flatListArray, getFlatData }) => {
  const [flatSlotInput, setFlatSlotInput] = useState();
  const [flatSlotList, setFlatSlotList] = useState(getFlatData());

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
    window.location.reload();
  };
  useEffect(() => {
    localStorage.setItem("Flat list", JSON.stringify(flatSlotList));
  }, [flatSlotList]);

  // const [names, setNames] = React.useState([]);

  // function handleInput() {
  //   const input = document.getElementById("input");
  //   setNames((prevState) => {
  //     return [input.value, ...prevState]; // prepend new value
  //   });
  // }

  return (
    <main>
      <center>
        {/* <input id="input" />
        <button className="btn" onClick={handleInput}>
          Submit Name
        </button>
        {names.map((name) => (
          <div className="">{name}</div>
        ))}{" "} */}
        <h4 style={{ marginBottom: "0px", marginTop: "50px" }}>flats </h4>
      </center>
      <FlatSlotInfo flatListArray={flatListArray} />
      <br />
      <input
        id="input"
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
