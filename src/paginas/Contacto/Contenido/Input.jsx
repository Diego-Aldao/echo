import React from "react";
import styled from "styled-components";
import { ErrorMessage, Field } from "formik";

const Campo = styled(Field)`
  background: black;
  border: 0px;
  border-bottom: 1px solid var(--color-principal);
  width: 100%;
  padding: 20px 5px;
  color: white;
  font-family: var(--fuente-poppins);
  margin-bottom: 20px;
  &::placeholder {
    color: var(--color-parrafos);
    text-transform: capitalize;
    font-family: var(--fuente-jost);
  }
  &:focus {
    outline: 2px;
    outline-color: var(--color-principal);
    outline-style: solid;
  }
`;

const Input = ({ type, name, placeholder, as, rows }) => {
  return (
    <>
      <Campo
        name={name}
        type={type}
        placeholder={placeholder}
        as={as ? as : null}
        rows={rows ? rows : null}
      />
    </>
  );
};

export default Input;
