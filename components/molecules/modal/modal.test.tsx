import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Modal } from "./modal";
import { ModalProps } from "./types";

const modalProps: ModalProps = {
  children: <p>Modal child</p>,
  callback: jest.fn(),
};

describe("modal", () => {
  it("should render the modal component correctly", () => {
    const { getByText, getByRole } = render(<Modal {...modalProps} />);

    const child = getByText("Modal child");
    const closeButton = getByRole("button", { name: "Close modal" });

    expect(child).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });

  it("should call setModalOpen when the close button is clicked", () => {
    const callback = jest.fn();
    const { getByRole } = render(<Modal {...modalProps} callback={callback} />);

    const closeButton = getByRole("button", { name: "Close modal" });
    fireEvent.click(closeButton);

    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
