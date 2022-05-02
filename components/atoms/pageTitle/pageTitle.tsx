import { Title } from "./pageTitle.styles";
import { PageTitleProps } from "./types";

export const PageTitle = ({ text }: PageTitleProps) => {
  return <Title>{text}</Title>;
};
