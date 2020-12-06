import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders App component", () => {
  render(<App />);
  const linkElement = screen.getByText(/headless node session auth/i);
  expect(linkElement).toBeInTheDocument();
});
