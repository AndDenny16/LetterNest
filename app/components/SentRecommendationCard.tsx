import React from 'react'
import type { Recommendation } from '../../types'


interface RecommendationProps {
  recommendation: Recommendation,

}

const formatTime = (recommendationDate:string) => {
  let intTime = parseInt(recommendationDate, 10);
  let date = new Date(intTime * 1000);
  let day:number = date.getDate();
  let month:number = date.getMonth() + 1 ;
  let year:number = date.getFullYear();
  return `${month}/${day}/${year}`
}

const cleanText = (receiverId: string) => {
    const email = receiverId.split("#")[1];
    return email
}

const SentRecommendationCard: React.FC<RecommendationProps>  = ({recommendation}) => {

  
  return (
  <div className="bg-base-100 w-10/12 shadow-xl border-2 border-green-800 p-4 flex flex-shrink-0 my-2 rounded-md justify-between hover:bg-slate-100 ">
    <h2 className="card-title font-serif">{cleanText(recommendation.receiver_id)} {formatTime(recommendation.recommendationSubmitTime)}</h2>

    <div className='flex-col flex mr-40 flex-shrink-0'>
      <h3 className='font-serif'> Last Sent : 4/20/2024</h3>
    </div>
  </div>
  )
}

export default SentRecommendationCard