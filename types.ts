export type Recommendation = {
    recommendationId: number,
    recommendationWriterId: number,
    recommendationWriterString: string,
    recomenmendationStudentString: string,
    recommendationStudentId: number,
    recommendationUploadDate: Date
    
};


export interface MenuItem {
    id: number;
    label: string;
    path: string;
  }
  

export type postOptionsType = {
    sender: string,
    receiver: string,
    fileType: string,
    reason: string
}


export type uploadResultType = {
    success: boolean;
    error?: string
  };

export type metadata = {
    sender: string,
    receiver: string,
    fileType: string,
    reason:string,
    s3Key: string

}