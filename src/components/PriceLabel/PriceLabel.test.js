import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PriceLabel} from "./PriceLabel"

describe("price label tests", () => {
  it("renders a price label", () => {
    expect.assertions(1);
    render(<PriceLabel curentPrice="5" previousPrice="6" promotionBadge="TESTPROM"/>)
    const container = screen.getByRole("pricelabelcontainer");
    expect(container).toBeInTheDocument();
  });
});
