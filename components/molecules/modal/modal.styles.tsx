import styled from "styled-components";
import { pxToRem, mediaQuery, color, shadow } from "../../../design";

const ModalOuterContainer = styled.div`
  display: flex;
  background: hsla(0, 0%, 30%, 0.7);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

const ModalInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${pxToRem(8)};
  background: ${color.pageBackground};
  border-radius: 4px;
  width: 300px;
  height: 250px;
  box-shadow: ${shadow.card};

  ${mediaQuery.xxxs} {
    width: 350px;
    height: 196px;
  }

  ${mediaQuery.xxs} {
    width: 400px;
    height: 224px;
  }

  ${mediaQuery.xs} {
    width: 574px;
    height: 324px;
  }

  ${mediaQuery.sm} {
    width: 743px;
    height: 450px;
  }
`;

const CloseButton = styled.button`
  display: flex;
  position: absolute;
  top: -6px;
  right: -6px;
  padding: ${pxToRem(4)};
  background-color: ${color.body};
  border-radius: 50%;
  border: 0;
`;

export { ModalOuterContainer, ModalInnerContainer, CloseButton };
