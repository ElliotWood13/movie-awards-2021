import { ReactChild } from "react";

export interface ModalProps {
  children: ReactChild;
  onCloseModal: () => void;
}
