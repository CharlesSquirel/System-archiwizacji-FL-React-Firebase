import React, { useContext } from "react";
import { ErrorMessage, StyledForm, StyledFormWrapper, StyledInput, StyledInputBox, StyledAddButton } from "../../GlobalStyle/GlobalComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faClose } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../../Root";
import { Formik } from "formik";
import Banner from "../../Banner/Banner";
import { changeEmptyString, validationSchemaArchive } from "../../../utils/yupvalidation";
import { writeToDb } from "../../../utils/firebase";
import { setBaner } from "../../../utils/setBaner";
import styled from "styled-components";

const StyledExitIcon = styled.div`
position: absolute;
right: 50px;
top: 10px;
cursor: pointer;
`

const initialValuesContracts = {
  signature: "",
  date: "",
  contractor: "",
  type: "",
  price: "",
  person_in_charge: "",
  description: "",
};

const AddFormContracts = () => {
  const context = useContext(Context);
  const { addBaner, setAddBaner, deleteBaner, editBaner, setIsAddFormContractsOpen } = context;
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
                <label htmlFor="contractor">Data:</label>
                <StyledInput id="contractor" name="contractor" className="input" placeholder="Jan Kowalski" autoComplete="off" {...formik.getFieldProps("contractor")}></StyledInput>
                {touched.contractor && errors.contractor && <ErrorMessage>{errors.contractor}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="price">Kwota:</label>
                <StyledInput id="price" name="price" className="input" placeholder="500,00" autoComplete="off" {...formik.getFieldProps("price")}></StyledInput>
                {touched.price && errors.price && <ErrorMessage>{errors.price}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="description">Uwagi:</label>
                <StyledInput id="description" name="description" className="input" placeholder="Opis..." autoComplete="off" {...formik.getFieldProps("description")}></StyledInput>
                {touched.description && errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="btn">Akcje:</label>
                <StyledAddButton id="btn" type="submit">
                  Dodaj
                  <FontAwesomeIcon className="icon" icon={faPlus} />
                </StyledAddButton>
              </StyledInputBox>
              <StyledExitIcon onClick={() => setIsAddFormContractsOpen(false)}>

              <FontAwesomeIcon className="icon-close" icon={faClose}/>
              </StyledExitIcon>
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
