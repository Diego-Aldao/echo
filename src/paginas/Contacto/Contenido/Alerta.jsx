import React from "react";
import styled from "styled-components";

const Error = styled.div`
  width: 100%;
  text-align: center;
  font-family: var(--fuente-poppins);
  padding: 10px 0px;
  margin-bottom: 10px;
  border: 1px solid red;
  color: red;
`;

const Alerta = ({ children }) => {
  return <Error>{children}</Error>;
};

export default Alerta;
