import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe("Tests on Private route", () => {
  test("should show children if it is authenticated", () => {
    Storage.prototype.setItem = jest.fn();
    const contextValue = {
      logged: true,
      user: {
        name: "Alex",
        id: "1234",
      },
    };
    render(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <PrivateRoute>
            <h1>Private Route</h1>
          </PrivateRoute>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Private Route")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/");
  });
});
