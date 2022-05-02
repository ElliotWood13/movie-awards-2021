import { color } from "../design";

export const onSetSectionBackgroundColor = (index: number): string =>
  index % 2 ? `${color.pageBackgroundAlternative}` : `${color.pageBackground}`;
