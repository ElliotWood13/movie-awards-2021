type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
  text: string;
  onClick: () => void;
  buttonType?: ButtonType;
  disabled?: boolean;
}
