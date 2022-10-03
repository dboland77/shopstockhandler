import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DeleteButton } from "./DeleteButton";

describe("button tests", () => {
  it("renders a button", () => {
    expect.assertions(1);
    render(<DeleteButton />);
    const primaryButton = screen.getByRole("button");
    expect(primaryButton).toBeEnabled();
  });
});
