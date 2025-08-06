import React from 'react';
import { Project } from '../../types/Resume';

interface ProjectsFormProps {
  projects: Project[];
  onUpdate: (projects: Project[]) => void;
}

const ProjectsForm: React.FC<ProjectsFormProps> = ({ projects, onUpdate }) => {
  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: '',
      description: '',
      technologies: [],
      url: '',
      github: '',
      startDate: '',
      endDate: ''
    };
    onUpdate([...projects, newProject]);
  };

  const updateProject = (id: string, field: keyof Project, value: string | string[]) => {
    const updated = projects.map(project => 
      project.id === id ? { ...project, [field]: value } : project
    );
    onUpdate(updated);
  };

  const updateTechnologies = (id: string, techString: string) => {
    const technologies = techString.split(',').map(tech => tech.trim()).filter(tech => tech);
    updateProject(id, 'technologies', technologies);
  };

  const removeProject = (id: string) => {
    onUpdate(projects.filter(project => project.id !== id));
  };

  return (
    <div className="form-section">
      <h2>Projects</h2>
      
      {projects.map((project, index) => (
        <div key={project.id} className="list-item">
          <div className="list-item-header">
            <h3 className="list-item-title">Project {index + 1}</h3>
            <div className="list-item-actions">
              <button 
                type="button" 
                className="btn btn-danger"
                onClick={() => removeProject(project.id)}
              >
                Remove
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Project Name *</label>
            <input
              type="text"
              value={project.name}
              onChange={(e) => updateProject(project.id, 'name', e.target.value)}
              placeholder="My Awesome Project"
              required
            />
          </div>

          <div className="form-group">
            <label>Description *</label>
            <textarea
              value={project.description}
              onChange={(e) => updateProject(project.id, 'description', e.target.value)}
              placeholder="Describe what the project does, your role, and key achievements..."
              rows={3}
              required
            />
          </div>

          <div className="form-group">
            <label>Technologies Used</label>
            <input
              type="text"
              value={project.technologies.join(', ')}
              onChange={(e) => updateTechnologies(project.id, e.target.value)}
              placeholder="React, TypeScript, Node.js, MongoDB (comma-separated)"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Project URL</label>
              <input
                type="url"
                value={project.url || ''}
                onChange={(e) => updateProject(project.id, 'url', e.target.value)}
                placeholder="https://myproject.com"
              />
            </div>
            
            <div className="form-group">
              <label>GitHub Repository</label>
              <input
                type="url"
                value={project.github || ''}
                onChange={(e) => updateProject(project.id, 'github', e.target.value)}
                placeholder="https://github.com/username/project"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="month"
                value={project.startDate}
                onChange={(e) => updateProject(project.id, 'startDate', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label>End Date</label>
              <input
                type="month"
                value={project.endDate}
                onChange={(e) => updateProject(project.id, 'endDate', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <button type="button" className="btn btn-primary add-item-btn" onClick={addProject}>
        + Add Project
      </button>
    </div>
  );
};

export default ProjectsForm; 