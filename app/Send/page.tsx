import React from 'react'
import MainNavBar from '../components/MainNavBar'
import DownMenu from '../components/DownMenu'

const Send = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <MainNavBar/>
      <div className='flex flex-row flex-grow overflow-hidden'>
        <div className='h-full flex-shrink-0'>
          <DownMenu/>
        </div>
        <div className='w-full px-8 pb-12 overflow-y-auto h-full'>
          <h1 className='font-bold text-4xl text-green-800 items-center py-8 font-serif'>Send</h1>
        
        </div>

      </div>
      
      
      
       
        
    </div>
  )
}

export default Send