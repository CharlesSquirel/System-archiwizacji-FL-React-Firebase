import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { ErrorMessage, StyledForm, StyledFormWrapper, StyledInput, StyledInputBox, StyledAddButton } from "@GlobalComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Formik } from "formik";
import { validationSchemaEdicts } from "@yupvalidation";
import { Context } from "@root";
import { changeEmptyString } from "@yupvalidation";
import { uploadToStorage, writeToDb } from "@firebase";
import { setBaner } from "@setBaner";
import Banner from "@Banner";

export const StyledCheckboxBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const StyledCheckboxLabel = styled.label`
  font-size: 15px;
  font-weight: 500;
`;

export const StyledCheckbox = styled.input`
  width: 16px;
  height: 16px;
`;

export const StyledDoubleCheckboxes = styled.div`
  display: flex;
  gap: 10px;
  width: 407px;
`;

const initialValuesEdicts = {
  number: "",
  date: "",
  title: "",
  toWhom: {
    da: false,
    dt: false,
    dk: false,
    k: false,
  },
  file: "",
};

const AddFormEdicts = () => {
  const fileInputRef = useRef(null);
  const context = useContext(Context);
  const { addBaner, setAddBaner, deleteBaner, editBaner, file, setFile } = context;

  return (
    <Formik
      initialValues={initialValuesEdicts}
      validationSchema={validationSchemaEdicts}
      onSubmit={(values, { resetForm }) => {
        changeEmptyString(values);
        writeToDb("edicts", {
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
        uploadToStorage(values.number, file);
        setFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        setBaner(setAddBaner);
        resetForm();
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
                  <input id="file" name="file" type="file" onChange={(e) => setFile(e.target.files[0])} ref={fileInputRef} />
                </StyledInputBox>
                <StyledInputBox>
                  <label htmlFor="btn">Akcje:</label>
                  <StyledAddButton id="btn" type="submit">
                    Dodaj
                    <FontAwesomeIcon className="icon" icon={faPlus} />
                  </StyledAddButton>
                </StyledInputBox>
              </StyledForm>
              {addBaner && <Banner text="Poprawnie dodano do bazy danych" />}
              {deleteBaner && <Banner text="Poprawnie usunięto z bazy danych" />}
              {editBaner && <Banner text="Poprawnie zmieniono dane" />}
            </StyledFormWrapper>
          </>
        );
      }}
    </Formik>
  );
};

export default AddFormEdicts;
