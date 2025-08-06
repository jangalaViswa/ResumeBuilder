import React from 'react';
import { Resume, PersonalInfo, Experience, Education, Skill, Project } from '../types/Resume';
import PersonalInfoForm from './forms/PersonalInfoForm';
import ExperienceForm from './forms/ExperienceForm';
import EducationForm from './forms/EducationForm';
import SkillsForm from './forms/SkillsForm';
import ProjectsForm from './forms/ProjectsForm';
import SummaryForm from './forms/SummaryForm';

interface ResumeFormProps {
  resume: Resume;
  onUpdateResume: (resume: Resume) => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ resume, onUpdateResume }) => {
  const updatePersonalInfo = (personalInfo: PersonalInfo) => {
    onUpdateResume({ ...resume, personalInfo });
  };

  const updateSummary = (summary: string) => {
    onUpdateResume({ ...resume, summary });
  };

  const updateExperience = (experience: Experience[]) => {
    onUpdateResume({ ...resume, experience });
  };

  const updateEducation = (education: Education[]) => {
    onUpdateResume({ ...resume, education });
  };

  const updateSkills = (skills: Skill[]) => {
    onUpdateResume({ ...resume, skills });
  };

  const updateProjects = (projects: Project[]) => {
    onUpdateResume({ ...resume, projects });
  };

  return (
    <div className="resume-form">
      <PersonalInfoForm 
        personalInfo={resume.personalInfo} 
        onUpdate={updatePersonalInfo} 
      />
      
      <SummaryForm 
        summary={resume.summary} 
        onUpdate={updateSummary} 
      />
      
      <ExperienceForm 
        experience={resume.experience} 
        onUpdate={updateExperience} 
      />
      
      <EducationForm 
        education={resume.education} 
        onUpdate={updateEducation} 
      />
      
      <SkillsForm 
        skills={resume.skills} 
        onUpdate={updateSkills} 
      />
      
      <ProjectsForm 
        projects={resume.projects} 
        onUpdate={updateProjects} 
      />
    </div>
  );
};

export default ResumeForm; 