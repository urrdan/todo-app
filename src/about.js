import React from 'react';
import {NavLink} from 'react-router-dom';
class About extends React.Component{
     constructor(){
          super()
     }
     componentWillMount(){
          const time= new Date()
          console.log('about > '+time.getMinutes()+':'+time.getSeconds())
     }
     render(){
          return ( 
             <div className='about bg-info'>
               <h3>about</h3>
             </div>
     
          )
     }

}
  
export default About;