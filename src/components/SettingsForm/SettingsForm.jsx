import { Formik, Form, Field, useFormikContext } from "formik";
import { SettingsSchema } from "../../validation/SettingsSchema";
import { useSettings } from "../../context/SettingsContext";
import { difficultyPresets } from "../../config/difficulty";
import Button from "../UI/Button/Button";
import { useEffect } from "react";
import styles from "./SettingsForm.module.css";

const PresetSync = () => {
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    const preset = difficultyPresets[values.difficulty];
    if (preset) {
      Object.entries(preset).forEach(([key, value]) =>
        setFieldValue(key, value, false)
      );
    }
  }, [values.difficulty, setFieldValue]);

  return null;
};

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
      {({ values, errors, touched }) => (
        <Form className={styles.form}>
          <PresetSync />

          <div className={styles.sections}>
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Difficulty</h3>

              <div className={styles.radioGroup}>
                {["easy", "normal", "hard", "custom"].map((d) => (
                  <label key={d}>
                    <Field type="radio" name="difficulty" value={d} />{" "}
                    {d.charAt(0).toUpperCase() + d.slice(1)}
                  </label>
                ))}
              </div>
            </section>

              <section className={styles.customSection}>
                <h3 className={styles.sectionTitle}>Custom Settings</h3>

                <div className={styles.checkboxGroup}>
                  <label>
                    <Field type="checkbox" name="coinsRequired" /> Coins
                    required
                  </label>

                  <label>
                    <Field type="checkbox" name="timeLimited" /> Time limited
                  </label>
                </div>

                {values.timeLimited && (
                  <>
                    <Field
                      type="number"
                      name="timeLimit"
                      min={5}
                      max={600}
                      placeholder="Time in seconds"
                      className={styles.numberInput}
                    />

                    {errors.timeLimit && touched.timeLimit && (
                      <div className={styles.errorText}>{errors.timeLimit}</div>
                    )}
                  </>
                )}
              </section>
          </div>

          <div className={styles.buttons}>
            <Button type="submit" text="Save" />
            <Button onClick={onBack} text="Back" />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SettingsForm;
