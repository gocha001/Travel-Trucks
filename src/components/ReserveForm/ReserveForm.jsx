import css from "./ReserveForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const ReserveForm = () => {
  const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    date: Yup.date()
      .required("Required")
      .max(new Date(), "The date cannot be in the future."),
    comment: Yup.string().max(300, "Maximum 300 characters"),
  });

  const onSubmit = (values, options) => {
    options.resetForm();
  };

  return (
    <div className={css.reserveFormContainer}>
      <div className={css.titleCont}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.subTitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className={css.form}>
            <div className={css.fields}>
              <Field
                type="text"
                name="name"
                placeholder="Name*"
                className={css.field}
              />
              <ErrorMessage name="name" component="div" className={css.error} />
              <Field
                type="email"
                name="email"
                placeholder="Email*"
                className={css.field}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
              <Field
                type="text"
                name="date"
                placeholder="Booking date*"
                className={css.field}
              />
              <ErrorMessage name="date" component="div" className={css.error} />
              <Field
                as="textarea"
                name="comment"
                rows="4"
                placeholder="Comment:"
                className={css.textArea}
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={css.error}
              />
            </div>
            <button type="submit" className={css.reserveBtn}>
              Send
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
