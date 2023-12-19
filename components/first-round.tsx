import React from 'react';
import { useGame } from '@/components/game-provider';

const FirstRound = () => {
  const { turn, setTurn } = useGame();

  if (turn !== 'choose-first') return <></>;

  const handleClick = (side: 'left' | 'right') => {
    setTurn(side);
  };

  return (
    <div
      className={
        'absolute z-20 flex h-screen w-screen flex-col items-center justify-center bg-black/40'
      }
    >
      <div
        className={
          'z-30 border-8 border-[#FFD700] bg-dark-blue p-10 text-2xl font-semibold text-white '
        }
      >
        <span
          className={
            'mb-5 flex w-full flex-col items-center justify-center text-center'
          }
        >
          Which family will play first?
        </span>
        <div className={'flex flex-row items-center justify-center gap-4'}>
          <button
            className={
              'flex h-28 w-60 flex-col items-center justify-center rounded-xl border-2 border-white bg-opacity-80 bg-gradient-to-r from-light-blue via-blue-500 to-light-blue py-2'
            }
            onClick={() => handleClick('left')}
          >
            LEFT
          </button>
          <button
            className={
              'flex h-28 w-60 flex-col items-center justify-center rounded-xl border-2 border-white bg-opacity-80 bg-gradient-to-r from-light-blue via-blue-500 to-light-blue py-2'
            }
            onClick={() => handleClick('right')}
          >
            RIGHT
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstRound;
