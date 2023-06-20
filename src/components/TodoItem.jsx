import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import React from 'react';
import { db } from '../config/firebase';

const TodoItem = ({ todo, collectionName }) => {
  const completeTodo = async () => {
    await setDoc(doc(db, collectionName, todo.id), {
      ...todo,
      completed: !todo.completed,
    });
  };

  const deleteTodo = async () => {
    await deleteDoc(doc(db, collectionName, todo.id));
  };

  return (
    <>
      <div
        className='flex items-center w-[400px]'
        onClick={() => completeTodo()}
      >
        <input
          type='checkbox'
          className='form-checkbox h-5 w-[50px] text-gray-600'
          checked={todo.completed}
          readOnly
        />
        <span className='ml-2 text-gray-700 flex w-full justify-center'>
          {todo.title}
        </span>
      </div>
      <span
        className='w-[50px] flex items-center justify-center'
        onClick={deleteTodo}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 text-red-500 hover:text-red-700 cursor-pointer'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M10 12a2 2 0 100-4 2 2 0 000 4z'
            clipRule='evenodd'
          />
          <path
            fillRule='evenodd'
            d='M3 10a7 7 0 1114 0 7 7 0 01-14 0zm7-5a5 5 0 00-4.546 2.864A5.002 5.002 0 1015 10a4.998 4.998 0 00-9.546-2.864A5 5 0 0010 5z'
            clipRule='evenodd'
          />
        </svg>
      </span>
    </>
  );
};

export default TodoItem;
