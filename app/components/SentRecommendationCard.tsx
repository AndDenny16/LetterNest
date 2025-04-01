import React from 'react'
import type { Recommendation } from '../../types'
import Link from 'next/link';
import { Pencil } from 'lucide-react';


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
  <div className="bg-base-100 w-10/12 shadow-xl border-2 border-green-800 p-4 flex flex-shrink-0 my-2 rounded-md  hover:bg-slate-100 ">
    <div className='flex flex-col'>
        <h2 className="card-title font-serif">{cleanText(recommendation.receiver_id)}</h2>
        <h3 className='font-serif'>{recommendation.recommendationReason} </h3>
    </div>
    <div className='flex-col flex ml-20 flex-shrink-0'>
        <h3 className='font-serif'> Submitted: {formatTime(recommendation.recommendationSubmitTime)}</h3>
        <h3 className='font-serif'> Last Sent : 4/20/2024</h3>
    </div>

    <div className='flex-col flex ml-20 flex-shrink-0 border-2'>
        <Link className="btn btn-ghost text-s  text-green-800" href='/Request'><Pencil size={10}/> Edit</Link>
    </div>
    <div className='flex-col flex ml-20 flex-shrink-0 border-2'>
        <Link className="btn btn-ghost text-s  text-green-800" href='/Request'><Pencil size={10}/> Edit</Link>
    </div>
  </div>
  )
}

export default SentRecommendationCard