import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchScreen } from "../../../src/heroes/pages/SearchScreen";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("tests on search screen", () => {
  test("should render search screen", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchScreen />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("should show batman and inputbox with querystring value", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchScreen />
      </MemoryRouter>
    );
    const inputBox = screen.getByRole("textbox");
    expect(inputBox.value).toBe("batman");
    const imgTag = screen.getByRole("img");
    expect(imgTag.src).toContain("/assets/heroes/dc-batman.jpg");
  });

  test("should show an error if the hero is not found: batman!2", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman!2"]}>
        <SearchScreen />
      </MemoryRouter>
    );
    const inputBox = screen.getByRole("textbox");
    expect(inputBox.value).toBe("batman!2");
    const notFound = screen.getByLabelText("not-found");
    expect(notFound).toBeTruthy();
  });

  test("should call navigate to the new screen", () => {
    const inputValue = "iron man";
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchScreen />
      </MemoryRouter>
    );
    const inputBox = screen.getByRole("textbox");
    fireEvent.change(inputBox, { target: { value: inputValue } });
    fireEvent.submit(inputBox);
    expect(mockNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
  });
});
