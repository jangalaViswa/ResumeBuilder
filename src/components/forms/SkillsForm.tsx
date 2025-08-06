import React from 'react';
import { Skill } from '../../types/Resume';

interface SkillsFormProps {
  skills: Skill[];
  onUpdate: (skills: Skill[]) => void;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ skills, onUpdate }) => {
  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: '',
      level: 'Intermediate',
      category: ''
    };
    onUpdate([...skills, newSkill]);
  };

  const updateSkill = (id: string, field: keyof Skill, value: string) => {
    const updated = skills.map(skill => 
      skill.id === id ? { ...skill, [field]: value } : skill
    );
    onUpdate(updated);
  };

  const removeSkill = (id: string) => {
    onUpdate(skills.filter(skill => skill.id !== id));
  };

  const skillLevels: Skill['level'][] = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  return (
    <div className="form-section">
      <h2>Skills</h2>
      
      {skills.map((skill, index) => (
        <div key={skill.id} className="list-item">
          <div className="list-item-header">
            <h3 className="list-item-title">Skill {index + 1}</h3>
            <div className="list-item-actions">
              <button 
                type="button" 
                className="btn btn-danger"
                onClick={() => removeSkill(skill.id)}
              >
                Remove
              </button>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Skill Name *</label>
              <input
                type="text"
                value={skill.name}
                onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                placeholder="JavaScript, Python, Project Management, etc."
                required
              />
            </div>
            
            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                value={skill.category}
                onChange={(e) => updateSkill(skill.id, 'category', e.target.value)}
                placeholder="Programming, Languages, Soft Skills, etc."
              />
            </div>
          </div>

          <div className="form-group">
            <label>Proficiency Level</label>
            <select
              value={skill.level}
              onChange={(e) => updateSkill(skill.id, 'level', e.target.value)}
            >
              {skillLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
        </div>
      ))}

      <button type="button" className="btn btn-primary add-item-btn" onClick={addSkill}>
        + Add Skill
      </button>
    </div>
  );
};

export default SkillsForm; 