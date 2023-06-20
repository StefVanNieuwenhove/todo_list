import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  return (
    <div className='w-full flex flex-col items-center my-4'>
      <form
        className='w-full max-w-sm'
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          setValue('');
        }}
      >
        <div className='flex items-center border-b-2 border-teal-500 py-2'>
          <input
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            type='text'
            placeholder='Add Todo'
            aria-label='Add Todo'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
            type='submit'
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
