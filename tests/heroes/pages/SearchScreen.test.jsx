import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../../src/heroes/pages/SearchScreen";

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
});
