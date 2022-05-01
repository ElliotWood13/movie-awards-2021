import styled from "styled-components";
import { color, pxToRem } from "../../../design";

const Title = styled.h1`
  font-size: ${pxToRem(48)};
  text-transform: capitalize;
  text-align: center;
  color: ${color.body};
`;

export { Title };
