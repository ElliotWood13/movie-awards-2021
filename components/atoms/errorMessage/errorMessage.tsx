import { ErrorMessageWrapper, ErrorMessageText } from "./errorMessage.styles";
import { ErrorMessageProps } from "./types";

export const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return (
    <ErrorMessageWrapper role="alert">
      <ErrorMessageText>{text}</ErrorMessageText>
    </ErrorMessageWrapper>
  );
};
