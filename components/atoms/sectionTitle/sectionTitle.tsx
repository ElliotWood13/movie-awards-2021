import { Title } from "./sectionTitle.styles";
import { SectionTitleProps } from "./types";

export const SectionTitle = ({ text }: SectionTitleProps) => {
  return <Title>{text}</Title>;
};
