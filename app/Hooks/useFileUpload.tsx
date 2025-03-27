
import React, {useState} from 'react';
import { fetchPresignedLink } from '../lib/s3';
import type { postOptionsType, uploadResultType } from '@/types';
import { putDynamoMetaData } from '../lib/db';


type fileUploadReturn = {
    loading: boolean,
    error: string | null,
    uploadRecommendation: (fileUploadProps: postOptionsType, file: File) => Promise<uploadResultType>;
}


export function useFileUpload(): fileUploadReturn {

    const [loading, setLoading ] = useState<boolean>(false);
    const [ error, setError ] = useState<string | null>("");

    const uploadRecommendation = async(postOptions:postOptionsType, file:File ): Promise<uploadResultType>=> {
        //Set State
        setLoading(true);
        setError(null);
        try {
            //Generate Presigned Url from Backend
            const preSignedResponse = await fetchPresignedLink(postOptions)
            console.log("inside client", preSignedResponse)
            if (!preSignedResponse.success || !preSignedResponse.url || !preSignedResponse.objectKey){
                throw new Error("PreSigned Url Generation Failed")

            }
            //Get Needed Info from Response
            const presignedUrl = preSignedResponse.url;
            const s3Key = preSignedResponse.objectKey
            console.log('presignedUrl', presignedUrl);
            console.log("file Type", file.type);
            //Direct Put from Frontend
            const s3Response = await fetch(presignedUrl, {
                method: 'PUT',
                headers: {
                    "Content-Type": file.type,
                },
                body: file
            })
            if (!s3Response.ok){
                const errorText = await s3Response.text();
                throw new Error(errorText || "Upload Failed");
            }

            const metadata = {
                ...postOptions,
                s3Key: s3Key,
            }

            // Add Metadata to Dynamo DB
            const response = await putDynamoMetaData(metadata)
            if (!response.success){
                console.log(response.error)
                throw new Error(response.error);
            }
            console.log("returning");
            return {"success": true}

        } catch (error:any) {
            console.log("Error Uploading Document", error.message);
            setError("Failed to Upload Recommendation");
            return {"success": false}
        } finally {
            setLoading(false);
        }
    }
    return {loading, error, uploadRecommendation}
}
