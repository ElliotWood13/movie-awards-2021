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
`;

const BallotCardWrapper = styled.div<BallotCardWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${pxToRem(24)};
  border: 1px solid ${color.grey[300]};
  border-radius: 4px;
  ${(props) =>
    props.isActiveNominee
      ? `background-color: ${color.brand}`
      : `background-color: ${color.grey[700]};`};
  box-shadow: ${shadow.card};

  :hover {
    background-color: ${color.brandHover};
    box-shadow: ${shadow.cardHover};
  }

  &:hover ${BallotCardTitle} {
    color: ${color.grey[200]};
  }
`;

const BallotImageWrapper = styled.div`
  margin-bottom: ${pxToRem(32)};
`;

const StyledImage = styled(Image)`
  border-radius: 4px;
`;

export { BallotCardTitle, BallotCardWrapper, BallotImageWrapper, StyledImage };
