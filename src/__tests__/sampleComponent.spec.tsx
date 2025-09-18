import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("render App component", async () => {
  render(<App />);

  const title = screen.getByRole("heading", { name: "デジタル名刺アプリ" });
  expect(title).toBeInTheDocument();

  expect(title).toHaveTextContent("デジタル名刺アプリ");
});
