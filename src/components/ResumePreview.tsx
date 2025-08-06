import React from 'react';
import { Resume } from '../types/Resume';
import './ResumePreview.css';

interface ResumePreviewProps {
  resume: Resume;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resume }) => {
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString + '-01');
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  const formatDateRange = (startDate: string, endDate: string, current: boolean) => {
    const start = formatDate(startDate);
    const end = current ? 'Present' : formatDate(endDate);
    return `${start} - ${end}`;
  };

  return (
    <div className="resume-preview" id="resume-preview">
      <div className="resume-header">
        <h1 className="resume-name">
          {resume.personalInfo.firstName} {resume.personalInfo.lastName}
        </h1>
        <div className="resume-contact">
          {resume.personalInfo.email && <span>{resume.personalInfo.email}</span>}
          {resume.personalInfo.phone && <span>{resume.personalInfo.phone}</span>}
          {resume.personalInfo.location && <span>{resume.personalInfo.location}</span>}
        </div>
        <div className="resume-links">
          {resume.personalInfo.website && (
            <a href={resume.personalInfo.website} target="_blank" rel="noopener noreferrer">
              Website
            </a>
          )}
          {resume.personalInfo.linkedin && (
            <a href={resume.personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
          {resume.personalInfo.github && (
            <a href={resume.personalInfo.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>

      {resume.summary && (
        <section className="resume-section">
          <h2 className="section-title">Professional Summary</h2>
          <p className="summary-text">{resume.summary}</p>
        </section>
      )}

      {resume.experience.length > 0 && (
        <section className="resume-section">
          <h2 className="section-title">Experience</h2>
          {resume.experience.map(exp => (
            <div key={exp.id} className="experience-item">
              <div className="experience-header">
                <div className="experience-title">
                  <h3>{exp.position}</h3>
                  <h4>{exp.company}</h4>
                </div>
                <div className="experience-meta">
                  <span className="experience-date">
                    {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                  </span>
                  {exp.location && <span className="experience-location">{exp.location}</span>}
                </div>
              </div>
              {exp.description && (
                <div className="experience-description">
                  {exp.description.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {resume.education.length > 0 && (
        <section className="resume-section">
          <h2 className="section-title">Education</h2>
          {resume.education.map(edu => (
            <div key={edu.id} className="education-item">
              <div className="education-header">
                <div className="education-title">
                  <h3>{edu.degree} in {edu.field}</h3>
                  <h4>{edu.institution}</h4>
                </div>
                <div className="education-meta">
                  <span className="education-date">
                    {formatDateRange(edu.startDate, edu.endDate, edu.current)}
                  </span>
                  {edu.gpa && <span className="education-gpa">GPA: {edu.gpa}</span>}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {resume.skills.length > 0 && (
        <section className="resume-section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {Object.entries(
              resume.skills.reduce((acc, skill) => {
                const category = skill.category || 'General';
                if (!acc[category]) acc[category] = [];
                acc[category].push(skill);
                return acc;
              }, {} as Record<string, typeof resume.skills>)
            ).map(([category, categorySkills]) => (
              <div key={category} className="skill-category">
                <h4 className="skill-category-title">{category}</h4>
                <div className="skill-list">
                  {categorySkills.map(skill => (
                    <span key={skill.id} className={`skill-item skill-${skill.level.toLowerCase()}`}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.projects.length > 0 && (
        <section className="resume-section">
          <h2 className="section-title">Projects</h2>
          {resume.projects.map(project => (
            <div key={project.id} className="project-item">
              <div className="project-header">
                <div className="project-title">
                  <h3>{project.name}</h3>
                  <div className="project-links">
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
                {(project.startDate || project.endDate) && (
                  <div className="project-date">
                    {formatDateRange(project.startDate, project.endDate, false)}
                  </div>
                )}
              </div>
              {project.description && (
                <p className="project-description">{project.description}</p>
              )}
              {project.technologies.length > 0 && (
                <div className="project-technologies">
                  <strong>Technologies:</strong>{' '}
                  {project.technologies.join(', ')}
                </div>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ResumePreview; 