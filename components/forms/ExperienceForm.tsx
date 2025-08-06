import React from 'react';
import { Experience } from '../../types/Resume';
import { Plus, Trash2 } from 'lucide-react';

interface ExperienceFormProps {
  experience: Experience[];
  onUpdate: (experience: Experience[]) => void;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ experience, onUpdate }) => {
  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      location: ''
    };
    onUpdate([...experience, newExperience]);
  };

  const updateExperience = (id: string, field: keyof Experience, value: string | boolean) => {
    const updated = experience.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    onUpdate(updated);
  };

  const removeExperience = (id: string) => {
    onUpdate(experience.filter(exp => exp.id !== id));
  };

  return (
    <div className="form-section">
      <h2 className="section-title">Work Experience</h2>
      
      {experience.map((exp, index) => (
        <div key={exp.id} className="bg-gray-50 p-4 rounded-lg mb-4 border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">Experience {index + 1}</h3>
            <button 
              type="button" 
              className="btn btn-danger text-sm flex items-center"
              onClick={() => removeExperience(exp.id)}
            >
              <Trash2 className="w-4 h-4 mr-1" />
              Remove
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="form-group">
              <label>Company *</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                placeholder="Company Name"
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Position *</label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                placeholder="Job Title"
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                value={exp.location}
                onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                placeholder="City, State"
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label>Start Date *</label>
              <input
                type="month"
                value={exp.startDate}
                onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label>End Date</label>
              <input
                type="month"
                value={exp.endDate}
                onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                className="form-input"
                disabled={exp.current}
              />
            </div>
          </div>

          <div className="form-group mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={exp.current}
                onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                className="mr-2"
              />
              Currently working here
            </label>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={exp.description}
              onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
              placeholder="Describe your responsibilities, achievements, and key contributions..."
              rows={4}
              className="form-textarea"
            />
          </div>
        </div>
      ))}

      <button 
        type="button" 
        className="btn btn-primary flex items-center" 
        onClick={addExperience}
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Experience
      </button>
    </div>
  );
};

export default ExperienceForm; 