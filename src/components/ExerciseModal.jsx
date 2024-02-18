import React from 'react';

const ExerciseModal = ({ name, gif, onClose, onCompleted, countdown }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="grid items-center justify-center place-items-center gap-2 bg-white p-10 rounded-3xl max-w-[80%] max-h-[90%] relative">
        {countdown !== 0 ? (
          <h1 className='flex items-center justify-center text-[48px] text-center p-52 font-bold w-full'>{countdown}</h1>
        ) : (
          <>
            <h1 className='text-center text-[16px] md:text-[18px] font-medium'>{name}</h1>
            <div className='grid items-center justify-center w-[70%] h-full object-contain'>
              <img src={gif} alt="" className="w-full object-contain" />
            </div>
            <div className='flex items-center justify-center gap-4'>
              <button className="bg-[#EA7600] text-white py-2 px-5 rounded" onClick={onClose}>Stop</button>
              <button className="bg-[#EA7600] text-white py-2 px-5 rounded" onClick={onCompleted}>Done</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExerciseModal;
