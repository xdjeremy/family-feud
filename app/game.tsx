import React from 'react';
import Answers from '@/components/answers';
import ScoreBoard from '@/components/score-board';

const Game = () => {
  return (
    <div
      className={
        'flex h-screen w-full flex-col items-center justify-center px-60 py-8'
      }
    >
      <div
        className={
          'flex h-full w-full flex-col items-center justify-center rounded-full border-[12px] border-[#fffe53] bg-[#1A36DC]'
        }
      >
        <div
          className={
            'flex -translate-y-6 flex-col items-center justify-center gap-3'
          }
        >
          <ScoreBoard />
          <div
            className={
              'grid h-[400px] w-[810px] grid-cols-2 justify-center gap-2 rounded-3xl border-[12px] border-[#F5BB00B0] bg-[#07125B] p-2'
            }
          >
            <Answers />
            <Answers />
            <Answers />
            <Answers />
            <Answers />
            <Answers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
