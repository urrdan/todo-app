import React from 'react';
import { NavLink} from 'react-router-dom';
const Topmenu = () => {
    return ( 
        <div className='navbar navbar-expand-sm bg-secondary navbar-dark justify-content-between p-0 px-2'>
            <h3 className='navbar-brand'>Urrdan</h3>
            <button className='navbar-toggler' data-toggle='collapse' data-target='#we'><span className='navbar-toggler-icon'></span></button>
            <div className='collapse navbar-collapse justify-content-end' id='we'>
                <ul className='navbar-nav'>
                    <NavLink to='/'><li className='nav-link text-warning '>home</li></NavLink>
                    <NavLink to='/about'><li className='nav-link text-warning'>about </li></NavLink>
                    <NavLink to='/more'><li className='nav-link text-warning'>more</li></NavLink>
                </ul> 
            </div>
        </div>
     );
}

export default Topmenu;