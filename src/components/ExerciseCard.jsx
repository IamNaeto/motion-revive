import React from 'react';

const ExerciseCard = ({ exerciseData, onClick, isFinished }) => {
  return (
    <div className="relative grid gap-4 w-full cursor-pointer transform transition-transform hover:scale-105" onClick={onClick}>
      <img src={exerciseData.gif} alt="" width={500} height={500} className="w-full" />
      <h1 className='text-center text-[16px] md:text-[18px] font-medium'>{exerciseData.name}</h1>
      {isFinished && (
        <h1 className='absolute top-2 right-2 px-3 py-[6px] text-[14px] md:text-[16px] font-medium bg-[#EA7600] rounded-full text-white'>
          Finished
        </h1>
      )}
    </div>
  );
};

export default ExerciseCard;
