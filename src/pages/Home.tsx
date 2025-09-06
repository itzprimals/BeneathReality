import React from 'react';
import Hero from '../components/Hero';
import RecentVideos from '../components/RecentVideos';
import BeneathCurrent from '../components/BeneathCurrent';
import CreatorsOfTheMonth from '../components/ProsOfTheMonth';
import ShopPreview from '../components/ShopPreview';

const Home = () => {
  return (
    <div>
      <Hero />
      <RecentVideos />
      <BeneathCurrent />
      <CreatorsOfTheMonth />
      <ShopPreview />
    </div>
  );
};

export default Home;