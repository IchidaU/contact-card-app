import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("render App component", async () => {
  render(<App />);

  const h1 = screen.getByRole("heading");
  expect(h1).toHaveTextContent("Vite + React");
});
