import { render, fireEvent, screen } from "@testing-library/react-native";
import { Message } from "../../src/Message";

describe("Component Message", () => {
  it("should be able to render initial message ", () => {
    const { getByTestId } = render(<Message />);
    //Verify if initial message is "Aguardando"
    expect(getByTestId("message").props.children).toBe("Aguardando");
  });

  it("should be able to change message on click button ", () => {
    render(<Message />);
    expect(screen.getByTestId("message").props.children).toBe("Aguardando");
    fireEvent.press(screen.getByText("Acessar"));
    expect(screen.getByTestId("message").props.children).toBe(
      "Bem vindo Rafinha"
    );
  });
});
