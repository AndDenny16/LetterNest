import { getServerSession, NextAuthOptions } from "next-auth";
import { NextResponse, NextRequest } from "next/server";
import { options } from "../../auth/[...nextauth]/options";


const API_ENDPOINT = process.env.API_ENDPOINT;

export async function POST(request: Request){
    try{
        console.log("I am here")
        console.log(API_ENDPOINT)
        const session = await getServerSession(options as NextAuthOptions);
        if (!session || !session.accessToken){
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }
        const body = await request.json();
        console.log(session.accessToken)
        console.log("body Type", body);
        const response = await fetch(`${API_ENDPOINT}/Recommendations/metadata`, {
            method:"POST",
            headers: {
                'Authorization': `Bearer ${session.accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        if (!response.ok){
            const errorRes = await response.json();
            console.log(errorRes)
            return NextResponse.json({ error: errorRes.message || "Failed to fetch" }, { status: response.status });

        }
        const resJson = await response.json();
        console.log("RESPONSE INSIDE SERVER2", resJson)
       return NextResponse.json({ success: true, url: resJson.url, objectKey:resJson.objectKey});
    }catch(error:any){
        console.log("ERROR Putting METADATA", error.message)
        return NextResponse.json({success: false}, {status: 404})
    }

}