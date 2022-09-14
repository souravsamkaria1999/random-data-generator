import React from "react";
import { render, screen } from "@testing-library/react";
import FlatSlot from "../FlatSlot/index";

describe("Flat test page", () => {
  it("render  text", () => {
    render(<FlatSlot />);
    screen.getByText( { FlatSlot });
  });
});
