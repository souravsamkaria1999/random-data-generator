import React, { useState, useEffect } from "react";
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

const getParkingData = () => {
  let list = localStorage.getItem("Parking-slot-list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const App = () => {
  const [flatSlotList, setFlatSlotList] = useState(getFlatData());
  const [parkingSlotList, setParkingSlotList] = useState(getParkingData());

  var flatRandomValue = flatSlotList[~~(Math.random() * flatSlotList.length)];

  var ParkingRandomValue =
    parkingSlotList[~~(Math.random() * parkingSlotList.length)];

  const [flatRandomNumber, setFlatRandomNumber] = useState("");
  const [parkingRandomNumber, setParkingRandomNumber] = useState("");
  // const data = flatRandomNumber[0];

  const found = flatSlotList.find((obj, id) => {
    return obj == id;
  });
  const uniqueNames = Array.from(new Set(found));

  const Parkingfound = flatSlotList.find((obj, id) => {
    return obj == id;
  });
  const ParkingUniqueNames = Array.from(new Set(Parkingfound));

  var array3 = parkingSlotList;
  var array4 = ParkingUniqueNames;

  for (var i = 0; i < array4.length; i++) {
    var arrlen = array3.length;
    for (var j = 0; j < arrlen; j++) {
      if (array4[i] == array3[j]) {
        array3 = array3.slice(0, j).concat(array3.slice(j + 1, arrlen));
      }
    }
  }

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

  const ParkingDatas = array3.filter((elem, ind, key) => {
    return ind !== parkingSlotList;
  });

  console.log(ParkingDatas);
  console.log(datas);

  var parkingArray = parkingSlotList;
  var ParkingItem = ParkingRandomValue;

  var ParkingIndex = parkingArray.indexOf(ParkingItem);
  parkingArray.splice(index, 1);

  var array = flatSlotList;
  var item = flatRandomValue;

  var index = array.indexOf(item);
  array.splice(index, 1);

  const SlotsHandler = () => {
    setFlatRandomNumber([...flatRandomValue, flatRandomValue]);
    setParkingRandomNumber([...ParkingRandomValue, ParkingRandomValue]);
  };

  return (
    <>
      <div style={{ border: "1px solid" }}>
        <Alotted
          datas={datas}
          ParkingDatas={ParkingDatas}
          SlotsHandler={SlotsHandler}
          flatRandomValue={flatRandomValue}
          ParkingRandomValue={ParkingRandomValue}
        />
      </div>
      <FlatSlot
        datas={datas}
        array1={array1}
        getFlatData={getFlatData}
        flatSlotList={flatSlotList}
        setFlatSlotList={setFlatSlotList}
      />

      <ParkingSlot
        ParkingDatas={ParkingDatas}
        array3={array3}
        getParkingData={getParkingData}
        parkingSlotList={parkingSlotList}
        setParkingSlotList={setParkingSlotList}
      />
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

// import React, { useState,useEffect } from "react";
// import classes from "./components/ParkingSlot/index.module.css";
// import Alotted from "./components/Alotted/index";
// import FlatSlot from "./components/FlatSlot/index";
// import ParkingSlot from "./components/ParkingSlot/index";
// const getFlatData = () => {
//   let list = localStorage.getItem("Flat list");
//   if (list) {
//     return JSON.parse(list);
//   } else {
//     return [];
//   }
// };
// const App = () => {
//   const [flatSlotList, setFlatSlotList] = useState(getFlatData());
//   var flatRandomValue = flatSlotList[~~(Math.random() * flatSlotList.length)];
//   const [flatRandomNumber, setFlatRandomNumber] = useState("");
//   const data = flatRandomNumber[0];
//   const found = flatSlotList.find((obj, id) => {
//     return obj == id;
//   });
//   const uniqueNames = Array.from(new Set(found));

//   var array1 = flatSlotList;
//   var array2 = uniqueNames;

//   for (var i = 0; i < array2.length; i++) {
//     var arrlen = array1.length;
//     for (var j = 0; j < arrlen; j++) {
//       if (array2[i] == array1[j]) {
//         array1 = array1.slice(0, j).concat(array1.slice(j + 1, arrlen));
//       }
//     }
//   }
//   const datas = array1.filter((elem, ind, key) => {
//     return ind !== flatSlotList;
//   });
//   var array = flatSlotList;
//   var item = flatRandomValue;

//   var index = array.indexOf(item);
//   array.splice(index, 1);

//   const SlotsHandler = () => {
//     setFlatRandomNumber([...flatRandomValue, flatRandomValue]);
//   };

//   useEffect(() => {
//     localStorage.setItem("Flat list", JSON.stringify(array));
//   }, [array]);
//   return (
//     <>
//     <div style={{border:'1px solid'}}>
//       <Alotted
//         datas={datas}
//         SlotsHandler={SlotsHandler}
//         flatRandomValue={flatRandomValue}
//       />
//       </div>
//     <div style={{border:'1px solid'}}>

//       <FlatSlot datas={datas} flatSlotList={flatSlotList} setFlatSlotList={setFlatSlotList}/>
//       </div>

//     </>
//   );
// };
// export default App;

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
