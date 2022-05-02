import React from "react";
import { render } from "@testing-library/react";
import { Footer } from "./footer";

describe("footer", () => {
  it("should render the footer component correctly", () => {
    const { getByText } = render(<Footer />);

    const text = getByText("© The Movie Awards 2022");

    expect(text).toBeInTheDocument();
  });
});
