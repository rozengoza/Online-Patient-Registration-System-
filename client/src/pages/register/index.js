import React from 'react'
import Link from 'next/link'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'
import Banner from '../../../public/banner.png'
import { Button, message } from 'antd';

const Register = () => {
  const router =useRouter()
  const [msg, contextHolder] = message.useMessage(); 
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
return(
  <>
  {contextHolder}
  <Header/>
<div className='container'> 
<div className='banner'>
<a href='/'><Image src={Banner} alt="Picture of the author"/></a>
</div>

  <div className='signupForm'>
    
    <h1 id="signupText">Create Your Account.</h1>
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
        const {confirmPassword, ...formFields}=values 
        // alert(JSON.stringify(allOtherItems))
        // console.log(allOtherItems);
        const requestOptions= {
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formFields),
        }
        // alert("Your account has been created successfully.")
        
        
        try{
         const data = await fetch('http://localhost:4000/register',requestOptions)
          console.log("User Registered Successfully")
          msg.info('Your account has been created successfully.')
          router.push('./login')
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

          <button id="register-btn" type="submit">Register</button>
          
        </Form>
      )}
    </Formik>
      <p>Already have an account? <Link href='/login'>Login</Link> </p>
  </div>
  </div>
  <Footer/>
  </>
);
}


export default Register
// export default Login

// frontend bata kasari  data pathaune 
// folder based routing in Next Js
