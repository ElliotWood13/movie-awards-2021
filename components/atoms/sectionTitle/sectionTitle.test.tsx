import React from "react";
import { render } from "@testing-library/react";
import { SectionTitle } from "./sectionTitle";
import { SectionTitleProps } from "./types";

const sectionTitleProps: SectionTitleProps = {
  text: "Section title",
};

describe("sectionTitle", () => {
  it("should render the sectionTitle component correctly", () => {
    const { getByText } = render(<SectionTitle {...sectionTitleProps} />);

    const text = getByText("Section title");

    expect(text).toBeInTheDocument();
  });
});
