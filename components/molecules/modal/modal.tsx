import FocusTrap from "focus-trap-react";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import {
  ModalOuterContainer,
  ModalInnerContainer,
  CloseButton,
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
    <FocusTrap>
      <ModalOuterContainer
        id="dialog"
        role="dialog"
        aria-modal="true"
        onClick={() => setModalOpen(false)}
      >
        <ModalInnerContainer>
          {children}
          <CloseButton type="button" onClick={() => setModalOpen(false)}>
            X
          </CloseButton>
        </ModalInnerContainer>
      </ModalOuterContainer>
    </FocusTrap>
  );
};
