// Mock AI functionality for basic version
// This simulates the OpenAI API responses for demo purposes

export interface ContentGenerationRequest {
  type: 'summary' | 'experience' | 'skills'
  role?: string
  industry?: string
  experience?: string
  company?: string
  yearsOfExperience?: number
}

const mockResponses = {
  summary: {
    'Software Engineer': [
      'Experienced software engineer with 5+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies. Proven track record of delivering scalable web applications and leading development teams.',
      'Results-driven software engineer with strong background in modern web technologies and agile development practices. Passionate about creating efficient, user-friendly applications that solve real-world problems.',
      'Full-stack software engineer with expertise in JavaScript, Python, and cloud platforms. Demonstrated ability to architect and implement complex systems while maintaining high code quality standards.'
    ],
    'Product Manager': [
      'Strategic product manager with 6+ years of experience driving product development from conception to launch. Expert in user research, data analysis, and cross-functional team leadership.',
      'Data-driven product manager specializing in SaaS products and mobile applications. Proven ability to increase user engagement by 40% and drive revenue growth through innovative product strategies.',
      'Experienced product manager with strong background in agile methodologies and user-centered design. Successfully launched 15+ features that improved customer satisfaction and business metrics.'
    ],
    'Marketing Manager': [
      'Creative marketing manager with 7+ years of experience in digital marketing, brand management, and campaign optimization. Proven track record of increasing brand awareness by 60% and lead generation by 45%.',
      'Results-oriented marketing manager specializing in content marketing, social media, and marketing automation. Expert in developing comprehensive marketing strategies that drive customer acquisition and retention.',
      'Strategic marketing professional with expertise in B2B and B2C marketing. Successfully managed marketing budgets of $500K+ and delivered consistent ROI improvements across all channels.'
    ]
  },
  experience: {
    'Software Engineer': [
      '• Developed and maintained 10+ web applications using React, Node.js, and PostgreSQL, serving over 50,000 daily active users\n• Implemented CI/CD pipelines that reduced deployment time by 75% and improved code quality through automated testing\n• Collaborated with cross-functional teams to deliver features that increased user engagement by 35%\n• Mentored 3 junior developers and conducted code reviews to ensure best practices and knowledge sharing',
      '• Built scalable microservices architecture using Docker and Kubernetes, improving system reliability by 90%\n• Optimized database queries and implemented caching strategies, reducing page load times by 60%\n• Led migration from monolithic to microservices architecture, resulting in 40% improvement in development velocity\n• Participated in on-call rotation and incident response, maintaining 99.9% uptime SLA',
      '• Designed and implemented RESTful APIs serving 1M+ requests per day with 99.95% uptime\n• Integrated third-party services including payment processing, analytics, and authentication systems\n• Automated manual processes using Python scripts, saving 20 hours per week of manual work\n• Contributed to open-source projects and presented technical talks at industry conferences'
    ],
    'Product Manager': [
      '• Led product development for mobile app with 100K+ downloads, increasing user retention by 45% through data-driven feature prioritization\n• Conducted user research and A/B testing to optimize onboarding flow, resulting in 30% improvement in conversion rates\n• Collaborated with engineering, design, and marketing teams to deliver 25+ features on schedule and within budget\n• Developed product roadmap and go-to-market strategies that contributed to $2M revenue growth',
      '• Managed product lifecycle from ideation to launch for B2B SaaS platform serving 500+ enterprise customers\n• Analyzed user behavior data and market trends to identify opportunities, resulting in 3 successful product pivots\n• Coordinated cross-functional teams of 15+ members across engineering, design, sales, and customer success\n• Implemented agile methodologies that improved development velocity by 50% and reduced time-to-market',
      '• Defined product vision and strategy for AI-powered analytics platform, securing $5M in Series A funding\n• Conducted competitive analysis and market research to identify product-market fit opportunities\n• Established KPI frameworks and success metrics, achieving 95% customer satisfaction scores\n• Presented product updates to executive leadership and board of directors on quarterly basis'
    ]
  },
  skills: {
    'Software Engineer': [
      'JavaScript, TypeScript, React, Node.js, Python, PostgreSQL, MongoDB, Docker, Kubernetes, AWS, Git, Agile Development, Test-Driven Development, System Design',
      'React, Vue.js, Angular, Express.js, Django, MySQL, Redis, GraphQL, RESTful APIs, Microservices, CI/CD, Jenkins, Linux, Problem Solving',
      'Full-Stack Development, Frontend Development, Backend Development, Database Design, Cloud Computing, DevOps, Software Architecture, Code Review, Technical Leadership'
    ],
    'Product Manager': [
      'Product Strategy, Market Research, User Experience Design, Data Analysis, A/B Testing, Agile Methodologies, Roadmap Planning, Stakeholder Management, Competitive Analysis',
      'Product Development, User Research, Analytics, SQL, Tableau, Jira, Confluence, Figma, Customer Journey Mapping, Go-to-Market Strategy',
      'Strategic Planning, Cross-functional Leadership, Product Marketing, Business Intelligence, KPI Development, Customer Success, Product-Market Fit, Innovation Management'
    ]
  }
}

export async function generateContent(request: ContentGenerationRequest): Promise<string> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))
  
  const { type, role = 'Software Engineer' } = request
  
  try {
    const responses = mockResponses[type]?.[role] || mockResponses[type]['Software Engineer']
    const randomResponse = responses[Math.floor(Math.random() * responses.length)]
    
    return randomResponse
  } catch (error) {
    console.error('Error generating content:', error)
    throw new Error('Failed to generate content')
  }
}

export async function analyzeATSScore(resumeText: string): Promise<{
  score: number
  suggestions: string[]
}> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Simple ATS scoring based on content length and keywords
  const wordCount = resumeText.split(/\s+/).length
  const hasContact = /email|phone|linkedin/i.test(resumeText)
  const hasExperience = /experience|work|job|position/i.test(resumeText)
  const hasSkills = /skills|technologies|tools/i.test(resumeText)
  const hasEducation = /education|degree|university|college/i.test(resumeText)
  
  let score = 60 // Base score
  
  if (wordCount > 200) score += 10
  if (wordCount > 400) score += 10
  if (hasContact) score += 5
  if (hasExperience) score += 10
  if (hasSkills) score += 5
  if (hasEducation) score += 5
  
  // Random variation
  score += Math.floor(Math.random() * 10) - 5
  score = Math.min(100, Math.max(0, score))
  
  const suggestions = []
  
  if (score < 70) {
    suggestions.push('Add more specific keywords related to your industry')
    suggestions.push('Include quantifiable achievements and metrics')
  }
  
  if (score < 80) {
    suggestions.push('Use standard section headings like "Experience" and "Skills"')
    suggestions.push('Ensure consistent formatting throughout the document')
  }
  
  if (score < 90) {
    suggestions.push('Include relevant technical skills and certifications')
    suggestions.push('Use action verbs to start bullet points')
  }
  
  if (!hasContact) {
    suggestions.push('Add complete contact information including email and phone')
  }
  
  if (wordCount < 300) {
    suggestions.push('Expand your experience descriptions with more detail')
  }
  
  return { score, suggestions }
} 