import React from 'react';

interface SummaryFormProps {
  summary: string;
  onUpdate: (summary: string) => void;
}

const SummaryForm: React.FC<SummaryFormProps> = ({ summary, onUpdate }) => {
  return (
    <div className="form-section">
      <h2>Professional Summary</h2>
      
      <div className="form-group">
        <label htmlFor="summary">Summary</label>
        <textarea
          id="summary"
          value={summary}
          onChange={(e) => onUpdate(e.target.value)}
          placeholder="Write a brief professional summary highlighting your key skills, experience, and career objectives..."
          rows={4}
        />
      </div>
    </div>
  );
};

export default SummaryForm; 