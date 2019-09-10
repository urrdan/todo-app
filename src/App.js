import React from 'react';
import {Consume} from './Contx'
import Topmenu  from './topmenu'
import About  from './about.js'
import More  from './More.js'
import Home from './Home.js'
import {Route , NavLink} from 'react-router-dom';
import './main.css'

class App extends React.Component {
  constructor(){
    super()

  }
  componentWillMount(){
    const time= new Date()
    console.log('app > '+time.getMinutes()+':'+time.getSeconds())
}
  render(){
    return (
      <div className='main'>
      <Topmenu />
      <div>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route  path='/more' component={More}/>
      </div>
      <footer className='bg-secondary my-2 text-center'>
        <p className='m-0'>&copy;urrdan 2019 all rights reserved</p>
        <p className='m-0 text-warning'>Github</p>
      </footer>
      </div>
    );
  }
}

export default App;
