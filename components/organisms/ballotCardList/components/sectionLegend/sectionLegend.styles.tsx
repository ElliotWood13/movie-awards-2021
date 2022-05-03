import styled from "styled-components";
import { color, fontWeight, pxToRem, fontFamily } from "../../../../../design";

const Legend = styled.legend`
  font-family: ${fontFamily.brand};
  font-size: ${pxToRem(32)};
  font-weight: ${fontWeight.bold};
  color: ${color.body};
`;

export { Legend };
