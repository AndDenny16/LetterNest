import { getServerSession, NextAuthOptions } from "next-auth";
import { NextResponse, NextRequest } from "next/server";
import { options } from "../../auth/[...nextauth]/options";


const API_ENDPOINT = process.env.API_ENDPOINT;

export async function POST(request: Request){
    try{
        const session = await getServerSession(options as NextAuthOptions);
        if (!session || !session.accessToken){
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }
        const body = await request.json();
        console.log("body Type", body);
        const response = await fetch(`${API_ENDPOINT}/getPresignedUrl`, {
            method:"POST",
            headers: {
                'Authorization': `Bearer ${session.accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        console.log(response)
        if (!response.ok){
            const errorRes = await response.json();
            return NextResponse.json({ error: errorRes.message || "Failed to fetch" }, { status: response.status });

        }
        const resJson = await response.json();
        console.log("RESPONSE INSIDE SERVER", resJson.objectKey)
       return NextResponse.json({ success: true, url: resJson.url, objectKey:resJson.objectKey});
    }catch(error:any){
        console.log("ERROR FETCHING PRESIGNED URL", error.message)
        return NextResponse.json({success: false}, {status: 404})
    }

}