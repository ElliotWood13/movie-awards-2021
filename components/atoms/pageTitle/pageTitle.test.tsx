import React from "react";
import { render } from "@testing-library/react";
import { PageTitle } from "./pageTitle";
import { PageTitleProps } from "./types";

const pageTitleProps: PageTitleProps = {
  text: "Page title",
};

describe("pageTitle", () => {
  it("should render the pageTitle component correctly", () => {
    const { getByText } = render(<PageTitle {...pageTitleProps} />);

    const text = getByText("Page title");

    expect(text).toBeInTheDocument();
  });
});
