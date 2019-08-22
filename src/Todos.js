import React from 'react';

const Todos = (pro) => {
    var style={}
    if(pro.item.checked){style={color: 'gray', textDecoration: 'line-through'}}
    return(
        <div className="d-flex justify-content-between my-2">
            <div className='d-flex align-items-center'>
                <input type='checkbox' checked={pro.item.checked} onChange={pro.rest.checker.bind(this,pro.item.id)}/>
                <p className='m-0 mx-2' style={style}>{pro.item.todo}</p>
            </div>
            <button className='btn btn-outline-primary rounded btn-sm' onClick={pro.rest.deleteTodo.bind(this,pro.item.id)}>del</button>

        </div>
    )
}
 
export default Todos;