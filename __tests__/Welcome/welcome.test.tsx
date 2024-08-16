import { fireEvent, render } from "@testing-library/react-native";
import { Welcome } from "../../src/Welcome";

describe("Welcome component teste", () => {
  it("show display welcome message on login button press ", () => {
    const handleGetUserMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <Welcome handleGetUser={handleGetUserMock} />
    );

    const input = getByPlaceholderText("Digite seu nome...");
    fireEvent.changeText(input, "Matheus");
    const button = getByText("Login");
    fireEvent.press(button);

    expect(getByText("Welcome Matheus")).toBeTruthy();
  });
});
