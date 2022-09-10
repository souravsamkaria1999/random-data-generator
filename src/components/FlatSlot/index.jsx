import React, { useState, useEffect } from "react";
import classes from "./index.module.css";
import FlatSlotInfo from "./FlatSlotInfo/index";
const getFlatData = () => {
  let list = localStorage.getItem("Flat list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
const FlatSlot = () => {
  const [flatSlotInput, setFlatSlotInput] = useState("");
  const [flatSlotList, setFlatSlotList] = useState(getFlatData());
  const [value, setValue] = useState(true);
  const inputChangeHandler = (e) => {
    setFlatSlotInput(e.target.value);
  };
  const FlatInputSubmitHandler = (e) => {
    setValue(false);
    e.preventDefault();
    setFlatSlotList([...flatSlotList, flatSlotInput]);

    setFlatSlotInput("");
  };
  useEffect(() => {
    localStorage.setItem("Flat list", JSON.stringify(flatSlotList));
  }, [flatSlotList]);
  console.log(flatSlotList);
  // console.log(flatSlotInput.length > 3 ? flatSlotInput : "dsa");
  return (
    <main>
      <center>
        <h4>flats </h4>
      </center>

      <FlatSlotInfo flatSlotList={flatSlotList} />
      <br />
      <form onSubmit={FlatInputSubmitHandler}>
        <input
          id="todo-input"
          type="text"
          value={flatSlotInput}
          onChange={inputChangeHandler}
          // disabled={!value}
        />
        <button
        //  disabled={!flatSlotInput}
         
         >Lock Listing</button>{" "}
      </form>
    </main>
  );
};

export default FlatSlot;
