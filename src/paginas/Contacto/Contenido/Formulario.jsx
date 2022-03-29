import { Formik, Form } from "formik";
import React from "react";
import styled from "styled-components";
import Input from "./Input";
import * as Yup from "yup";

const Contenido = styled.div`
  padding: 40px 0px;
  @media (min-width: 992px) {
    padding: 0px 0px 0px 40px;
    width: 50%;
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
  const validacion = Yup.object().shape({
    nombre: Yup.string()
      .min(3, "El nombre es muy corto")
      .max(20, "El nombre es muy largo")
      .required("El nombre es obligatorio"),
    email: Yup.string()
      .email("Email no válido")
      .required("El email es obligatorio"),
    notas: "",
  });
  return (
    <Contenido>
      <Formik
        initialValues={{
          nombre: "",
          email: "",
          mensaje: "",
        }}
        validationSchema={validacion}
      >
        {({ errors, touched }) => (
          <Form>
            <Input type="text" name="nombre" placeholder="nombre" />
            <Input type="email" name="email" placeholder="email" />
            <Input
              as="textarea"
              rows="8"
              name="mensaje"
              placeholder="mensaje"
            />
            <Boton type="submit">enviar</Boton>
          </Form>
        )}
      </Formik>
    </Contenido>
  );
};

export default Formulario;
