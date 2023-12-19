'use client';
import React, { FC } from 'react';
import { cn } from '@/lib/utils';
import { useGame } from '@/components/game-provider';

interface FamilyScoreProps {
  side: 'left' | 'right';
}

const FamilyScore: FC<FamilyScoreProps> = ({ side }) => {
  const { leftFamilyScore, rightFamilyScore, turn } = useGame();
  const score = side === 'left' ? leftFamilyScore : rightFamilyScore;

  return (
    <div
      className={cn(
        side === 'left' ? 'left-32' : 'right-32',
        turn === side ? 'border-[15px]' : 'border-4 ',
        'absolute z-10 flex h-40 w-60 flex-col items-center justify-center border-[#F5BB00] bg-[#07125B] px-10 py-3 text-6xl font-semibold text-white'
      )}
    >
      {score}
    </div>
  );
};

export default FamilyScore;
