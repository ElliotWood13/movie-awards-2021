import React from "react";
import { render } from "@testing-library/react";
import { SectionLegend } from "./sectionLegend";
import { SectionTitleProps } from "./types";

const sectionLegendProps: sectionLegendProps = {
  text: "Section title",
};

describe("sectionLegend", () => {
  it("should render the sectionLegend component correctly", () => {
    const { getByText } = render(<SectionLegend {...sectionLegendProps} />);

    const text = getByText("Section title");

    expect(text).toBeInTheDocument();
  });
});
