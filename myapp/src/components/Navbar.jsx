import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
  return (
    <div className='navbar'>
        <span className='logo'>
          <Link to='/' className='link'>Abeer's App</Link>
        </span>
        { 
          user ? (
        <ul className="list">
            <li className="listItem">
                <img 
                src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="" 
                className="avatar" 
                />
            </li>
            <li className="listItem">John Doe</li>
            <li className="listItem">Logout</li>
        </ul>
          ) : (
            <Link to='/login' className='link'>Login</Link>
          )}
    
    </div>
  )
}

export default Navbar