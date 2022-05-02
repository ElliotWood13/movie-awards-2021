import React from "react";
import { render } from "@testing-library/react";
import { PageHeader } from "./pageHeader";
import { PageHeaderProps } from "./types";

const pageHeaderProps: PageHeaderProps = {
  title: "Page header title",
};

describe("pageHeader", () => {
  it("should render the pageHeader component correctly", () => {
    const { getByText } = render(<PageHeader {...pageHeaderProps} />);

    const text = getByText("Page header title");

    expect(text).toBeInTheDocument();
  });
});
