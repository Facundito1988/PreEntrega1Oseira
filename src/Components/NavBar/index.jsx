
  import React from 'react';
  import CartWidget from '../CartWidget'
  
  
  function NavBar() {
    return (
      <div className="container">
        <nav className="nav">
            <div className="nav_logo">
                <a className="nav_brand" href="#">FACUNDO</a>
            </div>
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <CartWidget />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default NavBar;