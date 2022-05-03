import styled from "styled-components";
import { color, mediaQuery, pxToRem } from "../../../../../design";

const SubmitNominationsWrapper = styled.footer`
  position: sticky;
  bottom: 0;
  z-index: 10;
  width: 100%;
  background-color: ${color.pageBackground};
  border-top: 1px solid ${color.grey[300]};

  ${mediaQuery.md} {
    position: static;
    border: none;
    padding-bottom: ${pxToRem(60)};
  }
`;

const SubmitNominationsContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${pxToRem(20)} ${pxToRem(20)};
`;

export { SubmitNominationsWrapper, SubmitNominationsContentWrapper };
