import Image from "next/image";
import styled from "styled-components";
import { color, fontWeight, pxToRem, shadow } from "../../../../../design";

interface BallotCardWrapperProps {
  isActiveNominee: boolean;
}

const BallotCardTitle = styled.p`
  flex-grow: 1;
  margin-bottom: ${pxToRem(24)};
  text-align: center;
  font-size: ${pxToRem(24)};
  font-weight: ${fontWeight.bold};
  color: ${color.body};
`;

const StyledImage = styled(Image)`
  border-radius: 4px;
`;

const BallotCardWrapper = styled.div<BallotCardWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${pxToRem(24)};
  border: 1px solid ${color.grey[300]};
  border-radius: 4px;
  background-color: ${color.grey[900]};
  ${(props) =>
    props.isActiveNominee
      ? `background-color: ${color.brand}`
      : `background-color: ${color.grey[700]};`};
  box-shadow: ${shadow.card};

  @media (hover: hover) and (pointer: fine) {
    :hover {
      background-color: ${color.brandHover};
      box-shadow: ${shadow.cardHover};
    }

    &:hover ${BallotCardTitle} {
      color: ${color.grey[200]};
    }

    &:hover ${StyledImage} {
      transition: 0.2s ease-in-out;
      transform: scale(1.02);
    }
  }
`;

const BallotImageWrapper = styled.div`
  margin-bottom: ${pxToRem(32)};
`;

const BallotLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid ${color.white[100]};
  border-radius: 4px;
  background-color: ${color.button.secondary};
  color: ${color.white[100]};
  text-transform: capitalize;
  font-size: ${pxToRem(16)};
  font-weight: ${fontWeight.bold};
  padding: ${pxToRem(8)} ${pxToRem(16)};
  box-shadow: ${shadow.button};

  :hover {
    color: ${color.body};
    transform: scale(1.03);
  }

  :active {
    transform: scale(1.01);
  }
`;

const BallotLabelText = styled.span`
  font-size: ${pxToRem(18)};
  margin-right: ${pxToRem(16)};
`;

const BallotRadioInput = styled.input`
  cursor: pointer;
`;

export {
  BallotCardTitle,
  BallotCardWrapper,
  BallotImageWrapper,
  StyledImage,
  BallotLabel,
  BallotLabelText,
  BallotRadioInput,
};
