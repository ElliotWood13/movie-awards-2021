import { Close } from "../components/atoms/icons";
import { Burger } from "../components/atoms/icons";
import { Movie } from "../components/atoms/icons/movie";

// Icons: https://fontawesome.com/search?s=brands%2Csolid
// Optimiser: https://jakearchibald.github.io/svgomg/

export interface SvgProps {
  height?: number;
  width?: number;
  responsive?: boolean;
  fill?: string;
  className?: string;
}

interface SvgMapperProps {
  type: string;
}

interface SvgCatalogue {
  [key: string]: any;
}

const svgs: SvgCatalogue = {
  close: Close,
  burger: Burger,
  movie: Movie,
};

const Svg = ({ type, ...rest }: SvgMapperProps) => {
  if (type) {
    const Component = svgs[type];
    if (Component) return <Component {...rest} />;
  }
  return null;
};

export default Svg;
