import AxiosMockAdapter from "axios-mock-adapter";
import { api } from "../../src/services/api";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { Game } from "../../src/Game";

const mock = new AxiosMockAdapter(api);
describe("Game component", () => {
  afterEach(() => {
    mock.reset();
  });

  it("should be able to render correctly game data when api call ", async () => {
    mock.onGet("/next-api/?api=game&id=15").reply(200, {
      title: "Jogo teste 1",
      image_url: `${api.getUri()}/next-api/foto15.png`,
    });
    const { getByText, getByTestId } = render(<Game />);

    await waitFor(() => {
      expect(getByText("Jogo teste 1")).toBeTruthy();
      expect(getByTestId("avatar-game").props.source.uri).toBe(
        `${api.getUri()}/next-api/foto15.png`
      );
    });
  });

  it("should be able to render an error when api call fails", async () => {
    mock.onGet("/next-api/?api=game&id=15").networkError();
    const { findByText } = render(<Game />);
    const errorMessage = await findByText("Erro ao buscar dados");

    expect(errorMessage).toBeTruthy();
  });

  it("should be able to render new game data on click button ", async () => {
    mock.onGet("/next-api/?api=game&id=2").reply(200, {
      title: "Grand Theft Auto V",
      image_url: `${api.getUri()}/next-api/foto2.png`,
    });

    const { getByText, getByTestId } = render(<Game />);
    const button = getByText("Mudar Game");

    fireEvent.press(button);

    await waitFor(() => {
      expect(getByText("Grand Theft Auto V")).toBeTruthy();
      expect(getByTestId("avatar-game").props.source.uri).toBe(
        `${api.getUri()}/next-api/foto2.png`
      );
    });
  });

  it("should be able to render an error when api call fails after click on button", async () => {
    mock.onGet("/next-api/?api=game&id=2").networkError();
    const { findByText, getByText } = render(<Game />);
    const button = getByText("Mudar Game");
    fireEvent.press(button);
    const errorMessage = await findByText("Erro ao buscar dados");

    expect(errorMessage).toBeTruthy();
  });
});
