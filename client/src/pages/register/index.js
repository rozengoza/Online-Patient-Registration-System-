import React from 'react'
import Link from 'next/link'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.number()
    .min(10,"Too Short!")
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
  <div className="signupForm">
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
        //Perform REST operation to remove confirmPassword being pushed
        const {confirmPassword, ...allOtherItems}=values 
        alert(JSON.stringify(allOtherItems))
        console.log(allOtherItems);

        
        try{
          await fetch('http://localhost:4000/register',{
            method:'POST',
            headers:{
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(allOtherItems),
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
          <Field name="fullName" placeholder="Full Name" />
          {errors.fullName && touched.fullName ? (
            <div>{errors.fullName}</div>
          ) : null}<br/>
          <Field name="phoneNumber" placeholder="Phone Number"/>
          {errors.phoneNumber && touched.phoneNumber ? (
            <div>{errors.phoneNumber}</div>
          ) : null}<br/>
          <Field name="email" type="email" placeholder="Email Address" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}<br/>
          <Field name="password" type="password" placeholder="Password." />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}<br/>
          <Field name="confirmPassword" type="password" placeholder="Re-enter Password." />
          {errors.confirmPassword && touched.confirmPassword ? (
            <div>{errors.confirmPassword}</div>
          ) : null}<br/>
          <Field name="mode" placeholder="Login Mode" />
          {errors.mode && touched.mode ? (
            <div>{errors.mode}</div>
          ) : null}<br/>
          <Field name="age" placeholder="Enter your Age"/>
          {errors.age && touched.age ? (
            <div>{errors.age}</div>
          ) : null}<br/>
          <Field name="gender" placeholder="Gender"/>
          {errors.gender && touched.gender ? (
            <div>{errors.gender}</div>
          ) : null}<br/>
          <Field name="city"placeholder="Address" />
          {errors.city && touched.city ? (
            <div>{errors.city}</div>
          ) : null}<br/>

          <button type="submit">Register</button>
          <p>Already have an account? <Link href='/login'>Login</Link> </p>
          
        </Form>
      )}
    </Formik>
  </div>
);


export default RegisterSchema
// export default Login

// frontend bata kasari  data pathaune 
// folder based routing in Next Js
