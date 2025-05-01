import { getBannerData } from '@/lib/api'
import React, { Suspense } from 'react'
import { Skeleton } from '../atom/Skeleton';

async function BannerSection() {
  <Suspense fallback={BannerSectionFallback}>
    <BannerSectionContent/>
  </Suspense>
} 

async function BannerSectionContent() {
  const data = await getBannerData();
  return (
    <h1 className="w-full h-[500px] bg-black flex justify-center items-center">BannerSection</h1>
  )
}

function BannerSectionFallback() {
  <div className="flex items-center justify-center gap-5">
    <Skeleton className="h-[500px] w-[700px] rounded-lg" />
    <Skeleton className="h-[500px] w-[700px] rounded-lg" />
    <Skeleton className="h-[500px] w-[700px] rounded-lg" />
  </div>
}

export default BannerSection;

