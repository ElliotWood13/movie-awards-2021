import styled from "styled-components";
import { color, fontWeight, pxToRem, shadow } from "../../../design";

const Primary = styled.button`
  border: 1px solid ${color.white[100]};
  border-radius: 4px;
  background-color: ${color.button.primary};
  color: ${color.white[100]};
  text-transform: capitalize;
  font-size: ${pxToRem(16)};
  font-weight: ${fontWeight.bold};
  padding: ${pxToRem(8)} ${pxToRem(16)};
  box-shadow: ${shadow.button};

  :hover {
    background-color: ${color.brandHover};
    transform: scale(1.03);
  }

  :active {
    transform: scale(1.01);
  }
`;

export { Primary };
