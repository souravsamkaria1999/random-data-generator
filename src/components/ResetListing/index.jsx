import React from "react";
import { Button } from "@mui/material";
import { ResetListingContent } from "../../Content";
const ResetListing = ({ resetDataHandler }) => {
  return (
    <center>
      <Button
        sx={{ mt: 3, ml: 1, width: "18ch" }}
        variant="contained"
        onClick={resetDataHandler}
      >
        {ResetListingContent[0]}
      </Button>
    </center>
  );
};

export default ResetListing;
