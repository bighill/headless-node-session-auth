import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("Renders Login component", () => {
  render(<Login />);
  const linkElement = screen.getByText(/user login/i);
  expect(linkElement).toBeInTheDocument();
});
