import { Legend } from "./sectionLegend.styles";
import { SectionLegendProps } from "./types";

export const SectionLegend = ({ text }: SectionLegendProps) => {
  return <Legend>{text}</Legend>;
};
