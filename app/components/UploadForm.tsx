"use client"
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { useFetchPresigned } from '../Hooks/useFetchPresigned';
import { useFileUpload } from '../Hooks/useFileUpload';

const UploadForm = () => {
    const [studentEmail, setStudentEmail] = useState<string>("");
    const[uploadedFile, setUploadedFile] = useState<File| null>();
    const[localError, setLocalError] = useState<string| null>(null);
    const {loading, error, uploadRecommendation} = useFileUpload();
    const {data: session} = useSession();
    const sender = session?.user?.email || ""


    const uploadData = async() => {
      setLocalError(null);
      if (!studentEmail){
        setLocalError("Please Enter an Email")
        return
      }
      if (!uploadedFile){
        setLocalError("Please Enter a File")
        return
      }
      if (!sender){
        setLocalError("Session Expired")
        return
      }
      const uploadProps = {
        sender: sender,
        receiver: studentEmail,
        fileType: uploadedFile.type,
        reason: "Bc hes swag"
      }

      const response = await uploadRecommendation(uploadProps, uploadedFile)


    }
   

  return (
    <div>
        <h1 className="font-bold text-4xl text-green-800 items-center pb-6 font-serif">Upload A Recommendation</h1>
            <div className='flex-col flex'>
              <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs my-4" 
              onChange={(e)=> setUploadedFile(e.target.files?.[0] || null)}
              required
              />
              <input type="text" className="input input-bordered input-success w-full max-w-xs my-4"  
              placeholder="Student's Email"
              onChange ={(e) => setStudentEmail(e.target.value)}
              required
              />
              <input type="text" className="input input-bordered input-success w-full max-w-xs my-4"  placeholder="Reason"/>
            </div>
          <button  onClick={() => {uploadData()}}className='btn bg-green-800 text-white'> Upload ! </button>
          {localError && <h2>{localError}</h2>}
          {loading && <h2>Loading .... </h2>}
          {error && <h2>{error}</h2>}

    </div>
  )
}

export default UploadForm