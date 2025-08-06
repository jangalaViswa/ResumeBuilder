import React from 'react';
import { Education } from '../../types/Resume';

interface EducationFormProps {
  education: Education[];
  onUpdate: (education: Education[]) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ education, onUpdate }) => {
  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: '',
      current: false
    };
    onUpdate([...education, newEducation]);
  };

  const updateEducation = (id: string, field: keyof Education, value: string | boolean) => {
    const updated = education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    );
    onUpdate(updated);
  };

  const removeEducation = (id: string) => {
    onUpdate(education.filter(edu => edu.id !== id));
  };

  return (
    <div className="form-section">
      <h2>Education</h2>
      
      {education.map((edu, index) => (
        <div key={edu.id} className="list-item">
          <div className="list-item-header">
            <h3 className="list-item-title">Education {index + 1}</h3>
            <div className="list-item-actions">
              <button 
                type="button" 
                className="btn btn-danger"
                onClick={() => removeEducation(edu.id)}
              >
                Remove
              </button>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Institution *</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                placeholder="University Name"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Degree *</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                placeholder="Bachelor's, Master's, PhD, etc."
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Field of Study *</label>
              <input
                type="text"
                value={edu.field}
                onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                placeholder="Computer Science, Business, etc."
                required
              />
            </div>
            
            <div className="form-group">
              <label>GPA (Optional)</label>
              <input
                type="text"
                value={edu.gpa || ''}
                onChange={(e) => updateEducation(edu.id, 'gpa', e.target.value)}
                placeholder="3.8/4.0"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Date *</label>
              <input
                type="month"
                value={edu.startDate}
                onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label>End Date</label>
              <input
                type="month"
                value={edu.endDate}
                onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                disabled={edu.current}
              />
            </div>
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={edu.current}
                onChange={(e) => updateEducation(edu.id, 'current', e.target.checked)}
                style={{ marginRight: '8px' }}
              />
              Currently studying here
            </label>
          </div>
        </div>
      ))}

      <button type="button" className="btn btn-primary add-item-btn" onClick={addEducation}>
        + Add Education
      </button>
    </div>
  );
};

export default EducationForm; 