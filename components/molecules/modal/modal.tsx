import React, { useEffect } from "react";
import { FocusOn } from "react-focus-on";
import { color } from "../../../design";
import {
  ModalOuterContainer,
  ModalInnerContainer,
  CloseButton,
  StyledSvg,
} from "./modal.styles";
import { ModalProps } from "./types";

export const Modal = ({ children, callback }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    if (window.screen.width >= 1024) {
      document.body.style.paddingRight = "15px";
    }

    return () => {
      document.body.style.overflow = "visible";
      document.body.style.paddingRight = "0px";
    };
  }, []);

  return (
    <FocusOn>
      <ModalOuterContainer id="dialog" role="dialog" aria-modal="true">
        <ModalInnerContainer>
          {children}
          <CloseButton
            aria-label="Close modal"
            type="button"
            onClick={() => callback()}
          >
            <StyledSvg type="close" fill={color.grey[900]} />
          </CloseButton>
        </ModalInnerContainer>
      </ModalOuterContainer>
    </FocusOn>
  );
};
