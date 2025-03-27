import React, {useMemo} from 'react'
import type {Recommendation} from '../../types'
import { getRecommendations } from '../lib/db';
import RecommendationCard from '../components/RecommendationCard';
import MainNavBar from '../components/MainNavBar';
import DownMenu from '../components/DownMenu';
import { signOut } from 'next-auth/react';
import SignOutButton from '../components/SignOutButton';
import NextAuth, { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options"


const Home = async() => {

  const response = await getRecommendations();

  const recommendations: Recommendation[] = response as Recommendation[];

  const session = await getServerSession(options);

  return (
    <div className="h-screen w-screen flex flex-col">
      <MainNavBar />
      <div className="flex flex-row flex-grow overflow-hidden">
        <div className="h-full flex-shrink-0">
          <DownMenu />
        </div>
        <div className="w-full px-8 pb-12 overflow-y-auto h-full">
          <h1 className="font-bold text-4xl text-green-800 items-center py-8 font-serif">
            Your Recieved Recommendations
          </h1>
          <div className="w-full border border-red-900 min-w-[500px]">
            {recommendations.map((recommendation) => (
              <div key={recommendation.recommendationId}>
                <RecommendationCard recommendation={recommendation} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Home