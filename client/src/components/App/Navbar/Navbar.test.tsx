import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { NavBar } from "./Navbar";

describe("NavBar", () => {
  const history = createMemoryHistory();
  test("renders Tabmenu komponent", () => {
    render(<NavBar />, { wrapper: MemoryRouter });
    const ulElement = screen.getByRole("tablist");
    expect(ulElement).toBeInTheDocument();
  });
  test("calls redirect after some menu element click", () => {
    history.push = jest.fn();
    render(
      <Router history={history}>
        <NavBar />
      </Router>,
    );
    const spanElement = screen.getByText(/Schedule/);
    fireEvent.click(spanElement);
    expect(history.push).toHaveBeenCalled();
  });
  test("sets the active element by pathname", () => {
    history.location.pathname = "/schedule";
    render(
      <Router history={history}>
        <NavBar />
      </Router>,
    );
    const liElement = screen.getByRole("tab", { selected: true });
    expect(liElement).toHaveTextContent("Schedule");
  });
});
