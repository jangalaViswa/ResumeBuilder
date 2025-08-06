# 🚀 AI Resume Builder - Basic Version

A simplified, demo version of the AI Resume Builder that works without databases or external APIs. Perfect for testing and evaluation!

## ✨ Features

### 🤖 Mock AI Content Generation
- **Demo AI Assistance**: Experience AI-powered content generation with realistic mock responses
- **Role-Based Content**: Generate summaries, experience descriptions, and skills for different roles
- **Simulated Delays**: Realistic loading times to simulate real AI API calls

### 🎨 Professional Resume Builder
- **Real-time Preview**: See your resume update live as you make changes
- **Professional Templates**: Modern, clean design optimized for ATS systems
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

### 📊 ATS Score Simulation
- **Mock ATS Analyzer**: Get realistic feedback on your resume's ATS compatibility
- **Improvement Suggestions**: Receive actionable recommendations to optimize your resume
- **Score Visualization**: Visual progress bar showing your ATS compatibility score

### 💾 Local Data Storage
- **Browser Storage**: All data saved locally using localStorage
- **No Database Required**: Works completely offline once loaded
- **Privacy First**: Your data never leaves your browser

### 📄 PDF Export
- **High-Quality Export**: Export resumes as professional PDFs
- **Print Optimization**: Perfect formatting for printing
- **Instant Download**: One-click PDF generation

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern styling
- **HTML2Canvas + jsPDF** - PDF export functionality
- **LocalStorage** - Client-side data persistence
- **Framer Motion** - Smooth animations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- No database setup required!
- No API keys needed!

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/ai-resume-builder.git
cd ai-resume-builder
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser:**
```
http://localhost:3000
```

That's it! No configuration, no setup, no API keys required.

## 🎯 What's Included in Basic Version

### ✅ Working Features
- ✅ Complete resume builder interface
- ✅ Real-time preview with professional template
- ✅ Mock AI content generation (summaries, experience, skills)
- ✅ ATS score simulation with realistic feedback
- ✅ PDF export functionality
- ✅ Local data persistence (saves in browser)
- ✅ Responsive design for all devices
- ✅ Form validation and error handling

### 🚧 Demo/Mock Features
- 🎭 **AI Content Generation**: Uses pre-written responses for different roles
- 🎭 **ATS Score Analyzer**: Simulated scoring based on content analysis
- 🎭 **User Authentication**: Simple localStorage-based user simulation

### 🔮 Full Version Features (Coming Later)
- 🔮 Real OpenAI API integration
- 🔮 Database persistence with PostgreSQL
- 🔮 User authentication with NextAuth.js
- 🔮 Multiple resume templates
- 🔮 Resume versioning and history
- 🔮 Public resume sharing
- 🔮 Advanced analytics

## 📁 Project Structure

```
ai-resume-builder/
├── app/                    # Next.js App Router
│   ├── builder/           # Resume builder page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Landing page
│   └── providers.tsx      # Context providers
├── components/            # React components
│   ├── forms/            # Form components
│   ├── Navigation.tsx    # Navigation bar
│   ├── ResumeForm.tsx   # Main form component
│   └── ResumePreview.tsx # Resume preview
├── lib/                   # Utility libraries
│   ├── localStorage.ts   # Local storage utilities
│   └── mockAI.ts        # Mock AI responses
├── types/                # TypeScript definitions
│   └── Resume.ts        # Resume data types
├── utils/               # Utility functions
│   └── pdfExport.ts    # PDF export functionality
└── public/             # Static assets
```

## 💡 How Mock AI Works

The basic version includes realistic mock AI responses for:

### Summary Generation
- Pre-written professional summaries for different roles
- Variations based on experience level
- Industry-specific language and keywords

### Experience Descriptions
- Achievement-focused bullet points
- Quantified results and metrics
- Action-verb driven descriptions

### Skills Suggestions
- Role-appropriate technical and soft skills
- Industry-standard skill combinations
- ATS-optimized skill formatting

### ATS Score Analysis
- Content-based scoring algorithm
- Realistic improvement suggestions
- Visual feedback with color-coded scores

## 🎨 Customization

### Adding New Mock Responses
Edit `lib/mockAI.ts` to add responses for new roles:

```typescript
const mockResponses = {
  summary: {
    'Your New Role': [
      'Professional summary 1...',
      'Professional summary 2...',
    ]
  }
}
```

### Styling Changes
The app uses Tailwind CSS. Modify styles in:
- `app/globals.css` - Global styles
- Component files - Component-specific styles

### Template Modifications
Edit `components/ResumePreview.tsx` to customize the resume template.

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy (no environment variables needed!)

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The basic version works on any static hosting platform since it has no server dependencies.

## 🔄 Upgrading to Full Version

When ready to add real AI and database features:

1. **Add Database**: Set up PostgreSQL with Prisma
2. **Add Authentication**: Configure NextAuth.js
3. **Add OpenAI**: Replace mock AI with real OpenAI API
4. **Add Advanced Features**: Templates, versioning, sharing

See `SETUP_GUIDE.md` for full version setup instructions.

## 📞 Support

- 🐛 **Bug Reports**: Open an issue on GitHub
- 💡 **Feature Requests**: Create a feature request issue
- 🤝 **Contributing**: Pull requests welcome!

## 📝 License

MIT License - feel free to use this project for learning, evaluation, or as a starting point for your own resume builder.

---

**Ready to try it out? Just run `npm install && npm run dev` and start building! 🚀**
