import React from 'react';

const ExerciseCard = ({ exerciseData, onClick }) => {
  return (
    <div className="w-full cursor-pointer transform transition-transform hover:scale-105" onClick={onClick}>
      <img src={exerciseData.imgSrc} alt="" width={500} height={500} className="w-full" />
    </div>
  );
};

export default ExerciseCard;