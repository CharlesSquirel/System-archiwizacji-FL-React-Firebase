import { StyledAddForm, StyledForm, StyledAddButton, StyledInputBox, ErrorMessage } from "./StyledAddForm";
import { Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { writeToDB } from "../../utils/firebase";
import { validationSchema } from "../../utils/yupvalidation";
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
        writeToDB({ ...values });
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
                <input
                  id="singature"
                  name="signature"
                  className="input"
                  placeholder="DA..."
                  autoComplete="off"
                  {...formik.getFieldProps("signature")}
                ></input>
                {touched.signature && errors.signature && <ErrorMessage>{errors.signature}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="date">Data:</label>
                <input id="date" name="date" className="input" placeholder="01.01.2023" autoComplete="off" {...formik.getFieldProps("date")}></input>
                {touched.date && errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="description">Opis:</label>
                <input
                  id="description"
                  name="description"
                  className="input"
                  placeholder="Opis..."
                  autoComplete="off"
                  {...formik.getFieldProps("description")}
                ></input>
                {touched.description && errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="tags">Tagi:</label>
                <input
                  id="tags"
                  name="tags"
                  className="input"
                  placeholder="symfoniczny, Mozart,.."
                  autoComplete="off"
                  {...formik.getFieldProps("tags")}
                ></input>
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
