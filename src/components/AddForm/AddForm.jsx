import { Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { changeEmptyString, validationSchema } from "../../utils/yupvalidation";
import { StyledButton, StyledInputBox, StyledInput, ErrorMessage, StyledFormWrapper, StyledForm } from "../GlobalStyle/GlobalComponents";
import ActualUserInfo from "../ActualUserInfo/ActualUserInfo";
import { writeToDB } from "../../utils/firebase";

const initialValues = {
  signature: "",
  date: "",
  description: "",
  tags: "",
};

function AddForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        changeEmptyString(values);
        writeToDB({ ...values });
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
                  <label htmlFor="signature">Sygnatura:</label>
                  <StyledInput id="singature" name="signature" className="input" placeholder="DA..." autoComplete="off" {...formik.getFieldProps("signature")}></StyledInput>
                  {touched.signature && errors.signature && <ErrorMessage>{errors.signature}</ErrorMessage>}
                </StyledInputBox>
                <StyledInputBox>
                  <label htmlFor="date">Data:</label>
                  <StyledInput id="date" name="date" className="input" placeholder="01.01.2023" autoComplete="off" {...formik.getFieldProps("date")}></StyledInput>
                  {touched.date && errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
                </StyledInputBox>
                <StyledInputBox>
                  <label htmlFor="description">Opis:</label>
                  <StyledInput id="description" name="description" className="input" placeholder="Opis..." autoComplete="off" type="textarea" {...formik.getFieldProps("description")}></StyledInput>
                  {touched.description && errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
                </StyledInputBox>
                <StyledInputBox>
                  <label htmlFor="tags">Tagi:</label>
                  <StyledInput id="tags" name="tags" className="input" placeholder="symfoniczny, Mozart,.." autoComplete="off" {...formik.getFieldProps("tags")}></StyledInput>
                  {touched.tags && errors.tags && <ErrorMessage>{errors.tags}</ErrorMessage>}
                </StyledInputBox>
                <StyledInputBox>
                  <label htmlFor="btn">Akcje:</label>
                  <StyledButton id="btn" type="submit">
                    Dodaj
                    <FontAwesomeIcon className="icon" icon={faPlus} />
                  </StyledButton>
                </StyledInputBox>
              </StyledForm>
            </StyledFormWrapper>
            <ActualUserInfo />
          </>
        );
      }}
    </Formik>
  );
}

export default AddForm;
