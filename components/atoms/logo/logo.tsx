import { color } from "../../../design";
import { LogoText, StyledSvg, SvgWrapper } from "./logo.styles";

export const Logo = () => {
  return (
    <LogoText translate="no">
      <SvgWrapper>
        <StyledSvg type="movie" fill={color.body} />
      </SvgWrapper>
      The Movie Awards
    </LogoText>
  );
};
