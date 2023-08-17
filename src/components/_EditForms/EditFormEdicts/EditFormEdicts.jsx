import React, { useContext, useRef } from "react";
import { Context } from "@root";
import { useLocation, useNavigate } from "react-router";
import { Formik } from "formik";
import { StyledCheckbox, StyledCheckboxBox, StyledCheckboxLabel, StyledDoubleCheckboxes } from "@AddFormEdicts";
import { changeEmptyString, validationSchemaEdicts } from "@yupvalidation";
import { setBaner } from "@setBaner";
import { ErrorMessage, StyledAddButton, StyledForm, StyledFormWrapper, StyledInput, StyledInputBox } from "@GlobalComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ref, update } from "firebase/database";
import { db, uptadeInStorage } from "@firebase";

const EditFormEdicts = () => {
  const fileInputRef = useRef(null);
  const context = useContext(Context);
  const { credentialsEdicts, setEditBaner, setFile, file } = context;
  const location = useLocation();
  const dataToEdit = location.state.data;
  const indexOfEditedData = location.state.index;
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={dataToEdit}
      validationSchema={validationSchemaEdicts}
      onSubmit={(values, { resetForm }) => {
        changeEmptyString(values);
        const toUptade = Object.keys(credentialsEdicts)[indexOfEditedData];
        update(ref(db, `files/edicts/${toUptade}`), {
          number: values.number,
          date: values.date,
          title: values.title,
          toWhom: {
            da: values.toWhom.da,
            dt: values.toWhom.dt,
            dk: values.toWhom.dk,
            k: values.toWhom.k,
          },
          file: values.number,
        });
        if (file !== null) {
          uptadeInStorage(dataToEdit.number, file);
        }
        setBaner(setEditBaner);
        resetForm();
        navigate("/edicts");
      }}
    >
      {(formik) => {
        const { errors, touched, handleSubmit } = formik;

        return (
          <>
            <StyledFormWrapper>
              <StyledForm onSubmit={handleSubmit}>
                <StyledInputBox>
                  <label htmlFor="number">Numer:</label>
                  <StyledInput id="number" name="number" className="input" placeholder="1/2023" autoComplete="off" {...formik.getFieldProps("number")}></StyledInput>
                  {touched.number && errors.number && <ErrorMessage>{errors.number}</ErrorMessage>}
                </StyledInputBox>
                <StyledInputBox>
                  <label htmlFor="date">Data:</label>
                  <StyledInput id="date" name="date" className="input" placeholder="01.01.2023" autoComplete="off" {...formik.getFieldProps("date")}></StyledInput>
                  {touched.date && errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
                </StyledInputBox>
                <StyledInputBox>
                  <label htmlFor="title">Tytuł:</label>
                  <StyledInput id="title" name="title" className="input" placeholder="Tytuł..." autoComplete="off" {...formik.getFieldProps("title")}></StyledInput>
                  {touched.title && errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
                </StyledInputBox>
                <StyledInputBox>
                  <label>Adresaci:</label>
                  <StyledDoubleCheckboxes>
                    <StyledCheckboxBox>
                      <StyledCheckbox name="toWhom.da" type="checkbox" id="da" {...formik.getFieldProps("toWhom.da")} />
                      <StyledCheckboxLabel htmlFor="da">Dział Artystyczny</StyledCheckboxLabel>
                    </StyledCheckboxBox>
                    <StyledCheckboxBox>
                      <StyledCheckbox name="toWhom.dt" type="checkbox" id="dt" {...formik.getFieldProps("toWhom.dt")} />
                      <StyledCheckboxLabel htmlFor="dt">Dział Techniczny</StyledCheckboxLabel>
                    </StyledCheckboxBox>
                  </StyledDoubleCheckboxes>
                  <StyledDoubleCheckboxes>
                    <StyledCheckboxBox>
                      <StyledCheckbox name="toWhom.dk" type="checkbox" id="dk" {...formik.getFieldProps("toWhom.dk")} />
                      <StyledCheckboxLabel htmlFor="dk">Dział Księgowy</StyledCheckboxLabel>
                    </StyledCheckboxBox>
                    <StyledCheckboxBox>
                      <StyledCheckbox name="toWhom.k" type="checkbox" id="k" {...formik.getFieldProps("toWhom.k")} />
                      <StyledCheckboxLabel htmlFor="k">Kasa</StyledCheckboxLabel>
                    </StyledCheckboxBox>
                  </StyledDoubleCheckboxes>
                  {touched.toWhom && errors.toWhom && <ErrorMessage style={{ fontSize: "16px" }}>{errors.toWhom}</ErrorMessage>}
                </StyledInputBox>
                <StyledInputBox>
                  <label htmlFor="file">Załącznik</label>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                    }}
                    ref={fileInputRef}
                  />
                </StyledInputBox>
                <StyledInputBox>
                  <label htmlFor="btn">Akcje:</label>
                  <StyledAddButton id="btn" type="submit">
                    Dodaj
                    <FontAwesomeIcon className="icon" icon={faPlus} />
                  </StyledAddButton>
                </StyledInputBox>
              </StyledForm>
            </StyledFormWrapper>
          </>
        );
      }}
    </Formik>
  );
};

export default EditFormEdicts;
