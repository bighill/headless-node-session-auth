import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("Renders Header component", () => {
  render(<Header />);
  const linkElement = screen.getByText(/node headless sample/i);
  expect(linkElement).toBeInTheDocument();
});
