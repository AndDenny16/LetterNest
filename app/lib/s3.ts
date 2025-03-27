
type postOptions = {
    sender: string,
    receiver: string,
    fileType:string
}

type presignedResponse = {
    success: boolean,
    error?: string | null,
    url?: string,
    objectKey?:string
}

export async function fetchPresignedLink(postOptions:postOptions):Promise<presignedResponse>{

    try{
        const response = await fetch(`/api/recommendations/presignedurl`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(postOptions)
        });
        if (!response.ok){
            console.log("PRESIGNED URL RESPONSE Not Okay")
            return {"success": false, "error" : "Failed to Fetch Presigned Url"}
        }
        const resJson = await response.json();
        if (!resJson.url) {
            return {"success": false, "error" : "Failed to Fetch Presigned Url"}
        }

        return {"success": true, "url": resJson.url, "objectKey": resJson.objectKey}



    } catch (error:any) {
        console.log("ERROR FETCHING URL", error);
        return {"success": false, "url": ""}
    }

}