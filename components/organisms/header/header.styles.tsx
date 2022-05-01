import styled from "styled-components";
import { pxToRem, color, mediaQuery, layout } from "../../../design";

const HeaderWrapper = styled.header`
  width: 100%;
  z-index: 10;
  background-color: ${color.pageBackground};
`;

const HeaderContentWrapper = styled.div`
  padding: ${pxToRem(32)} ${pxToRem(20)};

  ${mediaQuery.lg} {
    padding: ${pxToRem(32)} 0;
    width: ${layout.regular};
    max-width: ${layout.regular};
    margin: 0 auto;
  }
`;

export { HeaderWrapper, HeaderContentWrapper };
