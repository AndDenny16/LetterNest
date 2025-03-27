
import React from 'react'
import MainNavBar from '../components/MainNavBar'
import DownMenu from '../components/DownMenu'
import { getServerSession } from 'next-auth';
import UploadForm from '../components/UploadForm';

const Upload: React.FC = () => {


  return (
    <div className="h-screen w-screen flex flex-col">
      <MainNavBar />
      <div className="flex flex-row flex-grow overflow-hidden">
        <div className="h-full flex-shrink-0">
          <DownMenu />
        </div>
        <div className=' w-full py-8 px-6 flex-shrink-0 overflow-y-auto'>
          <UploadForm />
            
        </div>
    </div>
    </div>
  )
}

export default Upload