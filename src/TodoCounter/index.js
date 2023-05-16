import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
const {totalTodos,completedTodos} = React.useContext(TodoContext);

  return (
        <h1 className={`TodoCounter ${(totalTodos === completedTodos && totalTodos !== 0) && 'TodoCounter--Completed'}`}>
      {(totalTodos === completedTodos && totalTodos !== 0) ? 'Has completado todos tus TODOS!' : (<>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs</>)}
    </h1>
  );
}

export { TodoCounter };
