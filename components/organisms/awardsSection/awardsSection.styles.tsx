import styled from "styled-components";
import { color, layout, mediaQuery, pxToRem } from "../../../design";

const SectionWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: ${pxToRem(30)} ${pxToRem(20)};

  ${mediaQuery.sm} {
    padding: ${pxToRem(60)} ${pxToRem(20)};
  }
`;

const SectionPosition = styled.div`
  width: 100%;
  max-width: ${layout.regular};
  margin: 0 auto;
`;

const SectionTitleWrapper = styled.div`
  margin-bottom: ${pxToRem(24)};

  ${mediaQuery.md} {
    margin-bottom: ${pxToRem(40)};
  }
`;

const BallotCardWrapper = styled.div`
  display: grid;
  gap: ${pxToRem(16)};

  ${mediaQuery.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQuery.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SubmissionSuccessMessage = styled.p`
  font-size: ${pxToRem(18)};
  text-align: center;
`;

export {
  SectionWrapper,
  SectionPosition,
  SectionTitleWrapper,
  BallotCardWrapper,
  SubmissionSuccessMessage,
};
