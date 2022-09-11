import React, { useState, useEffect } from "react";
import classes from "./index.module.css";
import FlatSlotInfo from "./FlatSlotInfo/index";

const FlatSlot = ({ datas, array1, getFlatData }) => {
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
  // console.log(flatSlotList);
  // console.log(flatSlotInput.length > 3 ? flatSlotInput : "dsa");
  return (
    <main>
      <h4>flats </h4>
      <div className={classes.box}>{datas}</div>
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
        >
          Lock Listing
        </button>{" "}
      </form>
    </main>
  );
};

export default FlatSlot;

// import React, { useState } from "react";
// import classes from "./index.module.css";

// const FlatSlot = ({ datas,flatSlotList, setFlatSlotList }) => {
//   const [flatSlotInput, setFlatSlotInput] = useState("");
//   const [value, setValue] = useState(true);
//   const inputChangeHandler = (e) => {
//     setFlatSlotInput(e.target.value);
//   };
//   const FlatInputSubmitHandler = (e) => {
//     setValue(false);
//     e.preventDefault();
//     setFlatSlotList([...flatSlotList, flatSlotInput]);
//     setFlatSlotInput("");
//   };
//   // useEffect(() => {
//   //   localStorage.setItem("Flat list", JSON.stringify(flatSlotList));
//   // }, [flatSlotList]);

//   return (
//     <main>
//         <h4>flats </h4>

//       <div className={classes.box}>

//       <table>{datas} </table>

//       </div>

//       <br />
//       <form onSubmit={FlatInputSubmitHandler}>
//         <input
//           id="todo-input"
//           type="text"
//           value={flatSlotInput}
//           onChange={inputChangeHandler}
//           // disabled={!value}
//         />
//         <button>Lock Listing</button>{" "}
//       </form>
//     </main>
//   );
// };

// export default FlatSlot;
