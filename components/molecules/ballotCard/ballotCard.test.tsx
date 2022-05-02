import React from "react";
import { render } from "@testing-library/react";
import { BallotCardProps } from "./types";
import { BallotCard } from "./ballotCard";

const ballotCardProps: BallotCardProps = {
  id: "123",
  title: "Card title",
  photoUrL: "https://variety.com/wp-content/uploads/2020/12/Minari.jpg",
  isActiveNominee: false,
  setNomineeSelected: jest.fn(),
};

describe("ballot card", () => {
  it("should render the ballot card correctly", () => {
    const { getByText, getByRole, getByAltText, getByLabelText } = render(
      <BallotCard {...ballotCardProps} />
    );
    const title = getByText("Card title");
    const imageAlt = getByAltText("A film poster of Card title");
    const button = getByRole("button", { name: "Nominate Card title" });
    const buttonAriaLabl = getByLabelText("Nominate Card title");

    expect(title).toBeInTheDocument();
    expect(imageAlt).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(buttonAriaLabl).toBeInTheDocument();
  });
});
