import { Dispatch, SetStateAction } from "react";
import { SecondaryButton } from "../../atoms/button";
import { Nominee } from "../../organisms/ballotCardList/types";
import {
  BallotCardTitle,
  BallotCardWrapper,
  BallotImageWrapper,
  StyledImage,
} from "./ballotCard.styles";

interface BallotCardProps extends Nominee {
  isActiveNominee: boolean;
  setNomineeSelected: Dispatch<SetStateAction<string>>;
}

export const BallotCard = ({
  title,
  photoUrL,
  isActiveNominee,
  setNomineeSelected,
}: BallotCardProps) => {
  return (
    <BallotCardWrapper isActiveNominee={isActiveNominee}>
      <BallotCardTitle>{title}</BallotCardTitle>
      <BallotImageWrapper>
        <StyledImage
          src={photoUrL}
          alt={`A picture of ${title}`}
          width="300px"
          height="350px"
          loading="eager"
        />
      </BallotImageWrapper>
      <SecondaryButton
        text="Nominate"
        onClick={() => setNomineeSelected(title)}
      />
    </BallotCardWrapper>
  );
};
