import { Resume } from '@/types/Resume'

const RESUMES_KEY = 'ai-resume-builder-resumes'
const TEMPLATES_KEY = 'ai-resume-builder-templates'

export interface SavedResume extends Resume {
  id: string
  title: string
  createdAt: string
  updatedAt: string
  templateId: string
}

export interface ResumeTemplate {
  id: string
  name: string
  description: string
  category: string
  preview: string
}

// Resume operations
export function saveResume(resume: SavedResume): void {
  const resumes = getResumes()
  const existingIndex = resumes.findIndex(r => r.id === resume.id)
  
  if (existingIndex >= 0) {
    resumes[existingIndex] = { ...resume, updatedAt: new Date().toISOString() }
  } else {
    resumes.push(resume)
  }
  
  localStorage.setItem(RESUMES_KEY, JSON.stringify(resumes))
}

export function getResumes(): SavedResume[] {
  if (typeof window === 'undefined') return []
  
  const stored = localStorage.getItem(RESUMES_KEY)
  return stored ? JSON.parse(stored) : []
}

export function getResume(id: string): SavedResume | null {
  const resumes = getResumes()
  return resumes.find(r => r.id === id) || null
}

export function deleteResume(id: string): void {
  const resumes = getResumes().filter(r => r.id !== id)
  localStorage.setItem(RESUMES_KEY, JSON.stringify(resumes))
}

// Template operations
export function getTemplates(): ResumeTemplate[] {
  if (typeof window === 'undefined') return []
  
  const stored = localStorage.getItem(TEMPLATES_KEY)
  if (stored) {
    return JSON.parse(stored)
  }
  
  // Default templates
  const defaultTemplates: ResumeTemplate[] = [
    {
      id: 'modern',
      name: 'Modern Professional',
      description: 'Clean, modern design perfect for tech and creative roles',
      category: 'Professional',
      preview: '/templates/modern-preview.jpg'
    },
    {
      id: 'classic',
      name: 'Classic Traditional',
      description: 'Traditional format ideal for corporate and finance roles',
      category: 'Traditional',
      preview: '/templates/classic-preview.jpg'
    },
    {
      id: 'creative',
      name: 'Creative Designer',
      description: 'Bold, creative layout for designers and artists',
      category: 'Creative',
      preview: '/templates/creative-preview.jpg'
    },
    {
      id: 'minimal',
      name: 'Minimal Clean',
      description: 'Simple, clean design that focuses on content',
      category: 'Minimal',
      preview: '/templates/minimal-preview.jpg'
    }
  ]
  
  localStorage.setItem(TEMPLATES_KEY, JSON.stringify(defaultTemplates))
  return defaultTemplates
}

export function getTemplate(id: string): ResumeTemplate | null {
  const templates = getTemplates()
  return templates.find(t => t.id === id) || null
}

// Utility functions
export function generateResumeId(): string {
  return `resume_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

export function exportResumeData(): string {
  const resumes = getResumes()
  return JSON.stringify(resumes, null, 2)
}

export function importResumeData(data: string): boolean {
  try {
    const resumes = JSON.parse(data) as SavedResume[]
    localStorage.setItem(RESUMES_KEY, JSON.stringify(resumes))
    return true
  } catch (error) {
    console.error('Failed to import resume data:', error)
    return false
  }
} 