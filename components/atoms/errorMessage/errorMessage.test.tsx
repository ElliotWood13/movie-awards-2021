import React from "react";
import { render } from "@testing-library/react";
import { ErrorMessage } from "./errorMessage";
import { ErrorMessageProps } from "./types";

const errorMessageProps: ErrorMessageProps = {
  text: "Error",
};

describe("errorMessage", () => {
  it("should render the errorMessage component correctly", () => {
    const { getByText } = render(<ErrorMessage {...errorMessageProps} />);

    const text = getByText("Error");

    expect(text).toBeInTheDocument();
  });
});
