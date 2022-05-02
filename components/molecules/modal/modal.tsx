import React, { Dispatch, SetStateAction, useEffect } from "react";
import { FocusOn } from "react-focus-on";
import { color } from "../../../design";
import {
  ModalOuterContainer,
  ModalInnerContainer,
  CloseButton,
  StyledSvg,
} from "./modal.styles";

interface ModalProps {
  children: any;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ children, setModalOpen }: ModalProps): any => {
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
          <CloseButton type="button" onClick={() => setModalOpen(false)}>
            <StyledSvg type="close" fill={color.grey[900]} />
          </CloseButton>
        </ModalInnerContainer>
      </ModalOuterContainer>
    </FocusOn>
  );
};
