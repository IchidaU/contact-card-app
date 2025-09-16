import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

jest.mock("@supabase/supabase-js", () => ({
  createClient: jest.fn(() => ({
    from: jest.fn().mockReturnThis(),
    select: jest.fn().mockResolvedValue({ data: [], error: null }),
    insert: jest.fn().mockResolvedValue({ error: null }),
    delete: jest.fn().mockResolvedValue({ data: [], error: null }),
    eq: jest.fn().mockReturnThis(),
  })),
}));

test("render App component", async () => {
  render(<App />);

  const title = screen.getByRole("heading", { name: "デジタル名刺アプリ" });
  expect(title).toBeInTheDocument();

  expect(title).toHaveTextContent("デジタル名刺アプリ");
});
