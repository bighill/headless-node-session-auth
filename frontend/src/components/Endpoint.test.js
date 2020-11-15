import { render, screen } from "@testing-library/react";
import Endpoint from "./Endpoint";

test("Renders Endpoint component", () => {
  render(<Endpoint />);
  const linkElement = screen.getByText(/test api endpoint/i);
  expect(linkElement).toBeInTheDocument();
});
