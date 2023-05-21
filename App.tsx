import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Services</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
      <div className="container">
        <div className="sidebar">
          <ul className="sidebar-menu">
            <li className="menu-item">Blog</li>
            <li className="menu-item">Author</li>
            <li className="menu-item">Books</li>
          </ul>
        </div>
        <div className="content">
          <h1>Reactjs</h1>
          <p>The following article is dedicated to React enthusiasts.</p>
          <p>When it comes to running React.js code online, there are several platforms available that allow you to create and test your React.js projects.</p>
        </div>
      </div>
    </div>
  );
}
