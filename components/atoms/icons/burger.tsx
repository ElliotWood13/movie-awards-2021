import React from "react";
import { color } from "../../../design";
import { SvgProps } from "../../../helpers/svgMapper";

export const Burger = ({
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
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill={fill} />
    </svg>
  );
};
