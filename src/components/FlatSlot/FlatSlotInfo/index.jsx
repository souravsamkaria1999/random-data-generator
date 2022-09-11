import React from "react";
import classes from "./index.module.css";
const FlatSlotInfo = ({ flatSlotList, deleteItem }) => {
  // console.log(flatSlotList);
  return (
    <div className={classes.box}>
      {/* {flatSlotList}
      {flatSlotList.map((options, index) => {
        return ( */}
          {/* <> */}
            <button typeof="button" 
            // onClick={() => deleteItem(index)}
            >
              Delete
            </button>
          {/* </> */}
         {/* ); */}
      {/* })} */}
    </div>
  );
};

export default FlatSlotInfo;


// import React from "react";
// import classes from "./index.module.css";
// const FlatSlotInfo = ({ flatSlotList, deleteItem }) => {
//   // console.log(flatSlotList);
//   return (
//     <div className={classes.box}>
//       {flatSlotList}
//       {flatSlotList.map((options, index) => {
//         return (
//           <>
//             <button typeof="button" onClick={() => deleteItem(index)}>
//               Delete
//             </button>
//           </>
//         );
//       })}
//     </div>
//   );
// };

// export default FlatSlotInfo;
