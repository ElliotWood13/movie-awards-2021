import React from "react";
import { color } from "../../../design";
import { SvgProps } from "../../../helpers/svgMapper";

export const Close = ({
  className,
  width = 24,
  height = 24,
  responsive = false,
  fill = color.grey[400],
}: SvgProps) => {
  const svgAttributes = responsive ? {} : { width, height };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...svgAttributes}
      fill="none"
      className={className}
    >
      <path d="M0 0h24v24H0V0z" />
      <path
        fill={fill}
        d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
      />
    </svg>
  );
};
