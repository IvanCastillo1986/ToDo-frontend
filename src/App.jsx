import React from 'react';

import Header from './components/header/Header';
import ToDoList from './components/todo_list/ToDoList'

import './App.css';



function App() {



  return (
    <div className="App">
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;
