'use client'

import { redirect } from 'next/dist/server/api-utils';
import React, {useEffect, useRef, useState} from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { METHODS } from 'http';
import { signIn } from 'next-auth/react';
import EntryNavBar from '../components/EntryNavBar';

const Confirm = () => {
  const searchParams = useSearchParams()
  const router = useRouter();
  const username = searchParams.get("email") as string;
  const confirmationCode = useRef("");
  

  const submitCode = async() => {
    const response = await fetch(`/api/auth/verification`, {
      method: "POST",
      body: JSON.stringify({"username": username, "confirmationCode": confirmationCode.current})
    }
    )
    if (response.ok){
      signIn(undefined, {username, callbackUrl: '/Home'})
    }

  }


  return (
    <div className='min-h-screen flex flex-col items-center '>
      <EntryNavBar/>
      <div className='flex flex-col items-center my-10 justify-evenly min-h-64'>
        <div className='flex flex-col items-center'>
        <h1>Welcome {username ?? ""}</h1>
        <h3>Check Your Email For the Code!</h3>
        </div>
    
        <input type="text"
                  placeholder="Confirmation Code"
                  className="input input-bordered input-success w-full max-w-xs"
                  onChange = {(e) => confirmationCode.current = e.target.value} />
        <button className='btn bg-green-800 text-white' onClick={()=> submitCode()}> Confirm </button>
      </div>
      
    </div>
  )
}

export default Confirm