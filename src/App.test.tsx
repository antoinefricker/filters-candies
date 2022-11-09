import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen, userEvent } from "./utils/tests";

describe("Simple working test", () => {
  it("Basic display", () => {
    render(<App />);
    expect(screen.getByText(/Filters Candies/i)).toBeInTheDocument();
  });
});
