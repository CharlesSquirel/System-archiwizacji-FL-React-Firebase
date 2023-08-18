import React, { useContext } from "react";
import { Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { changeEmptyString, validationSchemaRecords } from "../../../utils/yupvalidation";
import { ref, update } from "firebase/database";
import { db, readFromDb } from "../../../utils/firebase";
import { StyledButton, StyledInputBox, StyledInput, ErrorMessage, StyledFormWrapper, StyledForm, StyledSelectRecords } from "../../GlobalStyle/GlobalComponents.jsx";
import { Context } from "../../../Root";
import { setBaner } from "../../../utils/setBaner";

function EditFormRecord() {
  const context = useContext(Context);
  const { credentialsRecord, setCredentialsRecord, setEditBaner } = context;
  const location = useLocation();
  const dataToEdit = location.state.data;
  const indexOfEditedData = location.state.index;
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={dataToEdit}
      validationSchema={validationSchemaRecords}
      onSubmit={(values) => {
        changeEmptyString(values);
        const toUptade = Object.keys(credentialsRecord)[indexOfEditedData];
        update(ref(db, `files/records/${toUptade}`), {
          date: values.date,
          title: values.title,
          type: values.type,
          musicians: values.musicians,
          music: values.music,
          description: values.description,
          musicians: null,
          music: null,
        });
        readFromDb("records", setCredentialsRecord);
        navigate("/record");
        setBaner(setEditBaner);
      }}
    >
      {(formik) => {
        const { errors, touched, handleSubmit } = formik;
        return (
          <StyledFormWrapper>
            <StyledForm onSubmit={handleSubmit}>
              <StyledInputBox>
                <label htmlFor="date">Data:</label>
                <StyledInput id="date" name="date" className="input" placeholder="01.01.2023" autoComplete="off" {...formik.getFieldProps("date")}></StyledInput>
                {touched.date && errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="title">Tytuł:</label>
                <StyledInput id="title" name="title" className="input" placeholder="Tytuł" autoComplete="off" {...formik.getFieldProps("title")}></StyledInput>
                {touched.title && errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="description">Opis:</label>
                <StyledInput id="description" name="description" className="input" autoComplete="off" {...formik.getFieldProps("description")}></StyledInput>
                {touched.description && errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="type">Typ:</label>
                <StyledSelectRecords id="type" name="type" {...formik.getFieldProps("type")}>
                  <option value="symphonic">koncert symfoniczny</option>
                  <option value="chamber">koncert kameralny</option>
                  <option value="solo">recital</option>
                  <option value="audition">audycja umuzykalniająca</option>
                </StyledSelectRecords>
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

export default EditFormRecord;
