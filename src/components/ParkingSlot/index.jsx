import React, { useEffect, useState } from "react";
import classes from "./index.module.css";
const getParkingData = () => {
  let list = localStorage.getItem("Parking-slot-list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const ParkingSlot = ({ ParkingDatas, array1, getParkingData }) => {
  const [parkingSlotInput, setParkingSlotInput] = useState("P:  ");
  const [parkingSlotList, setParkingSlotList] = useState(getParkingData());
  const [value, setValue] = useState(true);

  const inputChangeHandler = (e) => {
    setParkingSlotInput(e.target.value);
  };
  const ParkingInputSubmitHandler = (e) => {
    setValue(false);
    e.preventDefault();
    setParkingSlotList([...parkingSlotList, parkingSlotInput]);

    setParkingSlotInput("");
  };

  useEffect(() => {
    localStorage.setItem("Parking-slot-list", JSON.stringify(parkingSlotList));
  }, [parkingSlotList]);
  return (
    <main>
      <h4>Parking Slot</h4>
      {/* <ParkingSlotDetails parkingSlotList={parkingSlotList} /> */}
      <div className={classes.box}>{ParkingDatas}</div>
      <br />
      <form onSubmit={ParkingInputSubmitHandler}>
        <input
          id="todo-input"
          type="text"
          value={parkingSlotInput}
          onChange={inputChangeHandler}
          // disabled={!value}
        />
        <button

        // disabled={!parkingSlotInput}
        >
          Lock Listing
        </button>{" "}
      </form>
    </main>
  );
};

export default ParkingSlot;

// import React, { useEffect, useState } from "react";
// import ParkingSlotDetails from "./ParkingSlotDetails/index";

// const getParkingData = () => {
//   let list = localStorage.getItem("Parking-slot-list");
//   if (list) {
//     return JSON.parse(list);
//   } else {
//     return [];
//   }
// };

// const ParkingSlot = () => {
//   const [parkingSlotInput, setParkingSlotInput] = useState("P:  ");
//   const [parkingSlotList, setParkingSlotList] = useState(getParkingData());
//   const [value, setValue] = useState(true);

//   const inputChangeHandler = (e) => {
//     setParkingSlotInput(e.target.value);
//   };
//   const ParkingInputSubmitHandler = (e) => {
//     setValue(false);
//     e.preventDefault();
//     setParkingSlotList([...parkingSlotList, parkingSlotInput]);

//     setParkingSlotInput("");
//   };

//   useEffect(() => {
//     localStorage.setItem("Parking-slot-list", JSON.stringify(parkingSlotList));
//   }, [parkingSlotList]);
//   return (
//     <main>
//       <center>
//         {" "}
//         <h4>Parking Slot</h4>
//       </center>
//       <ParkingSlotDetails parkingSlotList={parkingSlotList} />

//       <br />
//       <form onSubmit={ParkingInputSubmitHandler}>
//         <input
//           id="todo-input"
//           type="text"
//           value={parkingSlotInput}
//           onChange={inputChangeHandler}
//           // disabled={!value}
//         />
//         <button

//           // disabled={!parkingSlotInput}
//         >
//           Lock Listing
//         </button>{" "}
//       </form>
//     </main>
//   );
// };

// export default ParkingSlot;
