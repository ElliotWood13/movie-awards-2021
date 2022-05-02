import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { SubmitNominations } from "./SubmitNominations";
import { SubmitNominationsProps } from "./types";

const submitNominationsProps: SubmitNominationsProps = {
  setOpenSubmissionModal: jest.fn(),
};

describe("submitNominations", () => {
  it("should render the submitNominations component correctly", () => {
    const { getByRole } = render(
      <SubmitNominations {...submitNominationsProps} />
    );

    const button = getByRole("button", {
      name: "Submit your selected nominations",
    });

    expect(button).toBeInTheDocument();
  });

  it("should call setOpenSubmissionModal when the button is clicked", () => {
    const setOpenSubmissionModal = jest.fn();
    const { getByRole } = render(
      <SubmitNominations
        {...submitNominationsProps}
        setOpenSubmissionModal={setOpenSubmissionModal}
      />
    );

    const button = getByRole("button", {
      name: "Submit your selected nominations",
    });

    fireEvent.click(button);

    expect(setOpenSubmissionModal).toHaveBeenCalled();
    expect(setOpenSubmissionModal).toHaveBeenCalledTimes(1);
  });
});
