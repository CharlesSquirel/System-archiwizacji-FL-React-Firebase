import React from "react";
import { StyledAddForm, StyledForm, StyledInputBox, ErrorMessage, StyledAddButton } from "../AddForm/StyledAddForm";
import { Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { changeEmptyString, validationSchema } from "../../utils/yupvalidation";
import { ref, update } from "firebase/database";
import { db } from "../../utils/firebase";

function EditForm() {
  const location = useLocation();
  const dataToEdit = location.state.data;
  const indexOfEditedData = location.state.index;
  const credentials = location.state.credentials;
  // const setCredentials = location.state.setCredentials;

  let navigate = useNavigate();

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
          <StyledAddForm>
            <StyledForm onSubmit={handleSubmit}>
              <StyledInputBox>
                <label htmlFor="signature">Sygnatura:</label>
                <input id="singature" name="signature" className="input" autoComplete="off" {...formik.getFieldProps("signature")}></input>
                {touched.signature && errors.signature && <ErrorMessage>{errors.signature}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="date">Data:</label>
                <input id="date" name="date" className="input" autoComplete="off" {...formik.getFieldProps("date")}></input>
                {touched.date && errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="description">Opis:</label>
                <input id="description" name="description" className="input" autoComplete="off" {...formik.getFieldProps("description")}></input>
                {touched.description && errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="tags">Tagi:</label>
                <input id="tags" name="tags" className="input" autoComplete="off" {...formik.getFieldProps("tags")}></input>
                {touched.tags && errors.tags && <ErrorMessage>{errors.tags}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="btn">Akcje:</label>
                <StyledAddButton id="btn" type="submit">
                  Zmień
                </StyledAddButton>
              </StyledInputBox>
            </StyledForm>
          </StyledAddForm>
        );
      }}
    </Formik>
  );
}

export default EditForm;
