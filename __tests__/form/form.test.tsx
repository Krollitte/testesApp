import { fireEvent, render } from "@testing-library/react-native";
import { Form } from "../../src/Form";

describe("Component Form", () => {
  it("should be able to call handleLoginFunction with email and password when click on button", () => {
    const { getByText, getByPlaceholderText } = render(<Form />);

    const emailInput = getByPlaceholderText("digite seu email");
    const passwordInput = getByPlaceholderText("digite sua senha");
    const button = getByText("Login");
    fireEvent.changeText(emailInput, "teste@teste.com");
    fireEvent.changeText(passwordInput, "123123");

    fireEvent.press(button);

    expect(getByText("Login autorizado")).toBeTruthy();
  });
  it("should be able to render text user", () => {
    const { getByText, getByPlaceholderText, queryByText } = render(<Form />);
    const emailInput = getByPlaceholderText("digite seu email");
    const passwordInput = getByPlaceholderText("digite sua senha");
    const button = getByText("Login");
    fireEvent.changeText(emailInput, "rafael@teste.com");
    fireEvent.changeText(passwordInput, "123123");

    fireEvent.press(button);
    expect(queryByText("Login autorizado")).not.toBeTruthy();
  });
});
