import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material";
import { SaveAllocationModalConstant } from "../../../Constant";
import PropTypes from "prop-types";

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

const SaveAllocationModal = ({ open, handleClose }) => {
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
            {SaveAllocationModalConstant[0]}
          </Typography>
          <Typography
            sx={{
              pb: 5,
              pt: 3,
              textAlign: "center",
              width: 300,
              margin: "auto",
            }}
            id="modal-modal-description"
            variant="h5"
          >
            {SaveAllocationModalConstant[1]}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
SaveAllocationModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};
export default SaveAllocationModal;
