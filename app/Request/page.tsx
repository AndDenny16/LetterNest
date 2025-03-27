import React from 'react'
import MainNavBar from '../components/MainNavBar'
import SignOutButton from '../components/SignOutButton'
import DownMenu from '../components/DownMenu'

const Request = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <MainNavBar/>
      <div className='flex flex-row overflow-hidden flex-grow'>
        <div className='h-full flex-shrink-0'>
          <DownMenu/>
        </div>
        <div className=' px-8 pb-12 overflow-y-auto h-full'>
        <h1 className="font-bold text-4xl text-green-800 items-center py-8 font-serif">Request</h1>
          <SignOutButton/>
        </div>

       

      </div>
     

        
    </div>
  )
}

export default Request