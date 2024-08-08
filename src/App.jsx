import React from 'react';

import Header from './components/header/Header';
import TodoComponent from './components/todo_component/TodoComponent';

import './App.scss';



function App() {



  return (
    <div className="App">
      <Header />
      <TodoComponent />
    </div>
  );
}

export default App;
