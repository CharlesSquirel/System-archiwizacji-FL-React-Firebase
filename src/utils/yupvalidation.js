import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  signature: Yup.string().required("Pole jest wymagane!"),
  date: Yup.string().required("Pole jest wymagane!")
  .test("dla wartości mniejszych od 10 input musi zaczynać się od 0", "Pole musi zaczynać się od 0", value => !value.match(/^[1-9]+\./))
  .test("długość inputa jest równa 10", "Pole musi zawierać 10 znaków", value => value.length === 10),
  description: Yup.string(),
  tags: Yup.string()
});

export const changeEmptyString = (values) => {
  values.description = values.description === "" ? "brak szczegółów" : values.description;
  values.tags = values.tags === "" ? "brak szczegółów" : values.tags;
}