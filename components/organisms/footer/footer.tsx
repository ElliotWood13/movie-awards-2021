import React from "react";
import { getYear } from "../../../helpers";
import { FooterWrapper, FooterText } from "./footer.styles";

export const Footer = () => {
  const year = getYear();
  return (
    <FooterWrapper>
      <FooterText>© The Movie Awards {year}</FooterText>
    </FooterWrapper>
  );
};
