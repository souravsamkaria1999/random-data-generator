import { Button } from "@mui/material";
import React from "react";

const ResetListing = ({ resetDataHandler }) => {
  return (
    <Button
      sx={{ mt: 3, ml: 1, width: "18ch" }}
      variant="contained"
      onClick={resetDataHandler}
    >
      Reset
    </Button>
  );
};

export default ResetListing;
