import React from 'react';
import Todos from './Todos.js';
import {Consume} from './Contx'
import Topmenu  from './topmenu'

const Home = () => {
    return (  
        <Consume>
        {val=>{
        const unchecked= val.data.filter(item=>{if(!item.checked){return true}})
        const checked= val.data.filter(item=>{if(item.checked){return true}})
        return(
        <div className="todo-main container col-md-7 text-center h-100">   
          <div className='row form-group d-flex justify-content-between mx-1 my-3 py-1 '>
            <input type='text' className='write-todo col-8 rounded ' onChange={function(e){val.writeTodo(e)}} placeholder='write new todo . . .' ></input>
            <button className='btn btn-sm btn-primary col-3' onClick={val.addTodo}>Add Todo</button>
          </div>
          <h3 className='text-left mt-3 '>TODOS</h3>
          <div className='todos-display border'>
          {unchecked.length>0 || checked.length>0?[
            <div className='container' key='0'>{unchecked.map(item=><Todos key={item.id} item={item} rest={val}/>)}</div>,
            <div className='container mt-5' key='1'>{checked.map(item=><Todos key={item.id} item={item} rest={val}/>)}</div>]
          :<p className=' my-4'> No Todos yet! Please write new ones</p>}
          </div>
          
        </div>)
      }}
    </Consume>
    );
}
 
export default Home;