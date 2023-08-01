import { useContext } from "react";
import { Context } from "../../../Root";
import { Formik } from "formik";
import { writeToArchive } from "../../../utils/firebase";
import { changeEmptyString, validationSchemaArchive } from "../../../utils/yupvalidation";
import { setBaner } from "../../../utils/setBaner";
import Banner from "../../Banner/Banner";
import { StyledInputBox, StyledInput, ErrorMessage, StyledFormWrapper, StyledForm, StyledAddButton } from "../../GlobalStyle/GlobalComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
        writeToArchive({ ...values });
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
