import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders App component", () => {
  render(<App />);
  const linkElement = screen.getByText(/node headless/i);
  expect(linkElement).toBeInTheDocument();
});
