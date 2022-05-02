import React from "react";
import { render } from "@testing-library/react";
import { Header } from "./header";

describe("header", () => {
  it("should render the header component correctly", () => {
    const { getByText } = render(<Header />);

    const text = getByText("The Movie Awards");

    expect(text).toBeInTheDocument();
  });
});
