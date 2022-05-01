import { Logo } from "../../atoms/logo";
import { HeaderContentWrapper, HeaderWrapper } from "./header.styles";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <Logo />
      </HeaderContentWrapper>
    </HeaderWrapper>
  );
};
