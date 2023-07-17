import React from 'react'
import { Link } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.number()
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
  .required("Please enter a password")
  // check minimum characters
  .min(8, "Password must have at least 8 characters")
  // different error messages for different requirements
  .matches(/[0-9]/, "Password must include a digit!")
  .matches(/[a-z]/,"Password must include a lowercase character!")
  .matches(/[A-Z]/, "Password must include a uppercase character!"),
  confirmPassword: Yup.string()
  .required("Please enter a password")
  // check minimum characters
  .min(8, "Password must have at least 8 characters")
  // different error messages for different requirements
  .matches(/[0-9]/, "Password must include a digit!")
  .matches(/[a-z]/,"Password must include a lowercase character!")
  .matches(/[A-Z]/, "Password must include a uppercase character!")
  .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  mode: Yup.string()
  .required('Required!'),
  age: Yup.number()
  .required('Required!'),
  gender: Yup.string()
  .required('Required!'),
  city: Yup.string()
  .required('Required!'),

});

export const RegisterSchema = () => (
  <div className="SignUpForm">
    <h1>Signup</h1>
    <Formik
      initialValues={{
        fullName: '',
        phoneNumber: '',
        email: '',
        password:'',
        mode:'Patient',
        age:'',
        gender:'',
        city:''
      }}
      validationSchema={SignupSchema}
      onSubmit={async values => {
        // same shape as initial values
        console.log(values);
        try{
          await fetch('http://localhost:4000/register',{
            method:'POST',
            headers:{
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
          console.log("User Registered Successfully")
        }
        catch(err){
          console.log("User Registration Failed")
        }
      }}

    >
      {({ errors, touched }) => (
        <Form>
          <Field name="fullName" />
          {errors.fullName && touched.fullName ? (
            <div>{errors.fullName}</div>
          ) : null}<br/>
          <Field name="phoneNumber" />
          {errors.phoneNumber && touched.phoneNumber ? (
            <div>{errors.phoneNumber}</div>
          ) : null}<br/>
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}<br/>
          <Field name="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}<br/>
          <Field name="confirmPassword" />
          {errors.confirmPassword && touched.confirmPassword ? (
            <div>{errors.confirmPassword}</div>
          ) : null}<br/>
          <Field name="mode" />
          {errors.mode && touched.mode ? (
            <div>{errors.mode}</div>
          ) : null}<br/>
          <Field name="age" />
          {errors.age && touched.age ? (
            <div>{errors.age}</div>
          ) : null}<br/>
          <Field name="gender" />
          {errors.gender && touched.gender ? (
            <div>{errors.gender}</div>
          ) : null}<br/>
          <Field name="city" />
          {errors.city && touched.city ? (
            <div>{errors.city}</div>
          ) : null}<br/>

          <button type="submit">Submit</button>
          
        </Form>
      )}
    </Formik>
  </div>
);


export default RegisterSchema
// export default Login

// frontend bata kasari  data pathaune 
// folder based routing in Next Js
