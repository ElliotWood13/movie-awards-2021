import React from "react";
import { render } from "@testing-library/react";
import { BallotCardList } from "./ballotCardList";
import { BallotCardListProps } from "./types";

const ballotCardListProps: BallotCardListProps = {
  ballotTitle: "Ballot title",
  nominees: [
    {
      title: "Lee Isaac Chung for Minari",
      photoUrL: "https://variety.com/wp-content/uploads/2020/12/Minari.jpg",
      id: "lee-isaac-chung",
    },
  ],
  backgroundColor: "#fff",
};

describe("ballot card list", () => {
  it("should render the ballot card list correctly", () => {
    const { getByText } = render(<BallotCardList {...ballotCardListProps} />);
    const ballotTitle = getByText("Ballot title");
    const ballotCardTitle = getByText("Lee Isaac Chung for Minari");

    expect(ballotTitle).toBeInTheDocument();
    expect(ballotCardTitle).toBeInTheDocument();
  });
});
