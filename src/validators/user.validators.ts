import { regex } from '@/shared/enums/global';
import * as yup from 'yup';

export const emailValidationSchema = yup.object({
  email: yup.string().trim().required('Please Provide registered email id.'),
});

export const signInValidationSchema = yup
  .object({
    password: yup.string().required('Please enter your password.'),
  })
  .concat(emailValidationSchema);

export const userVerificationSchema = yup.object({
  code: yup.string().required(),
});

export const signUpValidationSchema = yup.object().shape({
  name: yup.string().required('Name is required').trim(),
  email: yup
    .string()
    .trim()
    .matches(regex.emailRegex, 'Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .required('Please enter your password')
    .matches(regex.strongPassword, 'Provide a strong password'),
  confirmPassword: yup
    .string()
    .required('Password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});
