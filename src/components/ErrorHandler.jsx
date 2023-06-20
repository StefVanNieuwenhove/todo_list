import React from 'react';

const ErrorHandler = ({ error, resetErrorBoundary }) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-2xl font-bold text-gray-700'>
          Something went wrong!
        </h1>
        <p className='text-gray-700'>{error.message}</p>
        <button
          className='mt-4 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded'
          onClick={resetErrorBoundary}
        >
          Try again
        </button>
      </div>
    </>
  );
};

export default ErrorHandler;
