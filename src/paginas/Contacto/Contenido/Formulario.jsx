import { Formik, Form } from "formik";
import React from "react";
import styled from "styled-components";
import Input from "./Input";
import * as Yup from "yup";
import Alerta from "./Alerta";
import { useNavigate } from "react-router-dom";

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
  display: block;
  background: var(--color-principal);
  width: 170px;
  height: 50px;
  text-align: center;
  text-transform: capitalize;
  font-family: var(--fuente-jost);
  margin: 0px auto;
`;

const Formulario = () => {
  const navigate = useNavigate();

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
        onSubmit={(values, { resetForm }) => {
          resetForm();
          navigate("/");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            {errors.nombre && touched.nombre ? (
              <Alerta>{errors.nombre}</Alerta>
            ) : null}
            <Input type="text" name="nombre" placeholder="nombre" />
            {errors.email && touched.email ? (
              <Alerta>{errors.email}</Alerta>
            ) : null}
            <Input type="email" name="email" placeholder="email" />
            <Input
              as="textarea"
              rows="8"
              name="mensaje"
              placeholder="mensaje"
            ></Input>

            <Boton type="submit" aria-label="enviar">
              enviar
            </Boton>
          </Form>
        )}
      </Formik>
    </Contenido>
  );
};

export default Formulario;
