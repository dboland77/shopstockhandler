import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { StockLabel} from "./StockLabel"

describe("stock label tests", () => {
  it("renders a stock label", () => {
    expect.assertions(1);
    render(<StockLabel available='YUP' quantity={123} lowonStock='NOPE'/>)
    const container = screen.getByRole("stocklabelcontainer");
    expect(container).toBeInTheDocument();
  });
});
