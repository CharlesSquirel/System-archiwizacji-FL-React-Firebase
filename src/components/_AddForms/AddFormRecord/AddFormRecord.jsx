import { useContext } from "react";
import { Context } from "../../../Root";
import { Formik } from "formik";
import { writeToDb } from "../../../utils/firebase";
import { changeEmptyString, validationSchemaRecords } from "../../../utils/yupvalidation";
import { setBaner } from "../../../utils/setBaner";
import Banner from "../../Banner/Banner";
import { StyledInputBox, StyledInput, ErrorMessage, StyledFormWrapper, StyledForm, StyledAddButton, StyledSelectRecords } from "../../GlobalStyle/GlobalComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const initialValues = {
  date: "",
  title: "",
  type: "",
  musicians: {},
  music: {},
  description: "",
};

function AddFormRecord() {
  const context = useContext(Context);
  const { addBaner, setAddBaner, deleteBaner, editBaner } = context;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaRecords}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        changeEmptyString(values);
        writeToDb("records", {
          date: values.date,
          title: values.title,
          type: values.type,
          musicians: values.musicians,
          music: values.music,
          description: values.description,
        });
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
                  <label htmlFor="date">Data:</label>
                  <StyledInput id="date" name="date" className="input" placeholder="01.01.2023" autoComplete="off" {...formik.getFieldProps("date")}></StyledInput>
                  {touched.date && errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
                </StyledInputBox>
                <StyledInputBox>
                  <label htmlFor="title">Tytuł:</label>
                  <StyledInput id="title" name="title" className="input" placeholder="Tytuł" autoComplete="off" {...formik.getFieldProps("title")}></StyledInput>
                  {touched.title && errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
                </StyledInputBox>
                <StyledInputBox>
                  <label htmlFor="description">Opis:</label>
                  <StyledInput id="description" name="description" className="input" placeholder="Opis..." autoComplete="off" type="textarea" {...formik.getFieldProps("description")}></StyledInput>
                  {touched.description && errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
                </StyledInputBox>
                <StyledInputBox>
                  <label htmlFor="type">Typ:</label>
                  <StyledSelectRecords id="type" name="type" {...formik.getFieldProps("type")}>
                    <option value="koncert symfoniczny">koncert symfoniczny</option>
                    <option value="koncert kameralny">koncert kameralny</option>
                    <option value="recital">recital</option>
                    <option value="audycja umuzykalniająca">audycja umuzykalniająca</option>
                  </StyledSelectRecords>
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

export default AddFormRecord;
