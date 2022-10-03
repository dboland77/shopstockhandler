import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CardContainer} from "./CardContainer"

describe("card container tests", () => {
  it("renders a card container", () => {
    expect.assertions(1);
    render(<CardContainer/>)
    const container = screen.getByRole("cardContainer");
    expect(container).toBeInTheDocument();
  });
});
