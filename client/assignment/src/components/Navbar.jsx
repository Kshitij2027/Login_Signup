// import { Link } from "react-router-dom"

// export default function Navbar() {
//   return (
//       <nav>
//             <Link to="/" className="text-white hover:text-gray-300">Home</Link>
//             <Link to="/register" className="text-white hover:text-gray-300">Register</Link>
//             <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
//     </nav>
//   )
// }




import React, { useState } from 'react'
import { Link } from 'react-router-dom'
  export default function Navbar(props) {
    const [isActive, setIsActive] = useState(false);
  
    const toggleMenu = () => {
      setIsActive(!isActive);
    };
  return (
    <div className="sticky top-0 bg-white shadow-md z-50">
      <section id="header">
            <div>
                <ul id={isActive ? 'navbar active' : 'navbar'}>
                    <li><Link className="active" to="/"><i className="fa-solid fa-house-user"></i> home</Link></li>
                    <li><Link to="/register"><i className="fa-solid fa-shop"></i> Register</Link></li>
                    <li><Link to="/login"><i className="fa-solid fa-address-card"></i> Login</Link></li>
                    <Link to="/" id="close"><i className="fa-solid fa-xmark"></i></Link>
                </ul>
            </div>
            <div id="mobile">
                <Link to="cart.html"><i className="fa-solid fa-bag-shopping"></i></Link>
                <i id="bar" className="fa-solid fa-bars bar" onClick={toggleMenu}></i>
                
            </div>
    </section>
    </div>
  )
}
