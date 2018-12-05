import React from 'react';
import TodoListContainer from "./todos/todo_list_container"

const App = function (){
  return (<>
    <TodoListContainer />
    <h1 id="test"> App rendering </h1>
    </>)
};

export default App;
