import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../ui/input';
import Button from '../ui/button';
import Paragraph from '../ui/paragraph';
import { CreateJourneyCtx } from '../../context/create-journey-context';

// TODO: implement reCAPTCHA to here.

const signupScheme = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  surname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string().required('Password is required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

function Signup() {
  const [, dispatch] = useContext(CreateJourneyCtx);
  return (
    <Formik
      initialValues={{
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          dispatch({ type: 'setActiveStep', step: 2 });
          setSubmitting(false);
        }, 400);
      }}
      validationSchema={signupScheme}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap md:flex-no-wrap">
            <Input
              containerClass="w-full md:w-6/12 md:pr-4"
              name="name"
              label="Name"
              value={values.name}
              onChange={handleChange}
              errors={touched.name && errors.name}
            />
            <Input
              containerClass="w-full md:w-6/12 md:pl-4"
              name="surname"
              label="Surname"
              value={values.surname}
              onChange={handleChange}
              errors={touched.surname && errors.surname}
            />
          </div>
          <Input
            type="email"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            errors={touched.email && errors.email}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            value={values.password}
            errors={touched.password && errors.password}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="passwordConfirmation"
            label="Confirm Password"
            value={values.passwordConfirmation}
            errors={touched.passwordConfirmation && errors.passwordConfirmation}
            onChange={handleChange}
          />
          {/* TODO: add checkbox here after pr comes. */}
          <div className="flex justify-between items-center mt-6">
            <Paragraph>
              Already have an account?{' '}
              <Button
                textColor="#66E5B8"
                className="py-0 px-0 sm:py-0 sm:px-0"
                noPadding
                variant="flat"
              >
                Log in
              </Button>
            </Paragraph>
            <Button
              variant="custom"
              textColor="#FFF"
              color="#66E5B8"
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto ml-auto uc-onboarding-signup-button"
            >
              SIGN UP
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default Signup;
