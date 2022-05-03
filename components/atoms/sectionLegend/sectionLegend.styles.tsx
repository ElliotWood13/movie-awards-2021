import styled from "styled-components";
import { color, fontWeight, pxToRem } from "../../../design";

const Legend = styled.legend`
  font-size: ${pxToRem(32)};
  font-weight: ${fontWeight.bold};
  color: ${color.body};
`;

export { Legend };
