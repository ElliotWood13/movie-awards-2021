import { SecondaryButton } from "../../atoms/button";
import {
  BallotCardTitle,
  BallotCardWrapper,
  BallotImageWrapper,
  StyledImage,
} from "./ballotCard.styles";
import { BallotCardProps } from "./types";

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
          alt={`A film poster of ${title}`}
          width="300px"
          height="350px"
          loading="eager"
        />
      </BallotImageWrapper>
      <SecondaryButton
        ariaLabel={`Nominate ${title}`}
        text="Nominate"
        onClick={() => setNomineeSelected(title)}
      />
    </BallotCardWrapper>
  );
};
