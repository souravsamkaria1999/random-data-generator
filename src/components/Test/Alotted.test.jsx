import { render, fireEvent, screen, within } from "@testing-library/react";
import Alotted from "../Alotted/index";
test("ALotted slot", () => {
    render(<Alotted />);

    const saveBtn = screen.getByTestId("show-alotted-value");
    fireEvent.click(saveBtn);
});
