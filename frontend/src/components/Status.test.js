import { render, screen } from "@testing-library/react";
import Status from "./Status";

test("Renders Status component", () => {
  const isLoggedIn = false;
  const user = { _id: "test", email: "test" };

  render(<Status isLoggedIn={isLoggedIn} user={user} />);
  const linkElement = screen.getByText(/auth status/i);
  expect(linkElement).toBeInTheDocument();
});
