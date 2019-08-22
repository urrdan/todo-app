import React from 'react';
import Home from './home.js';
import Todos from './Todos.js';
import {Consume} from './Contx'
import {BrowserRouter, Route} from 'react-router-dom';
import './main.css'

function App() {
  return (
    <Consume>
      {val=>{
        const unchecked= val.data.filter(item=>{if(!item.checked){return true}})
        const checked= val.data.filter(item=>{if(item.checked){return true}})
        return(
        <div className="todo-main container col-md-7 text-center h-100">
          <h1 className='mb-3 '>WELCOME</h1>
          <div className='row form-group d-flex justify-content-between mx-1 py-1 '>
            <input type='text' className='write-todo col-8 rounded ' onChange={function(e){val.writeTodo(e)}} placeholder='write new todo . . .' ></input>
            <button className='btn btn-sm btn-primary col-3' onClick={val.addTodo}>Add Todo</button>
          </div>
          <h3 className='text-left mt-3 '>TODOS</h3>
          <div className='todos-display'>
            <div className='container'>{unchecked.map(item=><Todos key={item.id} item={item} rest={val}/>)}</div>
            <div className='container mt-5'>{checked.map(item=><Todos key={item.id} item={item} rest={val}/>)}</div>
          </div>
          <footer className='bg-secondary my-2 '>
            <i className='d-block'>about</i>
            <i>licensing</i>
          </footer>
        </div>)
      }}
    </Consume>
  );
}

export default App;
