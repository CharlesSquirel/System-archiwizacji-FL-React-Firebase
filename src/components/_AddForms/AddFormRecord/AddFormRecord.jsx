import { useContext, useState } from "react";
import { Context } from "../../../Root";
import { Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Banner from "../../Banner/Banner.jsx";
import { StyledInputBox, StyledInput, ErrorMessage, StyledFormWrapper, StyledForm, StyledAddButton, StyledSelectRecords, StyledExitIcon, StyledInputRow } from "../../GlobalStyle/GlobalComponents.jsx";
import { writeToDb } from "../../../utils/firebase";
import { changeEmptyString, validationSchemaRecords } from "../../../utils/yupvalidation";
import { setBaner } from "../../../utils/setBaner";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [["bold", "italic"]],
};

const initialValues = {
  date: "",
  title: "",
  type: "",
  musicians: {},
  music: {},
  description: "",
};

function AddFormRecord() {
  const [musicians, setMusicians] = useState("");
  const [music, setMusic] = useState("");
  const context = useContext(Context);
  const { addBaner, setAddBaner, deleteBaner, editBaner, setIsAddFormRecordsOpen } = context;
  console.log(musicians);
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
          musicians: musicians,
          music: music,
          description: values.description,
        });
        resetForm();
        setBaner(setAddBaner);
        setIsAddFormRecordsOpen(false);
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
                    <label htmlFor="description">Uwagi:</label>
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
                </StyledInputRow>
                <StyledInputRow>
                  <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                    <label htmlFor="musicians">Wykonawcy</label>
                    {/* <textarea id="musicians" cols="30" rows="10"></textarea> */}
                    <ReactQuill id="musicians" style={{ width: "100%", height: "200px" }} modules={modules} value={musicians} onChange={setMusicians} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                    <label htmlFor="music">Program</label>
                    {/* <textarea id="musicians" cols="30" rows="10"></textarea> */}
                    <ReactQuill id="music" style={{ width: "100%", height: "200px" }} modules={modules} value={music} onChange={setMusic} />
                  </div>
                </StyledInputRow>
                <StyledInputBox>
                  <StyledAddButton style={{ marginTop: "80px" }} type="submit">
                    Dodaj
                  </StyledAddButton>
                </StyledInputBox>
              </StyledForm>
              <StyledExitIcon onClick={() => setIsAddFormRecordsOpen(false)}>
                <FontAwesomeIcon className="icon-close" icon={faClose} />
              </StyledExitIcon>
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
