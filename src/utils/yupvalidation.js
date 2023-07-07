import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  signature: Yup.string().required("Pole jest wymagane!"),
  date: Yup.string().required("Pole jest wymagane!"),
  description: Yup.string(),
  // .required("Pole jest wymagane!"),
  tags: Yup.string()
  // .required("Pole jest wymagane!"),
});

export const changeEmptyString = (values) => {
  values.description = values.description === "" ? "brak szczegółów" : values.description;
  values.tags = values.tags === "" ? "brak szczegółów" : values.tags;
}