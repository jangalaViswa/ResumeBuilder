import React from 'react';
import { Resume } from '../types/Resume';

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
    <div className="resume-preview bg-white p-8 max-w-4xl mx-auto" id="resume-preview">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {resume.personalInfo.firstName} {resume.personalInfo.lastName}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-gray-600 mb-2">
          {resume.personalInfo.email && <span>{resume.personalInfo.email}</span>}
          {resume.personalInfo.phone && <span>{resume.personalInfo.phone}</span>}
          {resume.personalInfo.location && <span>{resume.personalInfo.location}</span>}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {resume.personalInfo.website && (
            <a href={resume.personalInfo.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Website
            </a>
          )}
          {resume.personalInfo.linkedin && (
            <a href={resume.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
          )}
          {resume.personalInfo.github && (
            <a href={resume.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Professional Summary */}
      {resume.summary && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed">{resume.summary}</p>
        </section>
      )}

      {/* Experience */}
      {resume.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">
            EXPERIENCE
          </h2>
          {resume.experience.map(exp => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                  <h4 className="text-md font-medium text-gray-700">{exp.company}</h4>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <div>{formatDateRange(exp.startDate, exp.endDate, exp.current)}</div>
                  {exp.location && <div>{exp.location}</div>}
                </div>
              </div>
              {exp.description && (
                <div className="text-gray-700 mt-2">
                  {exp.description.split('\n').map((line, index) => (
                    <p key={index} className="mb-1">{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {resume.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">
            EDUCATION
          </h2>
          {resume.education.map(edu => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
                  <h4 className="text-md font-medium text-gray-700">{edu.institution}</h4>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <div>{formatDateRange(edu.startDate, edu.endDate, edu.current)}</div>
                  {edu.gpa && <div>GPA: {edu.gpa}</div>}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {resume.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">
            SKILLS
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {Object.entries(
              resume.skills.reduce((acc, skill) => {
                const category = skill.category || 'General';
                if (!acc[category]) acc[category] = [];
                acc[category].push(skill);
                return acc;
              }, {} as Record<string, typeof resume.skills>)
            ).map(([category, categorySkills]) => (
              <div key={category}>
                <h4 className="font-semibold text-gray-900 mb-1">{category}:</h4>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map(skill => (
                    <span
                      key={skill.id}
                      className={`px-2 py-1 rounded text-sm ${
                        skill.level === 'Expert' ? 'bg-green-100 text-green-800' :
                        skill.level === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                        skill.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {resume.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-1">
            PROJECTS
          </h2>
          {resume.projects.map(project => (
            <div key={project.id} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                  <div className="flex gap-3 text-sm">
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
                {(project.startDate || project.endDate) && (
                  <div className="text-sm text-gray-600">
                    {formatDateRange(project.startDate, project.endDate, false)}
                  </div>
                )}
              </div>
              {project.description && (
                <p className="text-gray-700 mb-2">{project.description}</p>
              )}
              {project.technologies.length > 0 && (
                <div className="text-sm text-gray-600">
                  <strong>Technologies:</strong> {project.technologies.join(', ')}
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