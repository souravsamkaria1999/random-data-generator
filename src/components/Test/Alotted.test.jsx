import { render, fireEvent, screen, within } from "@testing-library/react";
import AlotSlot from '../AlotSlot/index';
test("ALotted slot", () => {
    render(<AlotSlot />);

    const saveBtn = screen.getByTestId("show-alotted-value");
    fireEvent.click(saveBtn);
});
