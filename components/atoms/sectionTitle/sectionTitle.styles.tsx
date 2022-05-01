import styled from "styled-components";
import { color, pxToRem } from "../../../design";

const Title = styled.h2`
  font-size: ${pxToRem(32)};
  color: ${color.body};
`;

export { Title };
