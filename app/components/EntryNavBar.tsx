'use client'

import Link from 'next/link'
import React from 'react'
const EntryNavBar = () => {

  return (
  <div className="navbar bg-base-100 text-white bg-green-800 justify-between flex border-green-800 border-b-2">
      <Link className="btn btn-ghost text-xl" href='/'>Letter Nest</Link>
  </div>
  )
}

export default EntryNavBar;