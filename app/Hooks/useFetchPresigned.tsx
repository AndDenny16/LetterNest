import { useState } from "react";

type presignedReturn = {
    loading: boolean,
    error: string | null,
    fetchPresignedLink: (path: string, postOptions: postOptions) => Promise<string | undefined >;
}

type postOptions = {
    sender: string,
    receiver: string,
    fileType:string
}


export function useFetchPresigned(): presignedReturn{
    const [loading, setLoading ] = useState<boolean>(false);
    const [ error, setError ] = useState<string | null>(null);


    const fetchPresignedLink = async(path:string, postOptions:postOptions ) => {
        setLoading(true);
        setError(null);

        try{
            const response = await fetch(`/api/${path}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(postOptions)
            });
            if (!response.ok){
                const result = await response.json();
                throw new Error(result.error);
            }

            const resJson = await response.json();
            console.log("INSIDE HOOK", resJson);
            if (!resJson.url) {
                throw new Error("No presigned URL returned");
            }

            return resJson.url



        } catch (error:any) {
            console.log("ERROR FETCHING URL", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, fetchPresignedLink }


}