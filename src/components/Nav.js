import React from 'react';

const Nav = (props) => {
    return (
        <nav> 
        <div className='toggle-container'>
        <span role='img' aria-label='sun'> 🌞 </span>
        <span className='toggle'>
            <input 
              checked={props.checked}
              onChange={props.onChange}
              type='checkbox' 
              className='checkbox' 
              id='checkbox'
              />
            <label htmlFor='checkbox' />
        </span> 
         <span role='img' aria-label='moon'> 🌛 </span>
        </div>
    </nav>
    )
}


export default Nav;