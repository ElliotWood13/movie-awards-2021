import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { ButtonProps } from "./types";
import { PrimaryButton } from "./button";

const buttonProps: ButtonProps = {
  text: "test button",
  onClick: () => jest.fn(),
};

describe("button", () => {
  it("should render the <PrimaryButton /> correctly", () => {
    const { getByText } = render(<PrimaryButton {...buttonProps} />);
    const buttonText = getByText("test button");

    expect(buttonText).toBeInTheDocument();
  });

  it("should call onClick when the button is clicked", () => {
    const clickFunc = jest.fn();
    const { getByText } = render(
      <PrimaryButton {...buttonProps} onClick={clickFunc} />
    );

    const button = getByText("test button");
    fireEvent.click(button);

    expect(clickFunc).toHaveBeenCalled();
    expect(clickFunc).toHaveBeenCalledTimes(1);
  });
});
