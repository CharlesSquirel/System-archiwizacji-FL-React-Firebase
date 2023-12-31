import React, { useContext } from "react";
import { Context } from "../../../Root";
import { Formik } from "formik";
import Banner from "../../Banner/Banner.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import {
  ErrorMessage,
  StyledForm,
  StyledFormWrapper,
  StyledInput,
  StyledInputBox,
  StyledAddButton,
  StyledSelectRecords,
  StyledExitIcon,
  StyledInputRow,
  StyledSelectRow,
  StyledSelectRecordsBox,
} from "../../GlobalStyle/GlobalComponents.jsx";
import { changeEmptyString, validationSchemaContracts } from "../../../utils/yupvalidation";
import { writeToDb } from "../../../utils/firebase";
import { setBaner } from "../../../utils/setBaner";

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
      validationSchema={validationSchemaContracts}
      onSubmit={(values, { resetForm }) => {
        changeEmptyString(values);
        writeToDb("contracts", {
          signature: values.signature,
          date: values.date,
          contractor: values.contractor,
          type: values.type,
          price: values.price,
          person_in_charge: values.person_in_charge,
          description: values.description,
        });
        setBaner(setAddBaner);
        setIsAddFormContractsOpen(false);
        resetForm();
      }}
    >
      {(formik) => {
        const { errors, touched, handleSubmit } = formik;
        return (
          <StyledFormWrapper>
            <StyledForm onSubmit={handleSubmit}>
              <StyledInputRow>
                <StyledInputBox>
                  <label htmlFor="signature">Sygnatura:</label>
                  <StyledInput
                    id="signature"
                    name="signature"
                    className="input"
                    placeholder="DG..."
                    autoComplete="off"
                    {...formik.getFieldProps("signature")}
                  ></StyledInput>
                  {touched.signature && errors.signature && <ErrorMessage>{errors.signature}</ErrorMessage>}
                </StyledInputBox>
                <StyledInputBox>
                  <label htmlFor="date">Data:</label>
                  <StyledInput
                    id="date"
                    name="date"
                    className="input"
                    placeholder="01.01.2023"
                    autoComplete="off"
                    {...formik.getFieldProps("date")}
                  ></StyledInput>
                  {touched.date && errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
                </StyledInputBox>
                <StyledInputBox>
                  <label htmlFor="contractor">Podmiot:</label>
                  <StyledInput
                    id="contractor"
                    name="contractor"
                    className="input"
                    placeholder="Jan Kowalski"
                    autoComplete="off"
                    {...formik.getFieldProps("contractor")}
                  ></StyledInput>
                  {touched.contractor && errors.contractor && <ErrorMessage>{errors.contractor}</ErrorMessage>}
                </StyledInputBox>
                <StyledInputBox>
                  <label htmlFor="price">Kwota:</label>
                  <StyledInput
                    id="price"
                    name="price"
                    className="input"
                    placeholder="500,00"
                    autoComplete="off"
                    type="number"
                    {...formik.getFieldProps("price")}
                  ></StyledInput>
                  {touched.price && errors.price && <ErrorMessage>{errors.price}</ErrorMessage>}
                </StyledInputBox>
                <StyledInputBox>
                  <label htmlFor="description">Uwagi:</label>
                  <StyledInput
                    id="description"
                    name="description"
                    className="input"
                    placeholder="Opis..."
                    autoComplete="off"
                    {...formik.getFieldProps("description")}
                  ></StyledInput>
                  {touched.description && errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
                </StyledInputBox>
              </StyledInputRow>
              <StyledSelectRow>
                <StyledSelectRecordsBox>
                  <label htmlFor="type">Rodzaj umowy:</label>
                  <StyledSelectRecords id="type" name="type" {...formik.getFieldProps("type")}>
                    <option value="umowa zlecenie">umowa zlecenie</option>
                    <option value="umowa o dzieło">umowa o dzieło</option>
                    <option value="umowa o współpracę">umowa o współpracę</option>
                    <option value="umowa licencyjna">umowa licencyjna</option>
                  </StyledSelectRecords>
                </StyledSelectRecordsBox>
                <StyledSelectRecordsBox>
                  <label htmlFor="person_in_charge">Osoba odpowiedzialna:</label>
                  <StyledSelectRecords id="person_in_charge" name="person_in_charge" {...formik.getFieldProps("person_in_charge")}>
                    <option value="Anna Król">Anna Król</option>
                    <option value="Alina Staniak-Ziółkowska">Alina Staniak-Ziółkowska</option>
                  </StyledSelectRecords>
                </StyledSelectRecordsBox>
              </StyledSelectRow>
              <StyledInputBox>
                <StyledAddButton type="submit">
                  Dodaj
                </StyledAddButton>
              </StyledInputBox>
              <StyledExitIcon onClick={() => setIsAddFormContractsOpen(false)}>
                <FontAwesomeIcon className="icon-close" icon={faClose} />
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
