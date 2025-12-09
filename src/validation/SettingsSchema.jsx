import * as Yup from "yup";

export const SettingsSchema = Yup.object().shape({
  difficulty: Yup.string()
    .oneOf(["easy", "normal", "hard", "custom"])
    .required(),

  coinsRequired: Yup.boolean(),

  timeLimited: Yup.boolean(),
  timeLimit: Yup.number().when("timeLimited", {
    is: true,
    then: (s) => s.required("Enter time in seconds").min(5).max(600),
    otherwise: (s) => s.notRequired(),
  }),

  oneLife: Yup.boolean(),
});
