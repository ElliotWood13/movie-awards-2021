import styled from "styled-components";
import { layout, mediaQuery, pxToRem } from "../../../design";
import { gradient } from "../../../design/design";

const PageHeaderWrapper = styled.div`
  background: ${gradient.purple};
  padding: ${pxToRem(75)} ${pxToRem(8)};

  ${mediaQuery.sm} {
    padding: ${pxToRem(100)} ${pxToRem(16)};
  }

  ${mediaQuery.md} {
    padding: ${pxToRem(120)} ${pxToRem(16)};
  }
`;

const PageHeaderContent = styled.div`
  max-width: ${layout.regular};
  margin: 0 auto;
`;

export { PageHeaderWrapper, PageHeaderContent };
