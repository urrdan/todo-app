import React from 'react';

var mycon = React.createContext()


/* const Contx = (props) => {
    return ( 
        <mycon.Provider value={{a:'hellow'}}>
            {props.children}
        </mycon.Provider>
    );
} */

class  Contx extends React.Component {
    constructor() {
        super()
        this.state = { 
            todos:[
                {todo:'go buy staff', checked: false, id:1},
                {todo:'go to sleep', checked: true, id:2},
                {todo:'Visit the in-laws', checked: false, id:3}
            ],
            writeTodo:'',
            event: ''
        }
        this.checker=this.checker.bind(this)
        this.addTodo=this.addTodo.bind(this)
        this.writeTodo=this.writeTodo.bind(this)
        this.deleteTodo=this.deleteTodo.bind(this)
    }
    deleteTodo(id){
        /* this.setState(prev=>prev.todos.push(addedTodo)); */
        this.setState(prev=>{
            const updated=prev.todos.filter(item=>{
                if (item.id!=id){return true}
            })
            return{todos : updated}
        })
    }

    writeTodo(e){
        e.persist()
        this.setState({writeTodo : e.target.value, event: e.target});
    }


    checker(id){

        this.setState(prev=>{
            const updated=prev.todos.map(item=>{
                if (id==item.id){item.checked=!item.checked}
                return item
            })
            return{todos : updated}
        })
    }
    addTodo(){
        if(this.state.writeTodo.length){
            const newId=(this.state.todos.length)
            const addedTodo={todo: this.state.writeTodo, checked: false , id:newId+1}
            this.setState(prev=>prev.todos.push(addedTodo));
            this.setState({writeTodo: ''});

        }
        this.state.event.value=''
    }


    render() { 
        return (
            <mycon.Provider value={{data:this.state.todos, checker:this.checker, addTodo:this.addTodo, writeTodo:this.writeTodo, deleteTodo:this.deleteTodo}}>
                {this.props.children}
            </mycon.Provider>
          )
    }
}


const Consume=mycon.Consumer
export {Consume,Contx}