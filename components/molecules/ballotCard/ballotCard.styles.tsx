import Image from "next/image";
import styled from "styled-components";
import { color, fontWeight, pxToRem, shadow } from "../../../design/design";

interface BallotCardWrapperProps {
  isActiveNominee: boolean;
}

const BallotCardTitle = styled.p`
  text-align: center;
  font-size: ${pxToRem(24)};
  font-weight: ${fontWeight.bold};
  margin-bottom: ${pxToRem(24)};
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

export { BallotCardTitle, BallotCardWrapper, BallotImageWrapper, StyledImage };
