# 🚀 AI Resume Builder - Complete Setup Guide

This guide will walk you through setting up all the required services and obtaining the necessary API keys and credentials.

## 📋 Prerequisites

- Node.js 18+ installed
- Git installed
- A code editor (VS Code recommended)
- Basic knowledge of terminal/command line

## 🗂️ Required Services Overview

| Service | Purpose | Required | Cost |
|---------|---------|----------|------|
| PostgreSQL | Database | ✅ Yes | Free (local) |
| OpenAI API | AI content generation | ✅ Yes | Pay-per-use |
| Google OAuth | Social login | ⚠️ Recommended | Free |
| Vercel/Netlify | Hosting | 🔄 For production | Free tier |

## 🛠️ Step-by-Step Setup

### 1. 📁 Project Setup

```bash
# Clone the repository
git clone https://github.com/your-username/ai-resume-builder.git
cd ai-resume-builder

# Install dependencies
npm install

# Copy environment file
cp env.local.example .env.local
```

### 2. 🗄️ Database Setup (PostgreSQL)

#### Option A: Local PostgreSQL Installation

**Windows:**
1. Download PostgreSQL from [postgresql.org](https://www.postgresql.org/download/windows/)
2. Install with default settings
3. Remember your password for the `postgres` user
4. PostgreSQL will run on port 5432 by default

**macOS:**
```bash
# Using Homebrew
brew install postgresql
brew services start postgresql

# Create database
createdb ai_resume_builder
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Switch to postgres user and create database
sudo -u postgres psql
CREATE DATABASE ai_resume_builder;
CREATE USER resume_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE ai_resume_builder TO resume_user;
\q
```

#### Option B: Docker (Easiest)

```bash
# Create docker-compose.yml
cat > docker-compose.yml << EOF
version: '3.8'
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: ai_resume_builder
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
EOF

# Start PostgreSQL
docker-compose up -d
```

#### Option C: Cloud Database (Production)

**Supabase (Recommended for beginners):**
1. Go to [supabase.com](https://supabase.com)
2. Sign up and create a new project
3. Go to Settings → Database
4. Copy the connection string
5. Replace in your `.env.local`

**Railway:**
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Provision PostgreSQL"
4. Copy the connection string from the Variables tab

**Neon (Serverless):**
1. Go to [neon.tech](https://neon.tech)
2. Sign up and create a database
3. Copy the connection string

### 3. 🤖 OpenAI API Setup (REQUIRED)

1. **Create OpenAI Account:**
   - Go to [platform.openai.com](https://platform.openai.com)
   - Sign up or log in

2. **Add Billing Information:**
   - Go to [Billing](https://platform.openai.com/account/billing)
   - Add a payment method
   - Add at least $5 credit (minimum)

3. **Create API Key:**
   - Go to [API Keys](https://platform.openai.com/api-keys)
   - Click "Create new secret key"
   - Name it "AI Resume Builder"
   - Copy the key (starts with `sk-`)
   - Add to `.env.local`:
   ```
   OPENAI_API_KEY="sk-your-actual-api-key-here"
   ```

**💡 Cost Estimate:** ~$0.01-0.05 per resume generation

### 4. 🔐 NextAuth Secret Generation

Generate a secure random secret:

```bash
# Option 1: Using OpenSSL (Mac/Linux)
openssl rand -base64 32

# Option 2: Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Option 3: Online generator
# Visit: https://generate-secret.vercel.app/32
```

Add to `.env.local`:
```
NEXTAUTH_SECRET="your-generated-secret-here"
```

### 5. 🔑 Google OAuth Setup (Recommended)

1. **Google Cloud Console:**
   - Go to [console.cloud.google.com](https://console.cloud.google.com)
   - Create a new project or select existing one

2. **Enable APIs:**
   - Go to "APIs & Services" → "Library"
   - Search and enable "Google+ API"

3. **Create OAuth Credentials:**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth 2.0 Client IDs"
   - Choose "Web application"
   - Name: "AI Resume Builder"
   
4. **Configure Redirect URIs:**
   - Authorized JavaScript origins:
     - `http://localhost:3000`
     - `https://your-production-domain.com` (for production)
   - Authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google`
     - `https://your-production-domain.com/api/auth/callback/google`

5. **Copy Credentials:**
   ```
   GOOGLE_CLIENT_ID="your-client-id.apps.googleusercontent.com"
   GOOGLE_CLIENT_SECRET="your-client-secret"
   ```

### 6. 📧 Email Setup (Optional)

For sending emails (password reset, notifications):

#### Option A: Resend (Recommended)
1. Go to [resend.com](https://resend.com)
2. Sign up and verify your account
3. Go to API Keys and create a new key
4. Add to `.env.local`:
   ```
   RESEND_API_KEY="re_your-api-key"
   EMAIL_FROM="noreply@your-domain.com"
   ```

#### Option B: SendGrid
1. Go to [sendgrid.com](https://sendgrid.com)
2. Create account and verify
3. Create API key in Settings → API Keys
4. Add to `.env.local`:
   ```
   SENDGRID_API_KEY="SG.your-api-key"
   ```

### 7. 🗃️ Database Migration

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# (Optional) View database in browser
npx prisma studio
```

### 8. 🚀 Run the Application

```bash
# Start development server
npm run dev

# Open browser
open http://localhost:3000
```

## 📝 Complete .env.local Example

```bash
# ==============================================
# REQUIRED - MINIMUM SETUP
# ==============================================
DATABASE_URL="postgresql://postgres:password@localhost:5432/ai_resume_builder"
NEXTAUTH_SECRET="your-32-character-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
OPENAI_API_KEY="sk-your-openai-api-key-here"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# ==============================================
# RECOMMENDED - GOOGLE OAUTH
# ==============================================
GOOGLE_CLIENT_ID="your-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-client-secret"

# ==============================================
# OPTIONAL - ADDITIONAL FEATURES
# ==============================================
RESEND_API_KEY="re_your-resend-api-key"
EMAIL_FROM="noreply@yourdomain.com"
NODE_ENV="development"
```

## 🔧 Troubleshooting

### Common Issues:

**1. Database Connection Error:**
```
Error: Can't reach database server
```
**Solution:** Check if PostgreSQL is running and credentials are correct.

**2. OpenAI API Error:**
```
Error: Incorrect API key provided
```
**Solution:** Verify your OpenAI API key and ensure billing is set up.

**3. NextAuth Error:**
```
[next-auth][error][CLIENT_FETCH_ERROR]
```
**Solution:** Check NEXTAUTH_URL and NEXTAUTH_SECRET are set correctly.

**4. Google OAuth Error:**
```
Error: redirect_uri_mismatch
```
**Solution:** Ensure redirect URIs in Google Console match exactly.

### Debug Commands:

```bash
# Check database connection
npx prisma db push --preview-feature

# View environment variables
npm run dev -- --debug

# Reset database
npx prisma migrate reset

# View logs
npm run dev | grep -i error
```

## 🚀 Production Deployment

### Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in project settings
   - Deploy

3. **Update Environment Variables:**
   ```
   NEXTAUTH_URL="https://your-app.vercel.app"
   NEXT_PUBLIC_APP_URL="https://your-app.vercel.app"
   ```

4. **Update Google OAuth:**
   - Add production URLs to Google Console redirect URIs

## 📞 Support

If you encounter issues:

1. Check this guide again
2. Search existing GitHub issues
3. Create a new issue with:
   - Error message
   - Steps to reproduce
   - Your environment details

## 🎉 Success!

If everything is set up correctly, you should see:
- ✅ Landing page loads at `http://localhost:3000`
- ✅ Database connection works
- ✅ Google OAuth sign-in works
- ✅ AI content generation works
- ✅ Resume builder is functional

**You're ready to start building amazing resumes with AI! 🚀** 