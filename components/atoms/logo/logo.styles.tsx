import styled from "styled-components";
import { color, fontWeight, mediaQuery, pxToRem } from "../../../design";
import Svg, { SvgProps } from "../../../helpers/svgMapper";

const LogoText = styled.p`
  display: flex;
  align-items: center;
  font-size: ${pxToRem(24)};
  font-weight: ${fontWeight.bold};
  color: ${color.body};
`;

const SvgWrapper = styled.span`
  margin-right: ${pxToRem(12)};
`;

const StyledSvg = styled(Svg)<SvgProps>`
  height: ${pxToRem(18)};
  width: ${pxToRem(18)};

  ${mediaQuery.sm} {
    height: ${pxToRem(24)};
    width: ${pxToRem(24)};
  }
`;

export { LogoText, SvgWrapper, StyledSvg };
