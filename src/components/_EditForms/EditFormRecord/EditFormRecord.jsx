import React, { useContext, useState } from "react";
import { Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { changeEmptyString, validationSchemaRecords } from "../../../utils/yupvalidation";
import { ref, update } from "firebase/database";
import { db, readFromDb } from "../../../utils/firebase";
import {
  StyledInputBox,
  StyledInput,
  ErrorMessage,
  StyledFormWrapper,
  StyledForm,
  StyledSelectRecords,
  StyledInputRow,
  StyledAddButton,
  StyledExitIcon,
} from "../../GlobalStyle/GlobalComponents.jsx";
import { Context } from "../../../Root";
import { setBaner } from "../../../utils/setBaner";
import ReactQuill from "react-quill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const modules = {
  toolbar: [["bold", "italic"]],
};

function EditFormRecord() {
  const context = useContext(Context);
  const { credentialsRecord, setCredentialsRecord, setEditBaner } = context;
  const location = useLocation();
  const dataToEdit = location.state.data;
  const indexOfEditedData = location.state.index;
  const navigate = useNavigate();
  const [musicians, setMusicians] = useState(dataToEdit.musicians);
  const [music, setMusic] = useState(dataToEdit.music);

  return (
    <Formik
      initialValues={dataToEdit}
      validationSchema={validationSchemaRecords}
      onSubmit={(values) => {
        changeEmptyString(values);
        const toUptade = Object.keys(credentialsRecord)[indexOfEditedData];
        update(ref(db, `files/records/0/${toUptade}`), {
          date: values.date,
          title: values.title,
          type: values.type,
          description: values.description,
          musicians: musicians,
          music: music,
        });
        readFromDb("records/0", setCredentialsRecord);
        navigate("/record");
        setBaner(setEditBaner);
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
                    <ReactQuill id="musicians" style={{ width: "100%", height: "200px" }} modules={modules}  value={musicians} onChange={setMusicians}/>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                    <label htmlFor="music">Program</label>
                    <ReactQuill id="music" style={{ width: "100%", height: "200px" }} modules={modules} value={music} onChange={setMusic} />
                  </div>
                </StyledInputRow>
                <StyledInputBox>
                  <StyledAddButton style={{ marginTop: "80px" }} type="submit">
                    Dodaj
                  </StyledAddButton>
                </StyledInputBox>
              </StyledForm>
              <StyledExitIcon onClick={() => navigate("/record")}>
                <FontAwesomeIcon className="icon-close" icon={faClose} />
              </StyledExitIcon>
            </StyledFormWrapper>
          </>
        );
      }}
    </Formik>
  );
}

export default EditFormRecord;
