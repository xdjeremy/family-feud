import React from 'react';
import FamilyFeud from '@/assets/images/family-feud.png';
import Image from 'next/image';

const HomeScreen = () => {
  return (
    <div className={'flex flex-col items-center justify-center h-screen'}>
      <Image src={FamilyFeud} alt={'Family Feud'} className={'h-screen w-full'} />
    </div>
  );
};

export default HomeScreen;
