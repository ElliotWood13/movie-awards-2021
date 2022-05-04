import {
  BallotCardWrapper,
  BallotImageWrapper,
  StyledImage,
  BallotLabel,
  BallotLabelText,
  BallotRadioInput,
  BallotInputWrapper,
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
      <BallotLabel htmlFor={`${ballotTitle}: ${title}`}>{title}</BallotLabel>
      <BallotImageWrapper>
        <StyledImage
          src={photoUrL}
          alt={`A film poster of ${title}`}
          width="300px"
          height="350px"
          loading="eager"
        />
      </BallotImageWrapper>

      <BallotInputWrapper onClick={() => setNomineeSelected(title)}>
        <BallotLabelText>Nominate</BallotLabelText>
        <BallotRadioInput
          type="radio"
          name={ballotTitle}
          id={`${ballotTitle}: ${title}`}
          checked={isActiveNominee}
          aria-checked={isActiveNominee ? "true" : "false"}
          value={`${ballotTitle}: ${title}`}
          onChange={() => setNomineeSelected(title)}
        />
      </BallotInputWrapper>
    </BallotCardWrapper>
  );
};
