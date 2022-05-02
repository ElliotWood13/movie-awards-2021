import { Primary, Secondary } from "./button.styles";
import { ButtonProps } from "./types";

export const PrimaryButton = ({
  text,
  onClick,
  buttonType = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <Primary
      type={buttonType}
      disabled={disabled}
      arira-disabled={disabled ? "true" : "false"}
      onClick={() => onClick()}
    >
      {text}
    </Primary>
  );
};

export const SecondaryButton = ({
  text,
  onClick,
  buttonType = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <Secondary
      type={buttonType}
      disabled={disabled}
      arira-disabled={disabled ? "true" : "false"}
      onClick={() => onClick()}
    >
      {text}
    </Secondary>
  );
};
