import React, { useState } from "react";
import { SectionTitle } from "../../atoms/sectionTitle";
import { BallotCard } from "../../molecules/ballotCard/ballotCard";
import {
  SectionWrapper,
  SectionPosition,
  SectionTitleWrapper,
  BallotCardWrapper,
} from "./ballotCardList.styles";
import { BallotCardListProps, Nominee } from "./types";

export const BallotCardList = ({
  ballotTitle,
  nominees,
  backgroundColor,
}: BallotCardListProps) => {
  const [nomineeSelected, setNomineeSelected] = useState("");

  return (
    <SectionWrapper backgroundColor={backgroundColor}>
      <SectionPosition>
        <SectionTitleWrapper>
          <SectionTitle text={ballotTitle} />
        </SectionTitleWrapper>
        <BallotCardWrapper>
          {nominees.map((nominee: Nominee) => (
            <BallotCard
              key={nominee.id}
              isActiveNominee={nomineeSelected === nominee.title}
              setNomineeSelected={setNomineeSelected}
              {...nominee}
            />
          ))}
        </BallotCardWrapper>
      </SectionPosition>
    </SectionWrapper>
  );
};
