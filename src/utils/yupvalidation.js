import * as Yup from "yup";

export const validationSchemaArchive = Yup.object().shape({
  signature: Yup.string().required("Pole jest wymagane!"),
  date: Yup.string()
    .required("Pole jest wymagane!")
    .test("długość inputa jest równa 10", "Pole musi zawierać 10 znaków", (value) => value.length === 10),
  description: Yup.string(),
  tags: Yup.string(),
});

export const validationSchemaEdicts = Yup.object().shape({
  number: Yup.string().required("Pole jest wymagane!"),
  date: Yup.string()
    .required("Pole jest wymagane!"),
    // .test("długość inputa jest równa 10", "Pole musi zawierać 10 znaków", (value) => value.length === 10),
  title: Yup.string().required("Pole jest wymagane!"),
  toWhom: Yup.object().test("at least one is checked", "Przynajmniej jeden adresat musi być zaznaczony!", (toWhom) => {
    return Object.values(toWhom).some((whom) => whom === true);
  }),
  // file: Yup.string().required("Pole jest wymagane!")
});

export const changeEmptyString = (values) => {
  values.description = values.description === "" ? "brak szczegółów" : values.description;
  values.tags = values.tags === "" ? "brak szczegółów" : values.tags;
};
