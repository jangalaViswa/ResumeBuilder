import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Resume Builder</h1>
            <p>Create professional resumes in minutes</p>
          </div>
          <nav className="nav">
            <button className="btn btn-outline">
              Templates
            </button>
            <button className="btn btn-primary">
              Export PDF
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 