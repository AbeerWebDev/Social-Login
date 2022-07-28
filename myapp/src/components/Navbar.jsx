import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Abeer's App</span>
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
    
    </div>
  )
}

export default Navbar