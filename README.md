# Mental Health Patient Portal

A modern, AI-powered patient portal web application designed for mental health providers and practices. This application demonstrates patient engagement capabilities and automated workflow benefits for psychiatrists, psychologists, and mental health practices.

## Features

### Core Features
- **Dashboard & Home Screen**: Welcome messages, pending assessments, recent scores with trend indicators
- **Assessment Management**: Interactive PHQ-9 depression and GAD-7 anxiety screenings with auto-scoring
- **Session Management**: Appointment scheduling, pre-session preparation, and session summaries
- **Secure Communication**: HIPAA-compliant messaging with providers and real-time notifications
- **Progress Tracking**: Mood tracking, assessment trends, treatment goal monitoring, and milestone celebrations
- **Profile & Settings**: Personal information management, notification preferences, and security settings

### Key Capabilities
- Real-time provider dashboards during sessions
- Automated processing of therapy session transcripts
- Pre-session assessment management (PHQ-9, GAD-7, custom questionnaires)
- Automated billing and treatment plan management
- Support for both telehealth (85% focus) and in-person sessions
- Saves providers 20-30 minutes per session on administrative work

## Tech Stack

### Frontend
- **Next.js 15.3.0-canary.31** with App Router
- **React 19.0.0-rc** with TypeScript 5.6.3
- **Tailwind CSS 3.4.1** for styling with animations
- **Framer Motion 11.3.19** for advanced animations
- **Radix UI** for accessible UI primitives
- **Lucide React** for icons
- **React Hook Form 7.60.0** for form management
- **Next Themes** for dark/light mode support

### Backend & Database
- **Next.js App Router** with Server Components and Server Actions
- **NextAuth.js 5.0.0-beta.25** for authentication
- **PostgreSQL** with Vercel Postgres
- **Drizzle ORM 0.34.0** for database management
- **Redis 5.0.0** for caching

### AI Integration
- **OpenAI GPT-4 Turbo** for AI-powered features
- **Vercel AI SDK 4.3.13** with OpenAI integration
- **Deepgram SDK 4.9.1** for voice processing

### Storage & Monitoring
- **Vercel Blob** for file storage
- **Vercel Analytics** for monitoring
- **Sonner** for toast notifications

## Prerequisites

Before running this application, ensure you have:

- **Node.js 18.18.0 or higher**
- **pnpm 9.12.3** (recommended package manager)
- **PostgreSQL database** (local or cloud-hosted)
- **Redis instance** (local or cloud-hosted)
- **OpenAI API key** for AI features
- **Vercel account** (for deployment and services)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd patient-portal-test
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   Fill in the required environment variables (see Environment Variables section below).

4. **Database Setup**
   ```bash
   # Run database migrations
   pnpm drizzle-kit push
   
   # Seed database with sample data (optional)
   pnpm run seed
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

### Database
- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_URL` - Redis connection string

### Authentication  
- `NEXTAUTH_SECRET` - Secret key for NextAuth.js sessions
- `NEXTAUTH_URL` - Base URL for NextAuth callbacks (http://localhost:3000 for development)

### AI Services
- `OPENAI_API_KEY` - OpenAI API key for AI-powered features
- `DEEPGRAM_API_KEY` - Deepgram API key for voice processing

### Storage & Services
- `BLOB_READ_WRITE_TOKEN` - Vercel Blob storage token
- `VERCEL_PROJECT_ID` - Vercel project ID (for deployment)

### Optional
- `NODE_ENV` - Environment mode (development/production)
- `NEXT_PUBLIC_APP_URL` - Public app URL for client-side usage

See `.env.example` for detailed configuration examples.

## Running the Development Server

```bash
# Start development server
pnpm dev

# Run with specific port
pnpm dev -- -p 3001

# Run type checking
pnpm typecheck

# Format code
pnpm format

# Run linting
pnpm lint

# Run tests
pnpm test

# Run tests with UI
pnpm test:ui
```

## Demo Credentials

For demonstration purposes, use these pre-configured credentials:

**Email**: `sarah.johnson@email.com`  
**Password**: `password123`

This demo account includes:
- Sample patient profile (Sarah Johnson, 28, Anxiety/Depression treatment)
- Historical assessment data showing improvement over 3 months
- PHQ-9 scores: 15 → 12 → 8 → 6 (showing positive trend)
- GAD-7 scores: 12 → 10 → 7 → 5 (showing improvement)
- Mock upcoming appointment with Dr. Smith
- Sample session summaries and treatment goals
- Message history with provider

## Project Structure

```
app/
├── (auth)/              # Authentication pages
│   └── login/
├── (dashboard)/         # Main application pages
│   ├── dashboard/       # Home dashboard
│   ├── assessments/     # Mental health assessments
│   ├── sessions/        # Appointment management
│   ├── messages/        # Provider communication
│   ├── progress/        # Progress tracking
│   └── settings/        # User settings
├── api/                 # API routes
└── globals.css         # Global styles

components/
├── ui/                  # Reusable UI components
├── dashboard/           # Dashboard-specific components
├── assessments/         # Assessment components
├── messages/            # Messaging components
└── [feature]/          # Feature-specific components

lib/
└── utils.ts            # Utility functions
```

## Key Features for Demo

1. **Patient Dashboard**: Shows assessment reminders, progress trends, and quick actions
2. **Assessment Completion**: Interactive PHQ-9 and GAD-7 questionnaires with real-time scoring
3. **Results Visualization**: Assessment score trends with interactive charts
4. **Session Management**: Appointment scheduling and AI-generated session summaries
5. **Provider Communication**: Secure messaging interface with real-time notifications
6. **Progress Tracking**: Treatment goal monitoring with visual progress indicators
7. **Accessibility**: Full keyboard navigation, screen reader support, and theme switching

## Building for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## Deployment

This application is optimized for deployment on Vercel:

1. Connect your repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

For other platforms, ensure Node.js 18.18.0+ support and configure environment variables accordingly.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions about this patient portal or the AI-powered mental health EHR system, please contact:

- **Technical Support**: [support@example.com](mailto:support@example.com)
- **Sales Demo**: [demo@example.com](mailto:demo@example.com)
- **Documentation**: [docs.example.com](https://docs.example.com)

---

Built with ❤️ for mental health providers and their patients.