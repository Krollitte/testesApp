import { fireEvent, render } from "@testing-library/react-native";
import App from "../../App";
it("example test", () => {
  expect(1).toBe(1);
});
describe("App ComponentTests", () => {
  it("should render App Component", () => {
    const { getByText } = render(<App />);

    expect(getByText("App Contador")).toBeTruthy();
  });

  it("should change counter when pressing button", () => {
    const { getByTestId, getByText } = render(<App />);
    const button = getByText("+");
    fireEvent.press(button);
    fireEvent.press(button);

    const counterText = getByTestId("counter");
    expect(counterText.props.children).toBe(2);
  });

  it("should decrease counter when pressing button", () => {
    const { getByTestId, getByText } = render(<App />);
    const button = getByText("-");
    fireEvent.press(button);

    const counterText = getByTestId("counter");
    expect(counterText.props.children).toBe(-1);
  });

  it("should render the welcome component", () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText("Digite seu nome...");
    const loginButton = getByText("Login");

    fireEvent.changeText(input, "Rafael");
    fireEvent.press(loginButton);

    expect(input).toBeTruthy();
    expect(loginButton).toBeTruthy();
  });
});
