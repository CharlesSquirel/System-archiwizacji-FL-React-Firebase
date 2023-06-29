import { StyledAddForm } from "./StyledAddForm";
import { Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { writeToDB } from "../../firebase";
const initialValues = {
  signature: "",
  date: "",
  description: "",
  tags: "",
};

const validationSchema = Yup.object().shape({
  signature: Yup.string().required("Pole jest wymagane!"),
  date: Yup.string().required("Pole jest wymagane!"),
  description: Yup.string().required("Pole jest wymagane!"),
  tags: Yup.string().required("Pole jest wymagane!"),
});

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
            <form className="form" onSubmit={handleSubmit}>
              <div className="input-box">
                <label htmlFor="signature">Sygnatura:</label>
                <input id="singature" name="signature" className="input" placeholder="DA..." autoComplete="off" {...formik.getFieldProps("signature")}></input>
                {touched.signature && errors.signature && <p className="error">{errors.signature}</p>}
              </div>
              <div className="input-box">
                <label htmlFor="date">Data:</label>
                <input id="date" name="date" className="input" placeholder="01.01.2023" autoComplete="off" {...formik.getFieldProps("date")}></input>
                {touched.date && errors.date && <p className="error">{errors.date}</p>}
              </div>
              <div className="input-box">
                <label htmlFor="description">Opis:</label>
                <input id="description" name="description" className="input" placeholder="Opis..." autoComplete="off" {...formik.getFieldProps("description")}></input>
                {touched.description && errors.description && <p className="error">{errors.description}</p>}
              </div>
              <div className="input-box">
                <label htmlFor="tags">Tagi:</label>
                <input id="tags" name="tags" className="input" placeholder="symfoniczny, Mozart,.." autoComplete="off" {...formik.getFieldProps("tags")}></input>
                {touched.tags && errors.tags && <p className="error">{errors.tags}</p>}
              </div>
              <div className="input-box">
                <label htmlFor="btn">Akcje:</label>
                <button id="btn" type="submit" className="btn">
                  Dodaj
                  <FontAwesomeIcon className="icon" icon={faPlus} />
                </button>
              </div>
            </form>
          </StyledAddForm>
        );
      }}
    </Formik>
  );
}

export default AddForm;