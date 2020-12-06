import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("Renders Header component", () => {
  render(<Header />);
  const linkElement = screen.getByText(/headless node session auth/i);
  expect(linkElement).toBeInTheDocument();
});
