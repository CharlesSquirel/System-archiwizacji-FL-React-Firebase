import React, { useContext } from "react";
import { ErrorMessage, StyledForm, StyledFormWrapper, StyledInput, StyledInputBox, StyledAddButton } from "../../GlobalStyle/GlobalComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../../Root";
import { Formik } from "formik";
import Banner from "../../Banner/Banner";
import { changeEmptyString, validationSchemaArchive } from "../../../utils/yupvalidation";
import { writeToDb } from "../../../utils/firebase";
import { setBaner } from "../../../utils/setBaner";

const initialValuesContracts = {
  signature: "",
  date: "",
  description: "",
  tags: "",
};

const AddFormContracts = () => {
  const context = useContext(Context);
  const { addBaner, setAddBaner, deleteBaner, editBaner } = context;
  return (
    <Formik
      initialValues={initialValuesContracts}
      validationSchema={validationSchemaArchive}
      onSubmit={(values, { resetForm }) => {
        changeEmptyString(values);
        writeToDb("contracts", values)
        setBaner(setAddBaner);
        resetForm();
      }}
    >
      {(formik) => {
        const { errors, touched, handleSubmit } = formik;
        return (
          <StyledFormWrapper>
            <StyledForm onSubmit={handleSubmit}>
              <StyledInputBox>
                <label htmlFor="signature">Sygnatura:</label>
                <StyledInput id="signature" name="signature" className="input" placeholder="DG..." autoComplete="off" {...formik.getFieldProps("signature")}></StyledInput>
                {touched.signature && errors.signature && <ErrorMessage>{errors.signature}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="date">Data:</label>
                <StyledInput id="date" name="date" className="input" placeholder="01.01.2023" autoComplete="off" {...formik.getFieldProps("date")}></StyledInput>
                {touched.date && errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="description">Opis:</label>
                <StyledInput id="description" name="description" className="input" placeholder="Opis..." autoComplete="off" {...formik.getFieldProps("description")}></StyledInput>
                {touched.description && errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="tags">Tagi:</label>
                <StyledInput id="tags" name="tags" className="input" placeholder="symfoniczny, Mozart,.." autoComplete="off" {...formik.getFieldProps("tags")}></StyledInput>
                {touched.tags && errors.tags && <ErrorMessage>{errors.tags}</ErrorMessage>}
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
        );
      }}
    </Formik>
  );
};

export default AddFormContracts;
