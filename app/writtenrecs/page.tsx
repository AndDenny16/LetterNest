import React from 'react'
import type {Recommendation} from '../../types'
import { getSentRecommendations } from '../lib/serverdb';
import RecommendationCard from '../components/RecommendationCard';
import MainNavBar from '../components/MainNavBar';
import DownMenu from '../components/DownMenu';
import SentRecommendationCard from '../components/SentRecommendationCard';

const Home = async() => {

  const response = await getSentRecommendations();
  console.log(response);

  const recommendations: Recommendation[] = response as Recommendation[];;


  return (
    <div className="h-screen w-screen flex flex-col">
      <MainNavBar/>
      <div className = "flex flex-row flex-grow h-full overflow-hidden">
        <div className='flex flex-shrink-0'>
          <DownMenu/>
        </div>
      
        <div className='w-full h-full overflow-y-auto  px-8 pb-12'>
        <h1 className="font-bold text-4xl text-green-800 items-center py-8 font-serif">Your Written Recommendations</h1>
            <div className="w-full border min-w-[500px]">
              {recommendations.map((recommendation,idx) => (
                <div key = {recommendation.recommendationId}  >
                  <SentRecommendationCard  recommendation = {recommendation}/>
                </div>
              ))}
            </div>
        </div>

        </div>
      </div>
  )
}

export default Home