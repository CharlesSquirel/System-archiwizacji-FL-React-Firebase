import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  signature: Yup.string().required("Pole jest wymagane!"),
  date: Yup.string().required("Pole jest wymagane!"),
  description: Yup.string().required("Pole jest wymagane!"),
  tags: Yup.string().required("Pole jest wymagane!"),
});
