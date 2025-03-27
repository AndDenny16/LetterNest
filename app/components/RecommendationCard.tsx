import React from 'react'
import type { Recommendation } from '../../types'
import RecImage from '@/public/rec.png';
import Image from 'next/image';


interface RecommendationProps {
  recommendation: Recommendation

}

const formatTime = (recommendationDate:Date) => {
  let day:number = recommendationDate.getDate();
  let month:number = recommendationDate.getMonth() + 1 ;
  let year:number = recommendationDate.getFullYear();
  return `${month}/${day}/${year}`
}

const RecommendationCard: React.FC<RecommendationProps>  = ({recommendation}) => {
  return (
  <div className="bg-base-100 w-10/12 shadow-xl border-2 border-green-800 p-4 flex flex-shrink-0 my-2 rounded-md justify-between hover:bg-slate-100 ">
    <h2 className="card-title font-serif">{recommendation.recommendationWriterString} {formatTime(recommendation.recommendationUploadDate)}</h2>

    <div className='flex-col flex mr-40 flex-shrink-0'>
      <h3 className='font-serif'> Last Sent : 4/20/2024</h3>
    </div>
    
  </div>
  )
}

export default RecommendationCard