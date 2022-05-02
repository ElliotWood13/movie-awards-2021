import styled from "styled-components";
import { color, pxToRem } from "../../../design";

const ErrorMessageWrapper = styled.div`
  padding: ${pxToRem(24)} ${pxToRem(32)};
  width: fit-content;
  border-radius: 4px;
  margin: ${pxToRem(24)} auto;
  background-color: ${color.red[100]};
  border: 1px solid ${color.red[200]};
`;

const ErrorMessageText = styled.p`
  color: ${color.red[200]};
`;

export { ErrorMessageWrapper, ErrorMessageText };
