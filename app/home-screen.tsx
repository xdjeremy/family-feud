import React, {FC} from 'react';
import FamilyFeud from '@/assets/images/family-feud.png';
import Image from 'next/image';

interface Props {
    onStartGame: (x: boolean) => void;
}

const HomeScreen: FC<Props> = ({onStartGame}) => {
  return (
    <div className={'flex flex-col items-center justify-center h-screen'}>
      <Image src={FamilyFeud} alt={'Family Feud'} className={'h-80% w-80%'} />
        <button onClick={() => onStartGame(true)} className={'bg-orange-500 p-10 rounded-full text-black text-3xl font-bold hover:bg-orange-700'}>
            START
        </button>
    </div>
  );
};

export default HomeScreen;
