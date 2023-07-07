import { StyledAddForm, StyledForm, StyledAddButton, StyledInputBox, ErrorMessage, StyledInput } from "./StyledAddForm";
import { Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { writeToDB } from "../../utils/firebase";
import { changeEmptyString, validationSchema } from "../../utils/yupvalidation";
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
        writeToDB({ ...values});
        resetForm();
      }}
    >
      {(formik) => {
        const { errors, touched, handleSubmit } = formik;
        return (
          <StyledAddForm>
            <StyledForm onSubmit={handleSubmit}>
              <StyledInputBox>
                <label htmlFor="signature">Sygnatura:</label>
                <StyledInput
                  id="singature"
                  name="signature"
                  className="input"
                  placeholder="DA..."
                  autoComplete="off"
                  {...formik.getFieldProps("signature")}
                ></StyledInput>
                {touched.signature && errors.signature && <ErrorMessage>{errors.signature}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="date">Data:</label>
                <StyledInput id="date" name="date" className="input" placeholder="01.01.2023" autoComplete="off" {...formik.getFieldProps("date")}></StyledInput>
                {touched.date && errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="description">Opis:</label>
                <StyledInput
                  id="description"
                  name="description"
                  className="input"
                  placeholder="Opis..."
                  autoComplete="off"
                  type="textarea"
                  {...formik.getFieldProps("description")}
                ></StyledInput>
                {touched.description && errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="tags">Tagi:</label>
                <StyledInput
                  id="tags"
                  name="tags"
                  className="input"
                  placeholder="symfoniczny, Mozart,.."
                  autoComplete="off"
                  {...formik.getFieldProps("tags")}
                ></StyledInput>
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
          </StyledAddForm>
        );
      }}
    </Formik>
  );
}

export default AddForm;
