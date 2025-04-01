
import type { dynamoMetadata, generalReturnType } from "../../types";

export async function putDynamoMetaData(metadata:dynamoMetadata ): Promise<generalReturnType>{

    try{
        const response = await fetch('/api/recommendations/metadata',{
            method: 'POST',
            body: JSON.stringify(metadata)
            
        })
        const resJson = await response.json()
        if(!resJson.success){
            return {success: false}
        }
        return {success: true}

    }catch(error:any){
        console.log("Error", error.message)
        return {success: false}

    }

}