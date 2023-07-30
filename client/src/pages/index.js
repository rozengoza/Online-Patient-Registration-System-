import React from 'react'
import {useSelector} from 'react-redux'
import Home from './home/index'
import NavBar from '../components/Header'

const UnAuthenticatedPages =() => {
  // const  {fullName} = useSelector(state=>state.users)
  return <Login/>
}

 const AuthenticatedPages =() =>{
  return(
  <> <NavBar/>
    <Home/>
  </>
  )
 }

 const index = () =>{
return(
  <div>
  <AuthenticatedPages/>
  </div>
)
 }
 

// export default 