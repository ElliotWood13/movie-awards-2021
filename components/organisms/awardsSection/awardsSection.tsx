import React, { useState } from "react";
import { PrimaryButton } from "../../atoms/button";
import { SectionTitle } from "../../atoms/sectionTitle";
import { BallotCard } from "../../molecules/ballotCard/ballotCard";
import {
  SectionWrapper,
  SectionPosition,
  SectionTitleWrapper,
  BallotCardWrapper,
} from "./awardsSection.styles";
import { AwardsSectionProps, Nominee } from "./types";

export const AwardsSection = ({
  ballotTitle,
  nominees,
}: AwardsSectionProps) => {
  const [nomineeSelected, setNomineeSelected] = useState("");

  return (
    <SectionWrapper>
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
