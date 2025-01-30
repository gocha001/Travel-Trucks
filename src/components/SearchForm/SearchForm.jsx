import css from "./SearchForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { equipmentOptions } from "../../data/equipmentOptions";
import EquipmentField from "../EquipmentField/EquipmentField";
import CustomRadioGroup from "../CustomRadioGroup/CustomRadioGroup";
import { formOptions } from "../../data/formOptions";

export const SearchForm = () => {
  const initialValues = {
    location: "",
    form: "",
    equipment: [],
  };

  const validationSchema = Yup.object({
    location: Yup.string().required("Required").min(2, "Minimum 2 symbols"),
    form: Yup.string().required("Choose a form"),
    equipment: Yup.array()
      .min(1, "Select at least one device")
      .required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={css.searchContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={css.form}>
          <div className={css.locationCont}>
            <label className={css.inputLabel} htmlFor="location">
              Location
            </label>
            <div className={css.inputCont}>
              <svg width="20" height="20" className={css.map}>
                <use href="/src/assets/icons/catalog/icon-map.svg#icon-Map" />
              </svg>
              <Field
                type="text"
                id="location"
                name="location"
                placeholder="City"
                className={css.input}
              />
            </div>
            <ErrorMessage
              name="location"
              component="div"
              className={css.error}
            />
          </div>

          <h3 className={css.subTitle}>Filters</h3>
          <h2 className={css.title}>Vehicle equipment</h2>
          <hr />

          <div className={css.checkboxGroup}>
            {equipmentOptions.map(({ id, label, value, icon }) => (
              <EquipmentField
                key={id}
                id={id}
                label={label}
                value={value}
                icon={icon}
              />
            ))}
            <ErrorMessage
              name="equipment"
              component="div"
              className={css.error}
            />
          </div>

          <h2 className={css.title}>Vehicle type</h2>
          <hr />

          <Field
            name="form"
            component={CustomRadioGroup}
            options={formOptions}
          />
          <ErrorMessage name="form" component="div" className={css.error} />

          <button className={css.formBtn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};
