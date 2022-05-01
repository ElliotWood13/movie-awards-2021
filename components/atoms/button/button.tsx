import { Primary, Secondary } from "./button.styles";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const PrimaryButton = ({ text, onClick }: ButtonProps) => {
  return <Primary onClick={() => onClick()}>{text}</Primary>;
};

export const SecondaryButton = ({ text, onClick }: ButtonProps) => {
  return <Secondary onClick={() => onClick()}>{text}</Secondary>;
};
