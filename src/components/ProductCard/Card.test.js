import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card"

describe("card tests", () => {
  const product = []
  const handleSelect = ()=> null
  it("renders a card", () => {
    expect.assertions(1);
    render(<Card product={product} handleSelect={handleSelect}/>);
    const container = screen.getByRole("productCard");
    expect(container).toBeInTheDocument();
  });
});


