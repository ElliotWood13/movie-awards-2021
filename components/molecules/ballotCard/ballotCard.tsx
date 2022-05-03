import { SecondaryButton } from "../../atoms/button";
import {
  BallotCardTitle,
  BallotCardWrapper,
  BallotImageWrapper,
  StyledImage,
  BallotLabel,
  BallotLabelText,
  BallotRadioInput,
} from "./ballotCard.styles";
import { BallotCardProps } from "./types";

export const BallotCard = ({
  title,
  photoUrL,
  ballotTitle,
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

      <BallotLabel
        htmlFor={ballotTitle}
        onClick={() => setNomineeSelected(title)}
      >
        <BallotLabelText>Nominate</BallotLabelText>
        <BallotRadioInput
          type="radio"
          name={ballotTitle}
          id={`${ballotTitle}-${title}`}
          checked={isActiveNominee}
          aria-checked={isActiveNominee ? "true" : "false"}
          value={`${ballotTitle}: ${title}`}
          onChange={() => setNomineeSelected(title)}
        />
      </BallotLabel>
    </BallotCardWrapper>
  );
};
