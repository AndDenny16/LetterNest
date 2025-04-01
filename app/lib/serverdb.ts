import type { Recommendation, dynamoMetadata, generalReturnType } from "../../types";
import { headers } from "next/headers"


export async function getMyRecommendations(): Promise<Recommendation[] | null> {
    try{
        const response = await fetch(`http://localhost:3000/api/recommendations/my-recommendations`, {
            method:'GET',
            headers: await headers(),
            next: { tags: ['recommendations'] }
        })
        const resJson = await response.json();
        if(!resJson.recommendations){
            throw new Error("Recommendations Not Returned")
        }
        const recommendations = resJson.recommendations;
        return recommendations
    }catch(error: any){
        console.log(error.message)
        return null
    }
}



export async function getSentRecommendations(): Promise<Recommendation[]> {
    try{
        const response = await fetch(`http://localhost:3000/api/recommendations/sent-recommendations`, {
            method:'GET',
            headers: await headers(),
            next: { tags: ['recommendations'] }
        })

        const resJson = await response.json();
        if(!resJson.success || !resJson.recommendations){
            throw new Error("Sent Recommendations Not Returned")
        }
        const recommendations = resJson.recommendations;
        return recommendations
    }catch(error: any){
        console.log(error.message)
        return []
    }
}


export async function getEmails(): Promise<string[]> {
    try {
        const response = await fetch(`http://localhost:3000/api/recommendations/sent-recommendations`, {
            method: 'GET',
            headers: await headers()
        })
        const resJson = await response.json();
        if (!resJson.sucess || !resJson.emails){
            throw new Error("Emails not returned")
        }

        const emails = resJson.emails
        return emails
        

    } catch (error:any) {
        console.log("Email Error", error.message);
        return []
        
    }

}