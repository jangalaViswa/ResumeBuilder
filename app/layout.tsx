import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Resume Builder - Create Professional Resumes with AI',
  description: 'Build stunning, ATS-optimized resumes with AI assistance. Choose from professional templates, get AI-generated content, and export to PDF.',
  keywords: 'resume builder, AI resume, professional resume, ATS optimization, resume templates',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  )
} 