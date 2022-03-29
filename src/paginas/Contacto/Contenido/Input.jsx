import React from "react";
import styled from "styled-components";
import { Field, useField } from "formik";

const Campo = styled(Field)`
  background: black;
  border: 0px;
  border-bottom: 1px solid var(--color-principal);
  width: 100%;
  padding: 20px 5px;
  color: white;
  font-family: var(--fuente-poppins);
  margin-bottom: 40px;
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

const Input = (props) => {
  const [field] = useField(props);

  return (
    <>
      <Campo {...field} {...props} />
    </>
  );
};

export default Input;
