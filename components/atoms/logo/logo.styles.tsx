import styled from "styled-components";
import { color, fontWeight, pxToRem } from "../../../design";

const LogoText = styled.p`
  font-size: ${pxToRem(18)};
  font-weight: ${fontWeight.bold};
  color: ${color.body};
`;

export { LogoText };
