# 🚀 AI Resume Builder

A full-stack, AI-integrated resume builder that helps users create professional, ATS-optimized resumes with the power of artificial intelligence.

## ✨ Features

### 🤖 AI-Powered Content Generation
- **Smart Content Creation**: Generate compelling bullet points, professional summaries, and skills based on your role and industry
- **OpenAI Integration**: Leverages GPT-3.5-turbo for intelligent content suggestions
- **Industry-Specific**: Tailored content for different roles and industries

### 🎨 Professional Templates
- **Multiple Templates**: Choose from professionally designed resume templates
- **Real-time Preview**: See your resume update live as you make changes
- **Responsive Design**: Templates look great on all devices and print perfectly

### 🔐 User Authentication & Management
- **Multiple Auth Options**: Sign up with email or Google OAuth
- **Role-based Access**: User and admin roles with appropriate permissions
- **Secure Sessions**: NextAuth.js integration with JWT tokens

### 📊 ATS Optimization
- **ATS Score Analyzer**: Get real-time feedback on your resume's ATS compatibility
- **Optimization Suggestions**: Receive specific recommendations to improve your score
- **Keyword Analysis**: Ensure your resume includes relevant industry keywords

### 🌐 Web Resume Hosting
- **Custom URLs**: Share your resume with custom slugs (e.g., `/resume/john-doe-2024`)
- **Public/Private Control**: Choose to make your resume public or keep it private
- **QR Code Generation**: Generate QR codes for easy sharing

### 📄 Export & Download
- **High-Quality PDF**: Export resumes as professional PDFs
- **Multiple Formats**: Support for different export formats
- **Print Optimization**: Perfect formatting for printing

### 🔄 Version Control
- **Resume Versioning**: Save multiple versions of your resume
- **Duplicate & Edit**: Create variations for different job applications
- **Version History**: Track changes and revert when needed

### 📈 Analytics & Insights
- **View Tracking**: See how many times your resume has been viewed
- **Download Analytics**: Track resume downloads
- **Performance Metrics**: Understand your resume's reach

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Hook Form** - Form management with validation
- **Lucide React** - Beautiful icons

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Prisma** - Type-safe database ORM
- **PostgreSQL** - Robust relational database
- **NextAuth.js** - Authentication solution

### AI & External Services
- **OpenAI API** - GPT-3.5-turbo for content generation
- **Google OAuth** - Social authentication
- **React PDF** - PDF generation and export

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- OpenAI API key
- Google OAuth credentials (optional)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ai-resume-builder.git
cd ai-resume-builder
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/resume_builder"

# NextAuth.js
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth (Optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# OpenAI
OPENAI_API_KEY="your-openai-api-key"

# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 4. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Push database schema
npx prisma db push

# Optional: Seed database with templates
npx prisma db seed
```

### 5. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
ai-resume-builder/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── resume/            # Resume builder & viewer
│   └── admin/             # Admin panel
├── components/            # Reusable React components
│   ├── forms/             # Form components
│   ├── templates/         # Resume templates
│   └── ui/                # UI components
├── lib/                   # Utility libraries
│   ├── prisma.ts          # Database client
│   ├── openai.ts          # AI integration
│   └── utils.ts           # Helper functions
├── prisma/                # Database schema & migrations
├── public/                # Static assets
└── types/                 # TypeScript type definitions
```

## 🎯 User Roles & Permissions

### Guest Users
- Browse available templates
- Try demo resume builder
- View public resumes

### Registered Users
- Create unlimited resumes
- Access AI content generation
- Save and manage resume versions
- Export to PDF
- Host resumes online
- View analytics

### Admin Users
- Manage resume templates
- View user analytics
- Configure feature toggles
- Access admin dashboard

## 🔧 Key Features Implementation

### AI Content Generation
The app integrates with OpenAI's GPT-3.5-turbo to generate:
- Professional summaries based on role and experience
- Achievement-focused bullet points
- Industry-relevant skills
- ATS optimization suggestions

### Template System
- Modular React components for each template
- JSON-based data structure for easy template switching
- Conditional rendering for optional sections
- Print-optimized layouts

### ATS Score Analyzer
- Analyzes resume content for ATS compatibility
- Provides actionable improvement suggestions
- Checks for keyword optimization
- Evaluates formatting and structure

### Real-time Preview
- Live updates as users input data
- Controlled components with React hooks
- Auto-sanitization to prevent layout breaks
- Responsive design for all screen sizes

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy with automatic CI/CD

### Docker
```bash
# Build Docker image
docker build -t ai-resume-builder .

# Run container
docker run -p 3000:3000 ai-resume-builder
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for providing the GPT API
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Prisma for the excellent ORM

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the documentation
- Join our Discord community

---

**Built with ❤️ using Next.js, TypeScript, and AI**
