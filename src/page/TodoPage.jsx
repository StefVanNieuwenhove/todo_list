import { useState, useEffect } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { TodoForm, TodoItem } from '../components';
import { v4 as uuidv4 } from 'uuid';
import { collection, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const TODOS = 'Todos';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, TODOS), (qs) => {
      setTodos(
        qs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsubscribe();
  }, [showBoundary]);

  const createTodo = async (title) => {
    await setDoc(doc(db, TODOS, uuidv4()), {
      title,
      completed: false,
    });
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='w-full text-3xl text-center underline font-bold'>
        Todo List
      </h1>
      <TodoForm addTodo={createTodo} />
      <div>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className='flex border-2 hover:border-teal-500 max-w-fit rounded-md items-center justify-between mx-auto my-2 p-2 '
          >
            <TodoItem todo={todo} collectionName={TODOS} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoPage;
