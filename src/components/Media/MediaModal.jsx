import React from "react";
import styled from "styled-components";
import video from "../../assets/videos/video-1.mp4";
import { AiOutlineClose } from "react-icons/ai";

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
  padding: 0px 15px;
`;

const ContenedorVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const BtnCerrar = styled.div`
  position: absolute;
  top: -5px;
  right: -35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  font-size: 45px;
`;

const MediaModal = ({ miVideo, setMiVideo }) => {
  const handleClick = () => {
    setMiVideo(!miVideo);
  };
  return (
    <Modal>
      <BtnCerrar onClick={handleClick}>
        <AiOutlineClose />
      </BtnCerrar>
      <ContenedorVideo loop autoPlay controls>
        <source src={video} type="video/mp4" />
      </ContenedorVideo>
    </Modal>
  );
};

export default MediaModal;
