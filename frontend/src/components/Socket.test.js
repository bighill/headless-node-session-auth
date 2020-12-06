import { render, screen } from "@testing-library/react";
import Socket from "./Socket";

test("Renders Socket component", () => {
  render(<Socket />);
  const linkElement = screen.getByText(/test socket connection/i);
  expect(linkElement).toBeInTheDocument();
});
