import React, { useEffect } from 'react';
import { XIcon } from 'lucide-react';
import { useGame } from '@/components/game-provider';

const WrongAnswer = () => {
  const [show, setShow] = React.useState(false);
  const { setTurn, turn, strikeCount, setStrikeCount } = useGame();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (strikeCount === 3) {
        setStrikeCount(0);
      }
      setShow(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [strikeCount, turn, setTurn, setStrikeCount]);

  if (!show) {
    return null;
  }
  return (
    <div
      className={
        'absolute z-10 flex flex-row items-center justify-center gap-2'
      }
    >
      {[...Array(strikeCount)].map((_, index) => (
        <div key={index} className={'border-8 border-red-500 bg-red-900'}>
          <XIcon className={'h-32 w-32 text-red-500'} />
        </div>
      ))}
    </div>
  );
};

export default WrongAnswer;
