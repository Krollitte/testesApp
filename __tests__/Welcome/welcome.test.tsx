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
    expect(handleGetUserMock).toHaveBeenCalled();
  });

  it("should not display welcome message when input is empty and login button is pressed", () => {
    const handleGetUserMock = jest.fn();
    const { queryByText, getByText } = render(
      <Welcome handleGetUser={handleGetUserMock} />
    );

    const loginButton = getByText("Login");
    fireEvent.press(loginButton);

    const message = queryByText(/Bem vindo/);
    expect(message).toBeNull();

    expect(handleGetUserMock).not.toHaveBeenCalled();
  });
});
