import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material";
import { LockListingModalContent } from "../../../Content/index";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 1,
  pt: 3,
};

const LockListingModal = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            style={{ textAlign: "center", color: "#1976d2" }}
          >
            {LockListingModalContent[0]}
          </Typography>
          <Typography
            id="modal-modal-description"
            variant="h5"
            sx={{
              pb: 5,
              pt: 3,
              textAlign: "center",
              width: 300,
              margin: "auto",
            }}
          >
            {LockListingModalContent[1]}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default LockListingModal;
