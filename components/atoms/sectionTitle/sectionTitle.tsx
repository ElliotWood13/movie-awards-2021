import { Title } from "./sectionTitle.styles";

interface SectionTitleProps {
  text: string;
}

export const SectionTitle = ({ text }: SectionTitleProps) => {
  return <Title>{text}</Title>;
};
