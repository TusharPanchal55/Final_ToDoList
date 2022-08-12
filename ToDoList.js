import React from 'react';
import './ToDoList';

function ToDotask({taskList,updateTaskList}) {
 
  const cancletask = key => {
    const newList = taskList.filter(todo => {
      return todo.key !== key;
    });
    updateTaskList(newList);
  };
  return( <div>
    {taskList.map(todo => {
      return (
        <div key={todo.key} className='list'>
      <p>{todo.kaarya}</p>
      <button onClick={() => cancletask(todo.key)} className='canbutton'>Niskashit</button>
      </div>
      );
    })}
  </div>
  );
}

export default ToDotask;