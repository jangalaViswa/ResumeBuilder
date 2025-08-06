import React from 'react'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import { ArrowRight, Sparkles, FileText, Download, Users, Zap, Shield, Globe } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Build Your Perfect Resume with{' '}
              <span className="text-yellow-300">AI</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto text-balance">
              Create professional, ATS-optimized resumes in minutes. Try our demo with mock AI features - no signup required!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/builder" 
                className="btn btn-primary bg-white text-primary-700 hover:bg-gray-100 text-lg px-8 py-3 inline-flex items-center"
              >
                Try Demo Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/templates" 
                className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-700 text-lg px-8 py-3 inline-flex items-center"
              >
                View Templates
              </Link>
            </div>
            <p className="mt-4 text-sm text-primary-200">
              ✨ Demo version with mock AI • No database required • Works offline
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Resume Builder?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the power of AI-assisted resume building with our demo version
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mock AI Content</h3>
              <p className="text-gray-600">
                Experience AI-powered content generation with realistic mock responses for different roles
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ATS Simulation</h3>
              <p className="text-gray-600">
                Demo ATS score analyzer that simulates real optimization feedback
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">PDF Export</h3>
              <p className="text-gray-600">
                Export your resume as a high-quality PDF ready for job applications
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Templates</h3>
              <p className="text-gray-600">
                Choose from professional templates designed for different industries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Demo Version Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Try all features without any setup - perfect for testing and evaluation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Zap className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Instant Setup</h3>
              <p className="text-gray-600">
                No database, no API keys, no configuration. Just run and start building resumes immediately.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Shield className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
              <p className="text-gray-600">
                All data stored locally in your browser. Nothing sent to external servers in demo mode.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Globe className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Works Offline</h3>
              <p className="text-gray-600">
                Once loaded, the demo works completely offline. Perfect for testing without internet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Try Our Resume Builder?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of resume building with our interactive demo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/builder" 
              className="btn btn-primary bg-primary-600 hover:bg-primary-700 text-lg px-8 py-3 inline-flex items-center justify-center"
            >
              Start Demo Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/templates" 
              className="btn btn-outline border-gray-600 text-gray-300 hover:bg-gray-800 text-lg px-8 py-3 inline-flex items-center justify-center"
            >
              Browse Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <FileText className="w-6 h-6 text-primary-600" />
              <span className="text-lg font-semibold text-gray-900">AI Resume Builder</span>
            </div>
            <p className="text-gray-600">
              Demo version - Build professional resumes with mock AI assistance
            </p>
            <p className="text-sm text-gray-500 mt-4">
              © 2024 AI Resume Builder. Demo version for evaluation purposes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 