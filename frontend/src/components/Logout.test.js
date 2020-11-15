import { render, screen } from "@testing-library/react";
import Logout from "./Logout";

test("Renders Logout component", () => {
  render(<Logout />);
  const linkElement = screen.getByText(/user logout/i);
  expect(linkElement).toBeInTheDocument();
});
