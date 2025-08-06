import React from 'react';
import { Project } from '../../types/Resume';
import { Plus, Trash2 } from 'lucide-react';

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
      <h2 className="section-title">Projects</h2>
      
      {projects.map((project, index) => (
        <div key={project.id} className="bg-gray-50 p-4 rounded-lg mb-4 border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">Project {index + 1}</h3>
            <button 
              type="button" 
              className="btn btn-danger text-sm flex items-center"
              onClick={() => removeProject(project.id)}
            >
              <Trash2 className="w-4 h-4 mr-1" />
              Remove
            </button>
          </div>

          <div className="form-group mb-4">
            <label>Project Name *</label>
            <input
              type="text"
              value={project.name}
              onChange={(e) => updateProject(project.id, 'name', e.target.value)}
              placeholder="My Awesome Project"
              className="form-input"
              required
            />
          </div>

          <div className="form-group mb-4">
            <label>Description *</label>
            <textarea
              value={project.description}
              onChange={(e) => updateProject(project.id, 'description', e.target.value)}
              placeholder="Describe what the project does, your role, and key achievements..."
              rows={3}
              className="form-textarea"
              required
            />
          </div>

          <div className="form-group mb-4">
            <label>Technologies Used</label>
            <input
              type="text"
              value={project.technologies.join(', ')}
              onChange={(e) => updateTechnologies(project.id, e.target.value)}
              placeholder="React, TypeScript, Node.js, MongoDB (comma-separated)"
              className="form-input"
            />
            <p className="text-xs text-gray-500 mt-1">
              Separate technologies with commas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="form-group">
              <label>Project URL</label>
              <input
                type="url"
                value={project.url || ''}
                onChange={(e) => updateProject(project.id, 'url', e.target.value)}
                placeholder="https://myproject.com"
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label>GitHub Repository</label>
              <input
                type="url"
                value={project.github || ''}
                onChange={(e) => updateProject(project.id, 'github', e.target.value)}
                placeholder="https://github.com/username/project"
                className="form-input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="month"
                value={project.startDate}
                onChange={(e) => updateProject(project.id, 'startDate', e.target.value)}
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label>End Date</label>
              <input
                type="month"
                value={project.endDate}
                onChange={(e) => updateProject(project.id, 'endDate', e.target.value)}
                className="form-input"
              />
            </div>
          </div>
        </div>
      ))}

      <button 
        type="button" 
        className="btn btn-primary flex items-center" 
        onClick={addProject}
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Project
      </button>
    </div>
  );
};

export default ProjectsForm; 