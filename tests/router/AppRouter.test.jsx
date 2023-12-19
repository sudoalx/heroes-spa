import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { AppRouter } from "../../src/router/AppRouter";

describe("Tests on AppRouter", () => {
  test("should show login if it is not authenticated", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText("Login")).toBeTruthy();
  });

  test("should show marvel if it is authenticated", () => {
    const contextValue = {
      logged: true,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Iron Man")).toBeTruthy();
    expect(screen.getByText("Spider Man")).toBeTruthy();
  });
});
