'use client'

import React from 'react'
import { signIn, signOut } from 'next-auth/react'

const SignInButton = () => {
  return (
    <button className = "btn bg-green-800 text-white"onClick={() => signIn("cognito", { callbackUrl: "/Home" })}>Sign In</button>
  )
}

export default SignInButton