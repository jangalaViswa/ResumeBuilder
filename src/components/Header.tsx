import React from 'react';
import { exportToPDF } from '../utils/pdfExport';
import './Header.css';

const Header: React.FC = () => {
  const handleExportPDF = () => {
    exportToPDF('resume-preview', 'my-resume.pdf');
  };

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
            <button className="btn btn-primary" onClick={handleExportPDF}>
              Export PDF
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 