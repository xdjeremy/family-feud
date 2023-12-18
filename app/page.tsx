import React from 'react';
import Game from '@/app/game';
import HomeScreen from '@/app/home-screen';

const Home = () => {
  return (
    <div className={'h-screen bg-gradient-to-b from-dark-blue to-light-blue'}>
      {/*<Game />*/}
      <HomeScreen />
    </div>
  );
};

export default Home;
