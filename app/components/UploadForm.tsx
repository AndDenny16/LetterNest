"use client"
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { useFileUpload } from '../Hooks/useFileUpload';

const UploadForm = () => {
    const [studentEmail, setStudentEmail] = useState<string>("");
    const[uploadedFile, setUploadedFile] = useState<File| null>();
    const[reason, setReason] = useState<string>("");

    const[localMessage, setLocalMessage] = useState<string| null>(null);
    const {loading, error, uploadRecommendation} = useFileUpload();
    const {data: session} = useSession();
    const sender = session?.user?.email || ""


    const uploadData = async() => {
      setLocalMessage(null);
      if (!studentEmail){
        setLocalMessage("Please Enter an Email")
        return
      }
      if (!uploadedFile){
        setLocalMessage("Please Enter a File")
        return
      }
      if (!sender){
        setLocalMessage("Session Expired")
        return
      }
      const uploadProps = {
        postSenderEmail: sender,
        postReceiverEmail: studentEmail,
        postFileType: uploadedFile.type,
        postReason: reason
      }

      const response = await uploadRecommendation(uploadProps, uploadedFile)
      if (response.success){
        setLocalMessage("Upload Success")
        setUploadedFile(null);
        setReason("")
        setStudentEmail("")
      }

    }
   
  console.log(studentEmail)

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
              value={studentEmail}
              />
              <input type="text" 
              className="input input-bordered input-success w-full max-w-xs my-4"  
              placeholder="Reason"
              onChange = {(e) => setReason(e.target.value)}
              value={reason}
              
              />
            </div>
          <button  onClick={() => {uploadData()}}className='btn bg-green-800 text-white'> Upload ! </button>
          {loading && <h2>Loading .... </h2>}
          {error && <h2>{error}</h2>}
          {localMessage && <h2>{localMessage}</h2>}

    </div>
  )
}

export default UploadForm