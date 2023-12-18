'use client';
import React from 'react';
import ReactFlipCard from 'reactjs-flip-card';

const Answers = () => {
  return (
    <div className={'bg-black'}>
      <ReactFlipCard
        direction={'vertical'}
        flipTrigger={'onClick'}
        frontComponent={
          <button
            className={
              'flex h-16 w-72 flex-col items-center justify-center rounded-xl border-2 border-white bg-opacity-80 bg-gradient-to-r from-light-blue via-blue-500 to-light-blue py-2'
            }
          >
            <span
              className={
                'h-10 w-11 rounded-full border-2 border-white bg-dark-blue text-3xl font-extrabold text-white shadow-2xl'
              }
            >
              1
            </span>
          </button>
        }
        backComponent={
          <button
            className={
              'flex h-16 w-72 flex-row items-center justify-center divide-x-2 divide-white rounded-xl border-2 border-white bg-opacity-80 bg-gradient-to-r from-light-blue via-blue-500 to-light-blue text-2xl font-semibold text-white'
            }
          >
            <span
              className={
                'flex h-full w-full flex-col items-center justify-center'
              }
            >
              BEACH / RESORT
            </span>
            <span
              className={
                'flex h-full w-fit flex-col items-center justify-center px-3'
              }
            >
              50
            </span>
          </button>
        }
      />
    </div>
  );
};

export default Answers;
