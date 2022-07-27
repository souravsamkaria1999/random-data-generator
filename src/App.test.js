import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "./store";

test("renders GitHub User Data", () => {
  render(
    <Provider store={configureStore()}>
      <App />
      </Provider>);
  const linkElement = screen.getByText(/GitHub User Data/i);
  expect(linkElement).toBeInTheDocument();

  screen.debug();
});

test("Test theme button toggle", () => {
  render(
    <Provider store={configureStore()}><App />  </Provider>);
  const buttonEl = screen.getByText(/Current theme/i);

  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/dark/i);
});

it("should take a snapshot", () => {
  const { asFragment } = render(
    <Provider store={configureStore()}>
  <App />
  </Provider>);

  expect(asFragment(
    <Provider store={configureStore()}><App />  </Provider>)).toMatchSnapshot();
});
