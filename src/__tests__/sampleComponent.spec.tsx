import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("render App component", async () => {
  render(<App />);

  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(2);

  expect(buttons[0]).toHaveTextContent("1");
  expect(buttons[1]).toHaveTextContent("2");
});
