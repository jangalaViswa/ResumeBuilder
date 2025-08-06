import React, { useState } from 'react';
import { Resume } from './types/Resume';
import Header from './components/Header';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import './App.css';

const initialResume: Resume = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    github: ''
  },
  summary: '',
  experience: [],
  education: [],
  skills: [],
  projects: []
};

function App() {
  const [resume, setResume] = useState<Resume>(initialResume);
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');

  const updateResume = (updatedResume: Resume) => {
    setResume(updatedResume);
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="container">
          <div className="tab-buttons">
            <button 
              className={`tab-button ${activeTab === 'edit' ? 'active' : ''}`}
              onClick={() => setActiveTab('edit')}
            >
              Edit Resume
            </button>
            <button 
              className={`tab-button ${activeTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveTab('preview')}
            >
              Preview Resume
            </button>
          </div>
          
          <div className="content-area">
            {activeTab === 'edit' ? (
              <div className="edit-section">
                <ResumeForm resume={resume} onUpdateResume={updateResume} />
              </div>
            ) : (
              <div className="preview-section">
                <ResumePreview resume={resume} />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App; 