import { useContext } from "react";
import { Formik } from "formik";
import { writeToDb } from "@firebase";
import { changeEmptyString, validationSchemaArchive } from "@yupvalidation";
import { setBaner } from "@setBaner";
import Banner from "@Banner";
import { StyledInputBox, StyledInput, ErrorMessage, StyledFormWrapper, StyledForm, StyledAddButton } from "@GlobalComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Context } from "@root";
import TextInput from "../../TextInput";

const initialValues = {
  signature: "",
  date: "",
  description: "",
  tags: "",
};

function AddFormArchive() {
  const context = useContext(Context);
  const { addBaner, setAddBaner, deleteBaner, editBaner } = context;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaArchive}
      onSubmit={(values, { resetForm }) => {
        changeEmptyString(values);
        writeToDb("archive", { ...values });
        resetForm();
        setBaner(setAddBaner);
      }}
    >
      {(formik) => {
        const { errors, touched, handleSubmit } = formik;
        return (
          <>
            <StyledFormWrapper>
              <StyledForm onSubmit={handleSubmit}>
                <StyledInputBox>
                  <label htmlFor="signature">Sygnatura:</label>
                  <StyledInput id="singature" name="signature" className="input" placeholder="DA..." autoComplete="off" {...formik.getFieldProps("signature")}></StyledInput>
                  {touched.signature && errors.signature && <ErrorMessage>{errors.signature}</ErrorMessage>}
                </StyledInputBox>
                <StyledInputBox>
                  <label htmlFor="date">Data:</label>
                  <StyledInput id="date" name="date" className="input" placeholder="01.01.2023" autoComplete="off" {...formik.getFieldProps("date")}></StyledInput>
                  {touched.date && errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
                </StyledInputBox>
                <TextInput formik={formik} credential="description" label="Opis:" placeholder="Opis..." />
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
          </>
        );
      }}
    </Formik>
  );
}

export default AddFormArchive;
