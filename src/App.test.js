import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders GitHub User Data", () => {
  render(<App />);
  const linkElement = screen.getByText(/GitHub User Data/i);
  expect(linkElement).toBeInTheDocument();

  screen.debug();
});

test("Test theme button toggle", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Current theme/i);

  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/dark/i);
});

it("should take a snapshot", () => {
  const { asFragment } = render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
});
