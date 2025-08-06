import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export interface ContentGenerationRequest {
  type: 'summary' | 'experience' | 'skills'
  role?: string
  industry?: string
  experience?: string
  company?: string
  yearsOfExperience?: number
}

export async function generateContent(request: ContentGenerationRequest): Promise<string> {
  try {
    let prompt = ''
    
    switch (request.type) {
      case 'summary':
        prompt = `Write a professional summary for a ${request.role} with ${request.yearsOfExperience} years of experience in the ${request.industry} industry. Make it compelling and ATS-friendly. Keep it to 2-3 sentences.`
        break
        
      case 'experience':
        prompt = `Generate 3-4 professional bullet points for a ${request.role} position at ${request.company} in the ${request.industry} industry. Focus on achievements, metrics, and impact. Use action verbs and be specific about accomplishments.`
        break
        
      case 'skills':
        prompt = `List 8-10 relevant technical and soft skills for a ${request.role} in the ${request.industry} industry. Format as a comma-separated list. Focus on in-demand skills that are ATS-friendly.`
        break
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a professional resume writer and career coach. Generate content that is ATS-optimized, professional, and tailored to the specific role and industry.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 300,
      temperature: 0.7,
    })

    return completion.choices[0]?.message?.content || ''
  } catch (error) {
    console.error('Error generating content:', error)
    throw new Error('Failed to generate content')
  }
}

export async function analyzeATSScore(resumeText: string): Promise<{
  score: number
  suggestions: string[]
}> {
  try {
    const prompt = `Analyze this resume for ATS optimization and provide a score from 0-100 and specific suggestions for improvement:

${resumeText}

Please provide:
1. An ATS score (0-100)
2. Specific suggestions for improvement

Format your response as JSON with "score" and "suggestions" fields.`

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are an ATS (Applicant Tracking System) expert. Analyze resumes for ATS compatibility and provide actionable feedback.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 500,
      temperature: 0.3,
    })

    const result = JSON.parse(completion.choices[0]?.message?.content || '{"score": 0, "suggestions": []}')
    return result
  } catch (error) {
    console.error('Error analyzing ATS score:', error)
    return {
      score: 0,
      suggestions: ['Unable to analyze ATS score at this time']
    }
  }
} 