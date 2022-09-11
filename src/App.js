import React, { useState } from "react";
import classes from "./components/ParkingSlot/index.module.css";
import Alotted from "./components/Alotted/index";
import FlatSlot from "./components/FlatSlot/index";
import ParkingSlot from "./components/ParkingSlot/index";
const getFlatData = () => {
  let list = localStorage.getItem("Flat list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
const App = () => {
  const [flatSlotList, setFlatSlotList] = useState(getFlatData());
  var flatRandomValue = flatSlotList[~~(Math.random() * flatSlotList.length)];
  const [flatRandomNumber, setFlatRandomNumber] = useState("");
  const data = flatRandomNumber[0];
  const found = flatSlotList.find((obj, id) => {
    return obj == id;
  });
  const uniqueNames = Array.from(new Set(found));

  var array1 = flatSlotList;
  var array2 = uniqueNames;

  for (var i = 0; i < array2.length; i++) {
    var arrlen = array1.length;
    for (var j = 0; j < arrlen; j++) {
      if (array2[i] == array1[j]) {
        array1 = array1.slice(0, j).concat(array1.slice(j + 1, arrlen));
      }
    }
  }
  const datas = array1.filter((elem, ind, key) => {
    return ind !== flatSlotList;
  });
  var array = flatSlotList;
  var item = flatRandomValue;

  var index = array.indexOf(item);
  array.splice(index, 1);

  const SlotsHandler = () => {
    setFlatRandomNumber([...flatRandomValue, flatRandomValue]);
  };
  console.log(datas)
  return (
    <>
      <Alotted
        datas={datas}
        SlotsHandler={SlotsHandler}
        flatRandomValue={flatRandomValue}
      />
      <FlatSlot datas={datas} flatSlotList={flatSlotList} setFlatSlotList={setFlatSlotList}/>
    
    
    </>
  );
};
export default App;

// import React from "react";
// import Alotted from "./components/Alotted/index";
// import FlatSlot from "./components/FlatSlot/index";
// import ParkingSlot from "./components/ParkingSlot/index";
// const App = () => {
//   return (
//     <>
//       <div style={{ display: "flex", marginRight: "30px" }}>
//         <FlatSlot />
//         <div style={{ marginLeft: "50px" }}>
//           <ParkingSlot />
//         </div>

//         <div style={{ marginLeft: "50px" }}>
//           <Alotted />
//         </div>
//       </div>

//       <center> </center>
//     </>
//   );
// };
// export default App;
