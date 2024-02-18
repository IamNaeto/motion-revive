import React from 'react';

const ExerciseModal = ({ imgSrc, gifSrc, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="grid items-center justify-center place-items-center gap-2 bg-white p-10 rounded-3xl max-w-[80%] max-h-[90%] relative">
        <div className='grid place-items-center w-[80%] h-full object-contain'>
            <img src={gifSrc} alt="" className="w-full mb-4 object-contain" />
        </div>
        <button className="bg-[#EA7600] text-white py-2 px-5 rounded" onClick={onClose}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default ExerciseModal;