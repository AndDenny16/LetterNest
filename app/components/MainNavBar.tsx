'use client'

import Link from 'next/link'
import React from 'react'
import { Upload, User } from 'lucide-react'
import Image from 'next/image'
import LogoImage from '@/public/logo3.png'
const MainNavBar = () => {

  return (
  <div className="flex items-center bg-green-800 text-white justify-between flex p-0 min-h-20">
      <Link className="btn btn-ghost text-4xl font-serif" href='/Home'>
      <Image src={LogoImage} className= "h-12 w-12 mb-2" alt= "logo"/>
      Letter Nest
      </Link>
      <div className="flex justify-end">
        <Link className="btn btn-ghost text-l text-white" href='/Upload'><User size = {30} />Andrew</Link>

      </div>
     

  </div>
  )
}

export default MainNavBar