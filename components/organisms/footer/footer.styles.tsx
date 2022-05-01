import styled from "styled-components";
import { color, mediaQuery, pxToRem } from "../../../design";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: ${pxToRem(32)} ${pxToRem(20)};
  border-top: 1px solid ${color.grey[100]};
  background-color: ${color.pageBackground};

  ${mediaQuery.md} {
    padding: ${pxToRem(32)} ${pxToRem(32)};
  }
`;

const FooterText = styled.p`
  color: ${color.grey[200]};
`;

export { FooterWrapper, FooterText };
