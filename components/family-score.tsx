'use client';
import React, { FC } from 'react';
import { cn } from '@/lib/utils';

interface FamilyScoreProps {
  side: 'left' | 'right';
}

const FamilyScore: FC<FamilyScoreProps> = ({ side }) => {
  return (
    <div
      className={cn(
        side === 'left' ? 'left-32' : 'right-32',
        'absolute z-10 flex h-40 w-60 flex-col items-center justify-center border-4 border-[#F5BB00] bg-[#07125B] px-10 py-3 text-6xl font-semibold text-white'
      )}
    >
      12
    </div>
  );
};

export default FamilyScore;
