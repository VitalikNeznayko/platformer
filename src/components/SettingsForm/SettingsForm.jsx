import { Formik, Form, Field } from "formik";
import { SettingsSchema } from "../../validation/SettingsSchema";
import { useSettings } from "../../context/SettingsContext";
import { difficultyPresets } from "../../config/difficulty";
import Button from "../UI/Button/Button";

const SettingsForm = ({ onBack }) => {
  const { settings, setSettings } = useSettings();

  const initialValues = { ...settings };

  const handleSubmit = (values) => {
    setSettings(values);
    onBack();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SettingsSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, errors, touched }) => {
        const applyPreset = (difficulty) => {
          const preset = difficultyPresets[difficulty];
          if (!preset) return;

          Object.entries(preset).forEach(([key, value]) =>
            setFieldValue(key, value)
          );
        };

        return (
          <Form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <section>
              <h3>Difficulty</h3>

              {["easy", "normal", "hard", "custom"].map((d) => (
                <label key={d}>
                  <Field
                    type="radio"
                    name="difficulty"
                    value={d}
                    onClick={() => d !== "custom" && applyPreset(d)}
                  />
                  {d.charAt(0).toUpperCase() + d.slice(1)}
                </label>
              ))}
            </section>

            {values.difficulty === "custom" && (
              <section style={{ paddingLeft: 20 }}>
                <h3>Custom Settings</h3>

                <label>
                  <Field type="checkbox" name="coinsRequired" />
                  Coins required
                </label>

                <label>
                  <Field type="checkbox" name="timeLimited" />
                  Time limited
                </label>

                {values.timeLimited && (
                  <>
                    <Field type="number" name="timeLimit" min={5} max={600} />
                    {errors.timeLimit && touched.timeLimit && (
                      <div style={{ color: "red" }}>{errors.timeLimit}</div>
                    )}
                  </>
                )}
              </section>
            )}

            <div style={{ display: "flex", gap: 12 }}>
              <Button type="submit" text="Save" />
              <Button onClick={onBack} text="Back" />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SettingsForm;
