'use client';
import React from 'react';
import Game from '@/app/game';
import HomeScreen from '@/app/home-screen';
import GameProvider from '@/components/game-provider';

const Home = () => {
  return (
    <GameProvider>
      <div className={'h-screen bg-gradient-to-b from-dark-blue to-light-blue'}>
        <Game />
        {/*<HomeScreen />*/}
      </div>
    </GameProvider>
  );
};

export default Home;
