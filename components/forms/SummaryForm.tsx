'use client'

import React, { useState } from 'react'
import { generateContent } from '../../lib/mockAI'
import { Sparkles } from 'lucide-react'
import toast from 'react-hot-toast'

interface SummaryFormProps {
  summary: string
  onUpdate: (summary: string) => void
}

const SummaryForm: React.FC<SummaryFormProps> = ({ summary, onUpdate }) => {
  const [isGenerating, setIsGenerating] = useState(false)
  const [role, setRole] = useState('')
  const [yearsExperience, setYearsExperience] = useState('')

  const handleGenerateAI = async () => {
    if (!role.trim()) {
      toast.error('Please enter your job title first')
      return
    }

    setIsGenerating(true)
    try {
      const generatedContent = await generateContent({
        type: 'summary',
        role: role,
        yearsOfExperience: parseInt(yearsExperience) || 3
      })
      onUpdate(generatedContent)
      toast.success('AI summary generated!')
    } catch (error) {
      toast.error('Failed to generate summary')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="form-section">
      <h2 className="section-title">Professional Summary</h2>
      
      {/* AI Generation Controls */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg mb-6 border border-purple-200">
        <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
          <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
          AI Assistant (Demo)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Job Title</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g., Software Engineer"
              className="form-input text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Years of Experience</label>
            <input
              type="number"
              value={yearsExperience}
              onChange={(e) => setYearsExperience(e.target.value)}
              placeholder="3"
              className="form-input text-sm"
            />
          </div>
          <div className="flex items-end">
            <button
              type="button"
              onClick={handleGenerateAI}
              disabled={isGenerating}
              className="btn btn-primary w-full text-sm flex items-center justify-center"
            >
              <Sparkles className="w-4 h-4 mr-1" />
              {isGenerating ? 'Generating...' : 'Generate AI Summary'}
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-600">
          💡 AI will generate a professional summary based on your role and experience
        </p>
      </div>
      
      <div className="form-group">
        <label htmlFor="summary">Professional Summary</label>
        <textarea
          id="summary"
          value={summary}
          onChange={(e) => onUpdate(e.target.value)}
          placeholder="Write a brief professional summary highlighting your key skills, experience, and career objectives... or use AI to generate one above!"
          rows={5}
          className="form-textarea"
        />
        <p className="text-xs text-gray-500 mt-1">
          2-3 sentences that highlight your key qualifications and career goals
        </p>
      </div>
    </div>
  )
}

export default SummaryForm 