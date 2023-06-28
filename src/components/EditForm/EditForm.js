import { Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { StyledAddForm } from "../AddForm/StyledAddForm";
import axios from "axios";


const validationSchema = Yup.object().shape({
  signature: Yup.string().required("Pole jest wymagane!"),
  date: Yup.string().required("Pole jest wymagane!"),
  description: Yup.string().required("Pole jest wymagane!"),
  tags: Yup.string().required("Pole jest wymagane!"),
});

function EditForm() {
  const location = useLocation();
  const data = location.state;
  let navigate = useNavigate();

  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const uptadeData = async(id) => {
          await axios.patch(`http://localhost:3000/data/${id}`, values)
        }
        uptadeData(values.id)
        navigate("/")
      }}
    >
      {(formik) => {
        const { errors, touched, handleSubmit } = formik;
        return (
          <StyledAddForm>
            <form className="form" onSubmit={handleSubmit}>
              <div className="input-box">
                <label htmlFor="signature">Sygnatura:</label>
                <input
                  id="singature"
                  name="signature"
                  className="input"
                  autoComplete="off"
                  {...formik.getFieldProps("signature")}
                ></input>
                {touched.signature && errors.signature && <p className="error">{errors.signature}</p>}
              </div>
              <div className="input-box">
                <label htmlFor="date">Data:</label>
                <input id="date" name="date" className="input" autoComplete="off" {...formik.getFieldProps("date")}></input>
                {touched.date && errors.date && <p className="error">{errors.date}</p>}
              </div>
              <div className="input-box">
                <label htmlFor="description">Opis:</label>
                <input
                  id="description"
                  name="description"
                  className="input"
                  autoComplete="off"
                  {...formik.getFieldProps("description")}
                ></input>
                {touched.description && errors.description && <p className="error">{errors.description}</p>}
              </div>
              <div className="input-box">
                <label htmlFor="tags">Tagi:</label>
                <input
                  id="tags"
                  name="tags"
                  className="input"
                  autoComplete="off"
                  {...formik.getFieldProps("tags")}
                ></input>
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
