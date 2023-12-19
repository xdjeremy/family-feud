import React, { ReactNode } from 'react';
import questions from '@/questions';
import { number } from 'prop-types';

const useGame = () => {
  return React.useContext(GameContext);
};

const GameContext = React.createContext({
  leftFamilyScore: 0,
  setLeftFamilyScore: (score: number) => {},
  rightFamilyScore: 0,
  setRightFamilyScore: (score: number) => {},
  turn: 'none',
  setTurn: (
    turn: 'left' | 'right' | 'none' | 'choose-first' | 'end-round'
  ) => {},
  strikeCount: 0,
  setStrikeCount: (strikeCount: number) => {},
  currentQuestion: 0,
  setCurrentQuestion: (question: any) => {},
  roundScore: 0,
  setRoundScore: (score: number) => {},
  openCard: (index: number) => {},
});

const GameProvider = ({ children }: { children: ReactNode }) => {
  const [leftFamilyScore, setLeftFamilyScore] = React.useState(0);
  const [rightFamilyScore, setRightFamilyScore] = React.useState(0);
  const [roundScore, setRoundScore] = React.useState(0);

  const [turn, setTurn] = React.useState<
    'left' | 'right' | 'none' | 'choose-first' | 'end-round'
  >('none');
  const [strikeCount, setStrikeCount] = React.useState(0);

  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const openCard = (index: number) => {
    // add points to roundScore
    setRoundScore(roundScore + questions[currentQuestion].answer[index].score);
  };

  return (
    <GameContext.Provider
      value={{
        leftFamilyScore,
        setLeftFamilyScore,
        rightFamilyScore,
        setRightFamilyScore,
        turn,
        setTurn,
        strikeCount,
        setStrikeCount,
        currentQuestion,
        setCurrentQuestion,
        roundScore,
        setRoundScore,
        openCard,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
export { useGame };
