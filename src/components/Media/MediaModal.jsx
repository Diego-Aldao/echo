import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  text-align: center;
  width: 100%;
  max-width: 720px;
  height: 55vw;
  max-height: 350px;
  background: var(--color-principal);
`;

const MediaModal = () => {
  return <Modal></Modal>;
};

export default MediaModal;
