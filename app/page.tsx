'use client';
import React from 'react';
import Game from '@/app/game';
import HomeScreen from '@/app/home-screen';
import GameProvider from '@/components/game-provider';

const Home = () => {
  const [startGame, setStartGame] = React.useState(false);

  return (
    <GameProvider>
      <div className={'h-screen bg-gradient-to-b from-dark-blue to-light-blue'}>
        {startGame ? (
          <Game />
        ) : (
          <HomeScreen onStartGame={() => setStartGame(true)} />
        )}
        {/*<Game />*/}
      </div>
    </GameProvider>
  );
};

export default Home;
