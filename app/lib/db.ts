import type { Recommendation, uploadResultType, metadata } from "../../types"

const recommendations: Recommendation[] = [
    {
        recommendationId: 123,
        recommendationWriterId: 6789,
        recommendationWriterString: "Miffy Tsai",
        recomenmendationStudentString: "Andrew Denny",
        recommendationStudentId: 7809,
        recommendationUploadDate: new Date()
    }, 
    {
        recommendationId: 190,
        recommendationWriterId: 6789,
        recommendationWriterString: "Judy Smith",
        recomenmendationStudentString: "Bryan Tran",
        recommendationStudentId: 98080,
        recommendationUploadDate: new Date()
    }, 
    {
        recommendationId: 180,
        recommendationWriterId: 6789,
        recommendationWriterString: "Todd Diggs",
        recomenmendationStudentString: "Harrison Diggs",
        recommendationStudentId: 161616,
        recommendationUploadDate: new Date()
    }, 
    {
        recommendationId: 124,
        recommendationWriterId: 890909,
        recommendationWriterString: "Greg James",
        recomenmendationStudentString: "Andrew Denny",
        recommendationStudentId: 7809,
        recommendationUploadDate: new Date()
    }, 
    {
        recommendationId: 125,
        recommendationWriterId: 8790,
        recommendationWriterString: "Raghu Ramujan",
        recomenmendationStudentString: "Andrew Denny",
        recommendationStudentId: 7809,
        recommendationUploadDate: new Date()
    },
    {
        recommendationId: 126,
        recommendationWriterId: 8790,
        recommendationWriterString: "Raghu Ramujan",
        recomenmendationStudentString: "Andrew Denny",
        recommendationStudentId: 7809,
        recommendationUploadDate: new Date()
    },
    {
        recommendationId: 127,
        recommendationWriterId: 8790,
        recommendationWriterString: "Raghu Ramujan",
        recomenmendationStudentString: "Andrew Denny",
        recommendationStudentId: 7809,
        recommendationUploadDate: new Date()
    },
    {
        recommendationId: 128,
        recommendationWriterId: 8790,
        recommendationWriterString: "Raghu Ramujan",
        recomenmendationStudentString: "Andrew Denny",
        recommendationStudentId: 7809,
        recommendationUploadDate: new Date()
    },
    {
        recommendationId: 129,
        recommendationWriterId: 8790,
        recommendationWriterString: "Raghu Ramujan",
        recomenmendationStudentString: "Andrew Denny",
        recommendationStudentId: 7809,
        recommendationUploadDate: new Date()
    },
    {
        recommendationId: 130,
        recommendationWriterId: 8790,
        recommendationWriterString: "Joe Biden",
        recomenmendationStudentString: "Andrew Denny",
        recommendationStudentId: 7809,
        recommendationUploadDate: new Date()
    }

]

export async function getRecommendations(): Promise<Recommendation[]> {
    return recommendations;
}

export async function putDynamoMetaData(metadata:metadata ): Promise<uploadResultType>{

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