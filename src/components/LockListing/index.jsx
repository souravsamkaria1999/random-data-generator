import { Button } from "@mui/material";
import React from "react";

const LockListing = ({ setShow }) => {
  const BtnHandler = () => {
    setShow(true);
  };
  return (
    <Button
      sx={{ mt: 3, ml: 1, width: "18ch" }}
      variant="contained"
      onClick={BtnHandler}
    >
      LockListing
    </Button>
  );
};

export default LockListing;
