import { render, fireEvent, screen } from "@testing-library/react";
import ParkingSlot from "../ParkingSlot/index";
test("Parking slot", () => {
  render(<ParkingSlot />);

  const saveBtn = screen.getByTestId("save-parking-value");
  fireEvent.click(saveBtn);
  const textField = screen.getByTestId("text-field");
  fireEvent.click(textField);
});
