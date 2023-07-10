import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  signature: Yup.string().required("Pole jest wymagane!"),
  date: Yup.string().required("Pole jest wymagane!")
  .test("długość inputa jest równa 10", "Pole musi zawierać 10 znaków", value => value.length === 10),
  description: Yup.string(),
  tags: Yup.string()
});

export const changeEmptyString = (values) => {
  values.description = values.description === "" ? "brak szczegółów" : values.description;
  values.tags = values.tags === "" ? "brak szczegółów" : values.tags;
}