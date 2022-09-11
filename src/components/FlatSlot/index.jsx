import React, { useState } from "react";
import classes from "./index.module.css";

const FlatSlot = ({ datas,flatSlotList, setFlatSlotList }) => {
  const [flatSlotInput, setFlatSlotInput] = useState("");
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
  // useEffect(() => {
  //   localStorage.setItem("Flat list", JSON.stringify(flatSlotList));
  // }, [flatSlotList]);

  return (
    <main>
        <h4>flats </h4>

      <div className={classes.box}>

      <table>{datas} </table>

      </div>

      <br />
      <form onSubmit={FlatInputSubmitHandler}>
        <input
          id="todo-input"
          type="text"
          value={flatSlotInput}
          onChange={inputChangeHandler}
          // disabled={!value}
        />
        <button>Lock Listing</button>{" "}
      </form>
    </main>
  );
};

export default FlatSlot;
