import React from 'react';
import { Experience } from '../../types/Resume';

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
      <h2>Work Experience</h2>
      
      {experience.map((exp, index) => (
        <div key={exp.id} className="list-item">
          <div className="list-item-header">
            <h3 className="list-item-title">Experience {index + 1}</h3>
            <div className="list-item-actions">
              <button 
                type="button" 
                className="btn btn-danger"
                onClick={() => removeExperience(exp.id)}
              >
                Remove
              </button>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Company *</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                placeholder="Company Name"
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
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                value={exp.location}
                onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                placeholder="City, State"
              />
            </div>
            
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={exp.current}
                  onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                  style={{ marginRight: '8px' }}
                />
                Currently working here
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Date *</label>
              <input
                type="month"
                value={exp.startDate}
                onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label>End Date</label>
              <input
                type="month"
                value={exp.endDate}
                onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                disabled={exp.current}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              value={exp.description}
              onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
              placeholder="Describe your responsibilities, achievements, and key contributions..."
              rows={4}
            />
          </div>
        </div>
      ))}

      <button type="button" className="btn btn-primary add-item-btn" onClick={addExperience}>
        + Add Experience
      </button>
    </div>
  );
};

export default ExperienceForm; 