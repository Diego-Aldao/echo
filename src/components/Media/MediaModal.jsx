import React from "react";
import styled from "styled-components";
import video from "../../assets/videos/video-1.mp4";
import { AiOutlineClose } from "react-icons/ai";

const Modal = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 15px;
  background: #0000006f;
  z-index: 99;
`;

const ContenedorVideo = styled.div`
  width: 100%;
  height: 55vw;
  position: relative;
  max-height: 350px;
  max-width: 750px;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const BtnCerrar = styled.div`
  position: absolute;
  top: -55px;
  right: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 45px;
`;

const MediaModal = ({ miVideo, setMiVideo }) => {
  const handleClick = () => {
    setMiVideo(!miVideo);
  };
  return (
    <Modal>
      <ContenedorVideo>
        <BtnCerrar onClick={handleClick}>
          <AiOutlineClose />
        </BtnCerrar>
        <video loop autoPlay controls>
          <source src={video} type="video/mp4" />
        </video>
      </ContenedorVideo>
    </Modal>
  );
};

export default MediaModal;
