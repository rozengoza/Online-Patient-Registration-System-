import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link'
// import Header from '../../components/Header'
// import Footer from '../../components/Footer'
const Login = () => {
    const LoginSchema = Yup.object().shape({
        phoneNumber: Yup.number()
        .min(10,"Too Short!")
        .required('Required'),
        password: Yup.string()
        .required("Please enter a password")
        // check minimum characters
        .min(8, "Password must have at least 8 characters")
        // different error messages for different requirements
        .matches(/[0-9]/, "Password must include a digit!")
        .matches(/[a-z]/,"Password must include a lowercase character!")
        .matches(/[A-Z]/, "Password must include a uppercase character!"),
    });
    return(
        <>
        {/* <Header/> */}
      <div className='container'> 
      <div className="loginForm">
        <h2>Please Login</h2>
        <Formik
         initialValues={{
            phoneNumber: '',
           password:''
         }}
         validationSchema={LoginSchema}
         onSubmit={values => {
           // same shape as initial values
           alert(JSON.stringify(values))
           console.log(values);
         }}
       >
         {({ errors, touched }) => (
           <Form>
            <Field name="phoneNumber" placeholder="Phone Number"/>
          {errors.phoneNumber && touched.phoneNumber ? (
            <div>{errors.phoneNumber}</div>
          ) : null}<br/>
            <Field name="password" type="password" placeholder="Password." />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}<br/>
             <button type="submit">Login</button>
           </Form>
         )}
       </Formik>
        <p>Don't have an account? <Link href="/register">Sign up</Link></p>
      </div>
      </div>
      {/* <Footer/> */}
      </>
    )
  }

export default Login;