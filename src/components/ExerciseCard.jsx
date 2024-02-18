import React from 'react';

const ExerciseCard = ({ exerciseData, onClick, isCompleted }) => {
  return (
    <div className="relative grid gap-4 w-full cursor-pointer transform transition-transform hover:scale-105" onClick={onClick}>
      <img src={exerciseData.gif} alt="" width={500} height={500} className="w-full" />
      <h1 className='text-center text-[16px] md:text-[18px] font-medium'>{exerciseData.name}</h1>
      {isCompleted && (
        <h1 className='absolute top-2 right-2 px-3 py-[6px] text-[14px] md:text-[16px] font-medium bg-green-800 rounded-full text-white'>
          Completed
        </h1>
      )}
    </div>
  );
};

export default ExerciseCard;
