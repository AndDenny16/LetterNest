import React from 'react'
import EntryNavBar from '../components/EntryNavBar'
import LoginBox from '../components/LoginBox';



const SignIn = () => {
  return (
    <div className= 'min-h-screen flex flex-col items-center'>
        <EntryNavBar/>
        <div className='items-center flex my-20'>
          <LoginBox/>
        </div>
    
          
      </div>
  )
}

export default SignIn