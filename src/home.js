import React from 'react';
import {NavLink} from 'react-router-dom'

const home = () => {
    return ( 
        <div>
            <h3>Welcome</h3>
            <NavLink to='we'>wewe</NavLink>
            <NavLink to='/ye'>yeye</NavLink>
            <NavLink to='/st'>statee</NavLink>
        </div>
     );
}
 
export default home;