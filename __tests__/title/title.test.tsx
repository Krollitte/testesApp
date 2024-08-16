import { render } from "@testing-library/react-native";
import { Title } from "../../src/Title";
describe("Test TitleComponent", () => {
  it("should render title correctly", () => {
    const { getByText } = render(<Title title="Rafael" />);

    expect(getByText("Rafael")).toBeTruthy();
  });

  it("should check style", () => {
    const { getByText } = render(<Title title="Rafael" />);

    expect(getByText("Rafael").props.style).toEqual({
      fontSize: 30,
      color: "red",
      marginBottom: 20,
    });
  });
});
