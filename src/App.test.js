import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { BrowserRouter } from "react-router-dom";
import Theme from "./ContainerComponents/Theme/Theme";

test("Test theme button toggle", () => {
  render(<Theme />);
  const buttonEl = screen.getByText(/Current theme/i);

  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/dark/i);
});

it("should take a snapshot", () => {
  const { asFragment } = render(
    <Provider store={configureStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  expect(
    asFragment(
      <Provider store={configureStore()}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
  ).toMatchSnapshot();
});
