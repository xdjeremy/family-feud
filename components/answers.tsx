'use client';
import React, { FC } from 'react';
import ReactFlipCard from 'reactjs-flip-card';
import { useGame } from '@/components/game-provider';

interface Props {
  answer: {
    text: string;
    score: number;
  };
  number: number;
}

const Answers: FC<Props> = ({ answer, number }) => {
  const { openCard } = useGame();

  return (
    <>
      <ReactFlipCard
        containerStyle={{
          flex: 1,
        }}
        direction={'vertical'}
        flipTrigger={'onClick'}
        onClick={() => openCard(number)}
        frontComponent={
          <button
            className={
              'flex h-28 w-96 flex-col items-center justify-center rounded-xl border-2 border-white bg-opacity-80 bg-gradient-to-r from-light-blue via-blue-500 to-light-blue py-2'
            }
          >
            <span
              className={
                'flex h-20 w-24 flex-col items-center justify-center rounded-full border-2 border-white bg-dark-blue text-6xl font-extrabold text-white shadow-2xl'
              }
            >
              {number + 1}
            </span>
          </button>
        }
        backComponent={
          <button
            className={
              'flex h-28 w-96 flex-row items-center justify-center divide-x-2 divide-white rounded-xl border-2 border-white bg-opacity-80 bg-gradient-to-r from-light-blue via-blue-500 to-light-blue text-3xl font-semibold text-white'
            }
          >
            <span
              className={
                'flex h-full w-full flex-col items-center justify-center uppercase'
              }
            >
              {answer.text}
            </span>
            <span
              className={
                'flex h-full w-fit flex-col items-center justify-center px-3'
              }
            >
              {answer.score}
            </span>
          </button>
        }
      />
    </>
  );
};

export default Answers;
