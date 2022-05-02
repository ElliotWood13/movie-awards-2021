import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { ButtonProps } from "./types";
import { PrimaryButton } from "./button";

const buttonProps: ButtonProps = {
  text: "test button",
  onClick: () => jest.fn(),
};

describe("button", () => {
  it("should render the button correctly", () => {
    const { getByRole } = render(<PrimaryButton {...buttonProps} />);
    const button = getByRole("button", { name: "test button" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("test button");
  });

  it("should call onClick when the button is clicked", () => {
    const clickFunc = jest.fn();
    const { getByRole } = render(
      <PrimaryButton {...buttonProps} onClick={clickFunc} />
    );

    const button = getByRole("button", { name: "test button" });
    fireEvent.click(button);

    expect(clickFunc).toHaveBeenCalled();
    expect(clickFunc).toHaveBeenCalledTimes(1);
  });

  it("should disable the button when the disable prop is true", () => {
    const clickFunc = jest.fn();
    const { getByRole } = render(
      <PrimaryButton {...buttonProps} disabled={true} />
    );
    const button = getByRole("button", { name: "test button" });
    fireEvent.click(button);

    expect(clickFunc).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });
});
