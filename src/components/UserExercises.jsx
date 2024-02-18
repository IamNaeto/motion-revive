import React, { useState, useEffect } from 'react';
import ExerciseCard from './ExerciseCard';
import ExerciseModal from './ExerciseModal';
import { ExerciseDatas } from './ExerciseData';

const UserExercises = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [CompletedExercises, setCompletedExercises] = useState({});
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let timer;

    if (countdown > 0) {
      // Start countdown timer
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else {
      // Countdown reached 0, stop the timer and show the modal
      clearInterval(timer);
      setSelectedExercise((prevSelectedExercise) => ({
        ...prevSelectedExercise,
        countdownReached: true,
      }));
    }

    return () => {
      // Cleanup the timer on component unmount
      clearInterval(timer);
    };
  }, [countdown]);

  const handleExerciseClick = (exerciseData) => {
    setSelectedExercise({ ...exerciseData, countdownReached: false });
    setCountdown(5); // Reset the countdown when a new exercise is selected
  };

  const handleCloseModal = () => {
    setSelectedExercise(null);
  };

  const handleCompleteClick = () => {
    setCompletedExercises((prevCompletedExercises) => {
      const updatedCompletedExercises = { ...prevCompletedExercises };
      const isCompleted = updatedCompletedExercises[selectedExercise.id];

      if (isCompleted) {
        delete updatedCompletedExercises[selectedExercise.id]; // Remove the Completed flag
      } else {
        updatedCompletedExercises[selectedExercise.id] = true; // Add the Completed flag
      }

      return updatedCompletedExercises;
    });

    handleCloseModal(); // Close the modal after toggling the Completed state
  };

  return (
    <main className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10 xl:gap-16 py-10 px-[2%]">
      {ExerciseDatas.map((exerciseData) => (
        <ExerciseCard
          key={exerciseData.id}
          exerciseData={exerciseData}
          onClick={() => handleExerciseClick(exerciseData)}
          isCompleted={CompletedExercises[exerciseData.id]}
        />
      ))}

      {selectedExercise && (
        <ExerciseModal
          name={selectedExercise.name}
          gif={selectedExercise.gif}
          onClose={handleCloseModal}
          onCompleted={handleCompleteClick}
          isCompleted={CompletedExercises[selectedExercise.id]}
          countdown={countdown}
        />
      )}
    </main>
  );
};

export default UserExercises;
