import React from "react";
import { render } from "@testing-library/react";
import { Logo } from "./logo";

describe("logo", () => {
  it("should render the logo component correctly", () => {
    const { getByText } = render(<Logo />);

    const text = getByText("The Movie Awards");

    expect(text).toBeInTheDocument();
  });
});
