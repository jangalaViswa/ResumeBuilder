'use client'

import React, { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import { Resume } from '@/types/Resume'
import { SavedResume, saveResume, generateResumeId } from '@/lib/localStorage'
import ResumeForm from '@/components/ResumeForm'
import ResumePreview from '@/components/ResumePreview'
import { exportToPDF } from '@/utils/pdfExport'
import { analyzeATSScore } from '@/lib/mockAI'
import { Save, Download, BarChart3, Eye, Edit3 } from 'lucide-react'
import toast from 'react-hot-toast'

const initialResume: Resume = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    github: ''
  },
  summary: '',
  experience: [],
  education: [],
  skills: [],
  projects: []
}

export default function ResumeBuilder() {
  const [resume, setResume] = useState<Resume>(initialResume)
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [atsScore, setAtsScore] = useState<{ score: number; suggestions: string[] } | null>(null)
  const [resumeId] = useState(() => generateResumeId())

  const updateResume = (updatedResume: Resume) => {
    setResume(updatedResume)
  }

  const handleSave = () => {
    const savedResume: SavedResume = {
      ...resume,
      id: resumeId,
      title: `${resume.personalInfo.firstName} ${resume.personalInfo.lastName}`.trim() || 'Untitled Resume',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      templateId: 'modern'
    }
    
    saveResume(savedResume)
    toast.success('Resume saved successfully!')
  }

  const handleExportPDF = async () => {
    try {
      await exportToPDF('resume-preview', 'my-resume.pdf')
      toast.success('Resume exported as PDF!')
    } catch (error) {
      toast.error('Failed to export PDF. Please try again.')
    }
  }

  const handleAnalyzeATS = async () => {
    setIsAnalyzing(true)
    try {
      // Convert resume to text for analysis
      const resumeText = `
        ${resume.personalInfo.firstName} ${resume.personalInfo.lastName}
        ${resume.personalInfo.email} ${resume.personalInfo.phone}
        ${resume.summary}
        ${resume.experience.map(exp => `${exp.position} at ${exp.company}: ${exp.description}`).join(' ')}
        ${resume.education.map(edu => `${edu.degree} in ${edu.field} from ${edu.institution}`).join(' ')}
        ${resume.skills.map(skill => skill.name).join(', ')}
        ${resume.projects.map(proj => `${proj.name}: ${proj.description}`).join(' ')}
      `
      
      const result = await analyzeATSScore(resumeText)
      setAtsScore(result)
      toast.success('ATS analysis complete!')
    } catch (error) {
      toast.error('Failed to analyze ATS score. Please try again.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Resume Builder</h1>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleSave}
              className="btn btn-primary flex items-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>Save Resume</span>
            </button>
            <button
              onClick={handleExportPDF}
              className="btn btn-secondary flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Export PDF</span>
            </button>
            <button
              onClick={handleAnalyzeATS}
              disabled={isAnalyzing}
              className="btn btn-outline flex items-center space-x-2"
            >
              <BarChart3 className="w-4 h-4" />
              <span>{isAnalyzing ? 'Analyzing...' : 'Analyze ATS Score'}</span>
            </button>
          </div>
        </div>

        {/* ATS Score Display */}
        {atsScore && (
          <div className="mb-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-primary-600" />
              ATS Score Analysis (Demo)
            </h3>
            <div className="flex items-center mb-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">ATS Compatibility Score</span>
                  <span className={`text-lg font-bold ${
                    atsScore.score >= 80 ? 'text-green-600' : 
                    atsScore.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {atsScore.score}/100
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      atsScore.score >= 80 ? 'bg-green-500' : 
                      atsScore.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${atsScore.score}%` }}
                  ></div>
                </div>
              </div>
            </div>
            {atsScore.suggestions.length > 0 && (
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Suggestions for Improvement:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {atsScore.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('edit')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'edit'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Edit3 className="w-4 h-4 inline mr-2" />
                Edit Resume
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'preview'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Eye className="w-4 h-4 inline mr-2" />
                Preview Resume
              </button>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          {activeTab === 'edit' && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <ResumeForm resume={resume} onUpdateResume={updateResume} />
              </div>
            </div>
          )}

          {/* Preview Section */}
          <div className={`${activeTab === 'preview' ? 'lg:col-span-2' : 'lg:col-span-1'}`}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Live Preview</h3>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  Modern Template
                </span>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <ResumePreview resume={resume} />
              </div>
            </div>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-sm font-medium">ℹ️</span>
              </div>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">Demo Version</h3>
              <p className="text-sm text-blue-700 mt-1">
                This is a demo version with mock AI features. Your resume data is saved locally in your browser. 
                The ATS analyzer and AI content generation use simulated responses for demonstration purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 