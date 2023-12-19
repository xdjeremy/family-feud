'use client';
import React from 'react';
import Answers from '@/components/answers';
import ScoreBoard from '@/components/score-board';
import FamilyScore from '@/components/family-score';
import questions from '@/questions';
import Controls from '@/components/controls';
import FirstRound from '@/components/first-round';
import WrongAnswer from '@/components/wrong-answer';
import EndRound from "@/components/end-round";
import {useGame} from "@/components/game-provider";

const Game = () => {
  const { currentQuestion } = useGame();

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
        <EndRound />
        <WrongAnswer />
        <FirstRound />
        <FamilyScore side={'left'} />
        <FamilyScore side={'right'} />
        <div
          className={
            'flex -translate-y-6 flex-col items-center justify-center gap-3'
          }
        >
          <ScoreBoard />
          <div
            className={
              'grid h-[400px] w-[810px] grid-flow-col grid-cols-2 grid-rows-3 justify-center gap-2 rounded-3xl border-[12px] border-[#F5BB00B0] bg-[#07125B] p-2'
            }
          >
            {questions[currentQuestion].answer.map((answer, index) => (
              <Answers answer={answer} number={index} key={answer.text} />
            ))}
          </div>
        </div>
        <Controls />
      </div>
    </div>
  );
};

export default Game;
