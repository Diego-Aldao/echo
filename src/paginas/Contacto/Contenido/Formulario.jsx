import React from "react";
import styled from "styled-components";

const Contenido = styled.div`
  padding: 40px 0px;
  @media (min-width: 992px) {
    padding: 0px 0px 0px 40px;
    width: 50%;
  }
`;

const Form = styled.form`
  input,
  textarea {
    background: black;
    border: 0px;
    border-bottom: 1px solid var(--color-principal);
    width: 100%;
    padding: 20px 5px;
    color: white;
    font-family: var(--fuente-poppins);
    margin-bottom: 20px;
  }
  input::placeholder,
  textarea::placeholder {
    color: var(--color-parrafos);
    text-transform: capitalize;
    font-family: var(--fuente-jost);
  }
  input:focus,
  textarea:focus {
    outline: 2px;
    outline-color: var(--color-principal);
    outline-style: solid;
  }
`;
const Boton = styled.button`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  background: var(--color-principal);
  width: 170px;
  height: 50px;
  text-align: center;
  text-transform: capitalize;
`;

const Formulario = () => {
  return (
    <Contenido>
      <Form>
        <input
          name="nombre"
          type="text"
          id="form-name"
          placeholder="nombre"
        ></input>
        <input
          name="email"
          type="email"
          id="form-email"
          placeholder="email"
        ></input>
        <textarea
          name="mensaje"
          id="form-mensaje"
          placeholder="mensaje"
          rows={7}
        ></textarea>
        <Boton type="submit">
          <span>enviar mensaje</span>
        </Boton>
      </Form>
    </Contenido>
  );
};

export default Formulario;
