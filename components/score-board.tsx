import React from 'react';
import { useGame } from '@/components/game-provider';

const ScoreBoard = () => {
  const { roundScore } = useGame();

  return (
    <div
      className={
        'z-10 flex h-40 w-60 flex-col items-center justify-center border-4 border-[#F5BB00] bg-[#07125B] px-10 py-3 text-6xl font-semibold text-white'
      }
    >
      {roundScore}
    </div>
  );
};

export default ScoreBoard;
