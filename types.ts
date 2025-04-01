export type Recommendation = {
    recommendationId: number,
    sender_id: string,
    receiver_id: string,
    sender_sk: string, 
    recommendationSubmitTime: string,
    recommendationReason: string,
    recommendationFileType: string
    recommendationS3Key?: string
    
};

export interface MenuItem {
    id: number;
    label: string;
    path: string;
  }
  

export type postOptionsType = {
    postSenderEmail: string,
    postReceiverEmail: string,
    postFileType: string,
    postReason: string
}


export type generalReturnType = {
    success: boolean;
    error?: string
  };

export type dynamoMetadata = {
    metadataSenderEmail: string,
    metadataReceiverEmail: string,
    metadataFileType: string,
    metadataReason:string,
    metadataS3Key: string

}