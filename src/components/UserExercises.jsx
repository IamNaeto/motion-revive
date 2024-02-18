import React, { useState } from 'react';
import ExerciseCard from './ExerciseCard';
import ExerciseModal from './ExerciseModal';
import { ExerciseDatas } from './ExerciseData';

const UserExercises = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseClick = (exerciseData) => {
    setSelectedExercise(exerciseData);
  };

  const handleCloseModal = () => {
    setSelectedExercise(null);
  };

  return (
    <main className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 xl:gap-16 py-10 px-[2%]">
      {ExerciseDatas.map((exerciseData) => (
        <ExerciseCard
          key={exerciseData.id}
          exerciseData={exerciseData}
          onClick={() => handleExerciseClick(exerciseData)}
        />
      ))}

      {selectedExercise && (
        <ExerciseModal
          imgSrc={selectedExercise.imgSrc}
          gifSrc={selectedExercise.gifSrc}
          onClose={handleCloseModal}
        />
      )}
    </main>
  );
};

export default UserExercises;
