import { NextResponse } from "next/server";
import { getServerSession, NextAuthOptions } from "next-auth";
import { options } from "../../auth/[...nextauth]/options";

const API_ENDPOINT = process.env.API_ENDPOINT


export async function GET(req:Request){
    try{
        
        const session = await getServerSession(options as NextAuthOptions);
        if (!session || !session.accessToken){
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }
        const email = session.user?.email
        const response = await fetch(`${API_ENDPOINT}/Recommendations/my-recommendations/${email}`,{
            method:"GET",
            headers: {
                'Authorization': `Bearer ${session.accessToken}`
            }
        })
        const resJson = await response.json()
        console.log("This is the response", resJson)
        return NextResponse.json({"sucess": true, recommendations: resJson.recommendations});

    }catch(error: any){

        return NextResponse.json({"success": false, "error": error.message})

    }
}