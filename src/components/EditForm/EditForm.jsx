import React from "react";
import { Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { changeEmptyString, validationSchema } from "../../utils/yupvalidation";
import { ref, update } from "firebase/database";
import { db } from "../../utils/firebase";
import { StyledButton, StyledInputBox, StyledInput, ErrorMessage, StyledFormWrapper, StyledForm } from "../GlobalStyle/GlobalComponents";

function EditForm() {
  const location = useLocation();
  const dataToEdit = location.state.data;
  const indexOfEditedData = location.state.index;
  const credentials = location.state.credentials;
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={dataToEdit}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        changeEmptyString(values);
        const toUptade = Object.keys(credentials)[indexOfEditedData];
        update(ref(db, `files/${toUptade}`), values);
        navigate("/");
        // chwilowe rozwiązanie
        window.location.reload(false);
      }}
    >
      {(formik) => {
        const { errors, touched, handleSubmit } = formik;
        return (
          <StyledFormWrapper>
            <StyledForm onSubmit={handleSubmit}>
              <StyledInputBox>
                <label htmlFor="signature">Sygnatura:</label>
                <StyledInput id="singature" name="signature" className="input" autoComplete="off" {...formik.getFieldProps("signature")}></StyledInput>
                {touched.signature && errors.signature && <ErrorMessage>{errors.signature}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="date">Data:</label>
                <StyledInput id="date" name="date" className="input" autoComplete="off" {...formik.getFieldProps("date")}></StyledInput>
                {touched.date && errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="description">Opis:</label>
                <StyledInput id="description" name="description" className="input" autoComplete="off" {...formik.getFieldProps("description")}></StyledInput>
                {touched.description && errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="tags">Tagi:</label>
                <StyledInput id="tags" name="tags" className="input" autoComplete="off" {...formik.getFieldProps("tags")}></StyledInput>
                {touched.tags && errors.tags && <ErrorMessage>{errors.tags}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="btn">Akcje:</label>
                <StyledButton id="btn" type="submit">
                  Zmień
                </StyledButton>
              </StyledInputBox>
            </StyledForm>
          </StyledFormWrapper>
        );
      }}
    </Formik>
  );
}

export default EditForm;
