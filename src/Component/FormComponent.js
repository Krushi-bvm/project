// FormComponent.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Dummy API function for testing
const submitFormData = async (formData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate successful response
  return { success: true };
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const FormComponent = () => {
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    console.log(values,'values')
    try {
      const response = await submitFormData(values);

      console.log(response); // Log the response from the dummy API
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to submit form' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
          {/* <label htmlFor="name">Name:</label>
<Field type="text" id="name" name="name" /> */}
    <label htmlFor="name">Name:</label>
      <Field type="text" id="name" name="name" aria-label="Name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" id="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
