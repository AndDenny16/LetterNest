import React from 'react'
import SignUpBox from '../components/SignUpBox'
import EntryNavBar from '../components/EntryNavBar'

const SignUp = () => {
  return (
    <div className= 'min-h-screen flex flex-col items-center'>
    <EntryNavBar/>
    <div className='items-center flex my-20'>
      <SignUpBox/>
    </div>

      
  </div>
  )
}

export default SignUp