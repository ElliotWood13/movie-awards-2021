import React from "react";
import { render } from "@testing-library/react";
import { Layout } from "./layout";

const layoutProps = {
  children: <p>Layout children</p>,
};

describe("layout", () => {
  it("should render the layout component correctly", () => {
    const { getByText } = render(<Layout {...layoutProps} />);

    const child = getByText("Layout children");
    const header = getByText("The Movie Awards");
    const footer = getByText("© The Movie Awards 2022");

    expect(child).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
