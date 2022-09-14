import { render, fireEvent, screen } from "@testing-library/react";
import FlatSlot from "../FlatSlot/index";
test("flat slot", () => {
  render(<FlatSlot />);

  const saveBtn = screen.getByTestId("save-flat-value");
  fireEvent.click(saveBtn);
  const textField = screen.getByTestId("text-field");
  fireEvent.click(textField);
});
