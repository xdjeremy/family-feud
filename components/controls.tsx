import React from 'react';
import { CheckCheck, MoveUp, XIcon } from 'lucide-react';
import { useGame } from '@/components/game-provider';

const Controls = () => {
  const { setTurn, turn, strikeCount, setStrikeCount } = useGame();

  const handleWrongAnswer = () => {
    if (strikeCount === 2) {
      if (turn === 'left') {
        setTurn('right');
      } else if (turn === 'right') {
        setTurn('left');
      }
      setStrikeCount(0);
    }
    setStrikeCount(strikeCount + 1);
  };
  return (
    <div
      className={
        'absolute bottom-20 flex flex-row items-center justify-center gap-3'
      }
    >
      <button
        className={'rounded-full bg-red-500 p-4 hover:bg-red-700'}
        onClick={() => handleWrongAnswer()}
      >
        <XIcon className={'text-white'} />
      </button>
      {turn === 'none' && (
        <button
          className={'rounded-full bg-yellow-500 p-4 hover:bg-yellow-700'}
        >
          <MoveUp
            className={'text-white'}
            onClick={() => setTurn('choose-first')}
          />
        </button>
      )}
      <button className={'rounded-full bg-green-500 p-4 hover:bg-green-700'}>
        <CheckCheck
          className={'text-white'}
          onClick={() => setTurn('end-round')}
        />
      </button>
    </div>
  );
};

export default Controls;
