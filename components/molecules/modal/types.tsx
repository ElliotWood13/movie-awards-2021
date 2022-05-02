import { ReactChild } from "react";

export interface ModalProps {
  children: ReactChild;
  callback: () => void;
}
