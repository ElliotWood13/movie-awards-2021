import { Primary } from "./button.styles";
import { ButtonProps } from "./types";

export const PrimaryButton = ({
  text,
  onClick,
  buttonType = "button",
  disabled = false,
  ariaLabel,
}: ButtonProps) => {
  return (
    <Primary
      type={buttonType}
      disabled={disabled}
      arira-disabled={disabled ? "true" : "false"}
      aria-label={ariaLabel}
      onClick={() => onClick?.()}
    >
      {text}
    </Primary>
  );
};
