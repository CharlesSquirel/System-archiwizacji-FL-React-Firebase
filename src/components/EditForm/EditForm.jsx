import React from "react";
import { StyledAddForm } from "../AddForm/StyledAddForm";
import { Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { validationSchema } from "../../utils/yupvalidation";
import { ref, update } from "firebase/database";
import { db } from "../../utils/firebase";

function EditForm() {
  const location = useLocation();
  const dataToEdit = location.state.data;
  const indexOfEditedData = location.state.index;
  const credentials = location.state.credentials;
  // const setCredentials = location.state.setCredentials;

  let navigate = useNavigate();

  return (
    <Formik
      initialValues={dataToEdit}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const toUptade = Object.keys(credentials)[indexOfEditedData];
        update(ref(db, `files/${toUptade}`), values);
        navigate("/");
        // chwilowe rozwiązanie
        window.location.reload(false)
      }}
    >
      {(formik) => {
        const { errors, touched, handleSubmit } = formik;
        return (
          <StyledAddForm>
            <form className="form" onSubmit={handleSubmit}>
              <div className="input-box">
                <label htmlFor="signature">Sygnatura:</label>
                <input id="singature" name="signature" className="input" autoComplete="off" {...formik.getFieldProps("signature")}></input>
                {touched.signature && errors.signature && <p className="error">{errors.signature}</p>}
              </div>
              <div className="input-box">
                <label htmlFor="date">Data:</label>
                <input id="date" name="date" className="input" autoComplete="off" {...formik.getFieldProps("date")}></input>
                {touched.date && errors.date && <p className="error">{errors.date}</p>}
              </div>
              <div className="input-box">
                <label htmlFor="description">Opis:</label>
                <input id="description" name="description" className="input" autoComplete="off" {...formik.getFieldProps("description")}></input>
                {touched.description && errors.description && <p className="error">{errors.description}</p>}
              </div>
              <div className="input-box">
                <label htmlFor="tags">Tagi:</label>
                <input id="tags" name="tags" className="input" autoComplete="off" {...formik.getFieldProps("tags")}></input>
                {touched.tags && errors.tags && <p className="error">{errors.tags}</p>}
              </div>
              <div className="input-box">
                <label htmlFor="btn">Akcje:</label>
                <button id="btn" type="submit" className="btn">
                  Zmień
                </button>
              </div>
            </form>
          </StyledAddForm>
        );
      }}
    </Formik>
  );
}

export default EditForm;
