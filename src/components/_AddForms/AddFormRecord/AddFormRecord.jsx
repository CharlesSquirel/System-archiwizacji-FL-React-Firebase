import { useContext } from "react";
import { Context } from "../../../Root";
import { Formik } from "formik";
import { writeToDb } from "../../../utils/firebase";
import { changeEmptyString, validationSchemaRecords } from "../../../utils/yupvalidation";
import { setBaner } from "../../../utils/setBaner";
import Banner from "../../Banner/Banner";
import { StyledInputBox, StyledInput, ErrorMessage, StyledFormWrapper, StyledForm, StyledAddButton } from "../../GlobalStyle/GlobalComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledCheckbox, StyledCheckboxBox, StyledCheckboxLabel, StyledDoubleCheckboxes } from "../AddFormEdicts/AddFormEdicts";

const initialValues = {
  date: "",
  title: "",
  type: {
    symphonic: false,
    chamber: false,
    solo: false,
  },
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
        changeEmptyString(values);
        writeToDb("records", {
          date: values.date,
          title: values.title,
          type: {
            symphonic: values.type.symphonic,
            chamber: values.type.chamber,
            solo: values.type.solo,
          },
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
                <StyledDoubleCheckboxes>
                  <StyledCheckboxBox>
                    <StyledCheckbox name="type.symphonic" type="checkbox" id="symphonic" {...formik.getFieldProps("type.symphonic")} />
                    <StyledCheckboxLabel htmlFor="symphonic">Koncert symfoniczny</StyledCheckboxLabel>
                  </StyledCheckboxBox>
                  <StyledCheckboxBox>
                    <StyledCheckbox name="type.chamber" type="checkbox" id="chamber" {...formik.getFieldProps("type.chamber")} />
                    <StyledCheckboxLabel htmlFor="chamber">Koncert kameralny</StyledCheckboxLabel>
                  </StyledCheckboxBox>
                  <StyledCheckboxBox>
                    <StyledCheckbox name="type.solo" type="checkbox" id="solo" {...formik.getFieldProps("type.solo")} />
                    <StyledCheckboxLabel htmlFor="solo">Recital</StyledCheckboxLabel>
                  </StyledCheckboxBox>
                </StyledDoubleCheckboxes>
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
