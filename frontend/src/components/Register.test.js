import { render, screen } from "@testing-library/react";
import Register from "./Register";

test("Renders Register component", () => {
  render(<Register />);
  const linkElement = screen.getByText(/register new user/i);
  expect(linkElement).toBeInTheDocument();
});
