import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './CamperForm.module.css';

const CamperForm = () => {
  // Схема валідації Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    bookingDate: Yup.date().nullable().required('Booking date is required'),
    comment: Yup.string(),
  });

  const initialValues = {
    name: '',
    email: '',
    bookingDate: null,
    comment: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form Data:', values);
    // Тут логіка відправки, наприклад dispatch екшену
    alert('Booking successful!');
    resetForm();
  };

  return (
    <div className={css.form_container}>
      <h3 className={css.form_title}>Book your campervan now</h3>
      <p className={css.form_subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, errors, touched }) => (
          <Form className={css.form}>
            <div className={css.field_wrapper}>
              <Field
                name="name"
                placeholder="Name*"
                className={`${css.input} ${errors.name && touched.name ? css.input_error : ''}`}
              />
              <ErrorMessage
                name="name"
                component="span"
                className={css.error_text}
              />
            </div>

            <div className={css.field_wrapper}>
              <Field
                name="email"
                type="email"
                placeholder="Email*"
                className={`${css.input} ${errors.email && touched.email ? css.input_error : ''}`}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.error_text}
              />
            </div>

            <div className={css.field_wrapper}>
              <DatePicker
                selected={values.bookingDate}
                onChange={date => setFieldValue('bookingDate', date)}
                placeholderText="Booking date*"
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                className={`${css.input} ${errors.bookingDate && touched.bookingDate ? css.input_error : ''}`}
              />
              <ErrorMessage
                name="bookingDate"
                component="span"
                className={css.error_text}
              />
            </div>

            <div className={css.field_wrapper}>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={css.textarea}
              />
            </div>

            <button type="submit" className={css.submit_btn}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CamperForm;
