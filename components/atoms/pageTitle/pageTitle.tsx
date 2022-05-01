import { Title } from "./pageTitle.styles";

interface PageTitleProps {
  text: string;
}

export const PageTitle = ({ text }: PageTitleProps) => {
  return <Title>{text}</Title>;
};
