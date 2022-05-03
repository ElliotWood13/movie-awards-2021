import React, { useState } from "react";
import { SectionLegend } from "../../atoms/sectionLegend";
import { BallotCard } from "../../molecules/ballotCard/ballotCard";
import {
  SectionFieldset,
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
    <SectionFieldset backgroundColor={backgroundColor}>
      <SectionPosition>
        <SectionTitleWrapper>
          <SectionLegend text={ballotTitle} />
        </SectionTitleWrapper>
        <BallotCardWrapper>
          {nominees.map((nominee: Nominee) => (
            <BallotCard
              key={nominee.id}
              ballotTitle={ballotTitle}
              isActiveNominee={nomineeSelected === nominee.title}
              setNomineeSelected={setNomineeSelected}
              {...nominee}
            />
          ))}
        </BallotCardWrapper>
      </SectionPosition>
    </SectionFieldset>
  );
};
