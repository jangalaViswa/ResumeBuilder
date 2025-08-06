import React from 'react';
import { Skill } from '../../types/Resume';
import { Plus, Trash2 } from 'lucide-react';

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
      <h2 className="section-title">Skills</h2>
      
      {skills.map((skill, index) => (
        <div key={skill.id} className="bg-gray-50 p-4 rounded-lg mb-4 border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">Skill {index + 1}</h3>
            <button 
              type="button" 
              className="btn btn-danger text-sm flex items-center"
              onClick={() => removeSkill(skill.id)}
            >
              <Trash2 className="w-4 h-4 mr-1" />
              Remove
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="form-group">
              <label>Skill Name *</label>
              <input
                type="text"
                value={skill.name}
                onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                placeholder="JavaScript, Python, Project Management, etc."
                className="form-input"
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
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Proficiency Level</label>
              <select
                value={skill.level}
                onChange={(e) => updateSkill(skill.id, 'level', e.target.value)}
                className="form-select"
              >
                {skillLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ))}

      <button 
        type="button" 
        className="btn btn-primary flex items-center" 
        onClick={addSkill}
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Skill
      </button>
    </div>
  );
};

export default SkillsForm; 