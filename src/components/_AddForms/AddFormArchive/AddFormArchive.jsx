import { useContext } from "react";
import { Formik } from "formik";
import { writeToDb } from "../../../utils/firebase";
import { changeEmptyString, validationSchemaArchive } from "../../../utils/yupvalidation";
import { setBaner } from "../../../utils/setBaner";
import Banner from "../../Banner/Banner.jsx";
import {
  StyledInputBox,
  StyledInput,
  ErrorMessage,
  StyledFormWrapper,
  StyledForm,
  StyledAddButton,
  StyledExitIcon,
  StyledInputRow,
} from "../../GlobalStyle/GlobalComponents.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../../Root";

const initialValues = {
  signature: "",
  date: "",
  description: "",
  tags: "",
};

function AddFormArchive() {
  const context = useContext(Context);
  const { addBaner, setAddBaner, deleteBaner, editBaner, setIsAddFormArchiveOpen } = context;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaArchive}
      onSubmit={(values, { resetForm }) => {
        changeEmptyString(values);
        writeToDb("archive", { ...values });
        resetForm();
        setBaner(setAddBaner);
        setIsAddFormArchiveOpen(false);
      }}
    >
      {(formik) => {
        const { errors, touched, handleSubmit } = formik;
        return (
          <>
            <StyledFormWrapper>
              <StyledForm onSubmit={handleSubmit}>
                <StyledInputRow>
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
                </StyledInputRow>
                <StyledInputBox>
                  <StyledAddButton type="submit">
                    Dodaj
                  </StyledAddButton>
                </StyledInputBox>
                <StyledExitIcon onClick={() => setIsAddFormArchiveOpen(false)}>
                  <FontAwesomeIcon className="icon-close" icon={faClose} />
                </StyledExitIcon>
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
