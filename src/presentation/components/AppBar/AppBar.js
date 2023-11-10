import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppBar.css';

const AppBar = () => {
  return (
    <div className="app-bar" >
      <h1>CyberStore</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active-link" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/helloworld" activeClassName="active-link">
              Salve
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active-link">
              Produtos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AppBar;