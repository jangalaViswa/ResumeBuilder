import React from 'react';
import { Education } from '../../types/Resume';
import { Plus, Trash2 } from 'lucide-react';

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
      <h2 className="section-title">Education</h2>
      
      {education.map((edu, index) => (
        <div key={edu.id} className="bg-gray-50 p-4 rounded-lg mb-4 border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">Education {index + 1}</h3>
            <button 
              type="button" 
              className="btn btn-danger text-sm flex items-center"
              onClick={() => removeEducation(edu.id)}
            >
              <Trash2 className="w-4 h-4 mr-1" />
              Remove
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="form-group">
              <label>Institution *</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                placeholder="University Name"
                className="form-input"
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
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="form-group">
              <label>Field of Study *</label>
              <input
                type="text"
                value={edu.field}
                onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                placeholder="Computer Science, Business, etc."
                className="form-input"
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
                className="form-input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="form-group">
              <label>Start Date *</label>
              <input
                type="month"
                value={edu.startDate}
                onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label>End Date</label>
              <input
                type="month"
                value={edu.endDate}
                onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                className="form-input"
                disabled={edu.current}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={edu.current}
                onChange={(e) => updateEducation(edu.id, 'current', e.target.checked)}
                className="mr-2"
              />
              Currently studying here
            </label>
          </div>
        </div>
      ))}

      <button 
        type="button" 
        className="btn btn-primary flex items-center" 
        onClick={addEducation}
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Education
      </button>
    </div>
  );
};

export default EducationForm; 