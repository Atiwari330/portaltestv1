<role>
You are an expert Next.js/React developer and healthcare UX designer with 10+ years of experience building award-winning patient portal applications for mental health providers. You specialize in creating intuitive, empathetic, and clinically-appropriate web interfaces that improve patient engagement and treatment outcomes using cutting-edge web technologies.
</role>

<objective>
Create a modern, professional patient portal web application for an AI-powered mental health EHR system. This app will be demonstrated to psychiatrists, psychologists, and mental health practices to showcase patient engagement capabilities and automated workflow benefits. The application should be responsive and work seamlessly on both desktop and mobile devices.
</objective>

<context>
This patient portal is part of an AI-powered mental health EHR that:
- Processes therapy session transcripts to generate clinical notes automatically
- Manages pre-session assessments (PHQ-9, GAD-7, custom questionnaires)
- Provides real-time provider dashboards during sessions
- Handles automated billing, treatment plans, and medication management
- Targets 85% telehealth practices and supports in-person sessions
- Saves providers 20-30 minutes per session on administrative work
</context>

<design_reference>
Reference the uploaded screenshot showing a health tracking mobile app with:
- Card-based vital signs display (Blood Pressure, Temperature, Steps, Heart Rate)
- Clean typography with clear data hierarchy
- Gentle color palette with green accent colors
- Time stamps and trend indicators
- Professional medical aesthetic
- Intuitive navigation patterns
- Data visualization with charts and progress tracking
- Pain assessment interface with emoji-based rating system
</design_reference>

<technical_requirements>
<tech_stack>
Frontend:
- Next.js 15.3.0-canary.31 with App Router
- React 19.0.0-rc
- TypeScript 5.6.3
- Tailwind CSS 3.4.1 for styling
- Tailwind Animate for basic animations
- Framer Motion 11.3.19 for advanced animations
- Radix UI for accessible UI primitives
- Lucide React for icons
- Sonner for toast notifications
- Next Themes for dark/light mode
- React Hook Form 7.60.0 for form management
- Geist font family
- React Data Grid 7.0.0-beta for data tables

Backend:
- Next.js App Router with Server Components
- NextAuth.js 5.0.0-beta.25 for authentication
- Node.js runtime

Database:
- PostgreSQL with Vercel Postgres
- Drizzle ORM 0.34.0
- Redis 5.0.0 for caching

AI Integration:
- OpenAI GPT-4 Turbo
- Vercel AI SDK 4.3.13
- @ai-sdk/openai 1.3.22
- Deepgram SDK 4.9.1 for voice processing

Storage & Monitoring:
- Vercel Blob 0.24.1 for file storage
- Vercel Analytics 1.3.1
- OpenTelemetry for monitoring

Dev Tools:
- ESLint 8.57.0
- Biome 1.9.4 for formatting
- Playwright 1.50.1 for testing
- pnpm 9.12.3 as package manager

Deployment:
- Vercel platform
- Vercel Functions 2.0.0
</tech_stack>

<architecture>
- Next.js App Router with route groups (/dashboard, /assessments, /sessions)
- Server Components for data fetching and static content
- Client Components for interactive elements
- Server Actions for form submissions and mutations
- Middleware for authentication and route protection
- Custom hooks for client-side logic
- Context providers for global state (theme, user preferences)
- Component composition with Radix UI primitives
- Type-safe API routes with proper error handling
- Responsive design with mobile-first approach
</architecture>
</technical_requirements>

<core_features>
<feature name="Dashboard/Home Screen">
- Welcome message with patient name and upcoming appointment
- Quick access to pending assessments (with Sonner notifications)
- Recent assessment scores (PHQ-9, GAD-7) with trend indicators using React Data Grid
- Treatment progress visualization with Framer Motion animations
- Quick actions: Schedule appointment, Message provider, View last session summary
- Medication reminders if applicable
- Dark/light mode toggle with Next Themes
</feature>

<feature name="Assessment Management">
- List of pending assessments with due dates
- Interactive PHQ-9 depression screening (9 questions, 0-3 scale) using React Hook Form
- Interactive GAD-7 anxiety screening (7 questions, 0-3 scale)
- Custom provider-defined questionnaires
- Auto-save functionality with Server Actions
- Automatic scoring and results display
- Historical assessment trends with interactive charts
- Form validation with proper error states
</feature>

<feature name="Session Management">
- Upcoming appointments with provider details and session type
- Pre-session preparation checklist
- Session summaries from completed appointments
- Treatment plan goals and progress tracking
- Session notes sharing (patient-friendly summaries)
- Appointment scheduling and rescheduling with Server Actions
- Calendar integration views
</feature>

<feature name="Communication">
- Secure messaging with provider (HIPAA compliant) using AI SDK
- Real-time notifications with Sonner
- Appointment reminders and notifications
- Medication alerts and refill reminders
- Educational content and resources sharing
- Emergency contact/crisis support access
- Voice message capabilities with Deepgram integration
</feature>

<feature name="Progress Tracking">
- Mood tracking over time with animated charts
- Assessment score trends (PHQ-9, GAD-7 progress) using React Data Grid
- Treatment goal achievement status with progress bars
- Session attendance tracking
- Milestone celebrations with Framer Motion animations
- Data export capabilities
</feature>

<feature name="Profile & Settings">
- Personal information management with React Hook Form
- Insurance and emergency contact details
- Notification preferences
- Privacy settings and data sharing controls
- Theme preferences (dark/light mode)
- Accessibility options
- Account security settings with NextAuth.js
</feature>
</core_features>

<ui_design_system>
<color_palette>
Primary: blue-600 - trustworthy, clinical
Secondary: emerald-500 - positive, growth
Accent: violet-500 - creativity, healing
Neutral: slate color scale (50-950)
Success: emerald-500
Warning: amber-500
Error: red-500
Background: slate-50 / slate-950 for dark mode
</color_palette>

<typography>
Font Family: Geist (with system fallbacks)
- text-4xl font-bold (Heading 1)
- text-2xl font-semibold (Heading 2)
- text-xl font-semibold (Heading 3)
- text-lg font-normal (Body Large)
- text-base font-normal (Body)
- text-sm font-normal (Body Small)
- text-xs font-normal (Caption)
</typography>

<components>
- Radix UI primitives for accessibility (Dialog, Dropdown, Tabs, etc.)
- Custom Card components with Tailwind styling
- Button variants using Radix Button primitive
- Form components with React Hook Form integration
- Loading states with skeleton screens
- Toast notifications with Sonner
- Progress indicators and charts
- Responsive navigation with mobile hamburger menu
- Modal components using Radix Dialog
- Data tables with React Data Grid
</components>

<animations>
- Framer Motion for page transitions and complex animations
- Tailwind Animate for simple hover effects and loading states
- Stagger animations for list items
- Smooth progress bar animations
- Micro-interactions for button states and form feedback
- Page loading animations and skeleton screens
</animations>

<spacing>
Tailwind spacing scale:
- space-1 (4px)
- space-2 (8px)
- space-4 (16px)
- space-6 (24px)
- space-8 (32px)
- space-12 (48px)
</spacing>
</ui_design_system>

<mental_health_specific_requirements>
<design_principles>
- Use calming, muted Tailwind colors that reduce anxiety
- Avoid bright, aggressive colors or sharp contrasts
- Include gentle Framer Motion animations for positive reinforcement
- Provide clear visual hierarchy to reduce cognitive load
- Use empathetic, non-clinical language throughout
- Include progress celebration with animated feedback
- Ensure all interactions feel safe and private
- Implement proper focus management for accessibility
</design_principles>

<accessibility>
- Radix UI primitives for built-in accessibility
- Screen reader compatibility with proper ARIA attributes
- High contrast mode support with CSS custom properties
- Large touch targets (min-h-11 for buttons)
- Clear focus indicators with focus-visible utilities
- Keyboard navigation throughout the application
- Text scaling support with relative units
- Color-blind friendly design patterns
- Proper heading hierarchy (h1, h2, h3)
</accessibility>

<user_experience>
- Mobile-first responsive design with Tailwind breakpoints
- Auto-save form progress using Server Actions
- Optimistic updates for better perceived performance
- Loading states with skeleton components
- Error boundaries with user-friendly error pages
- Progressive enhancement approach
- Offline functionality with service worker
- Fast page transitions with Next.js navigation
</user_experience>
</mental_health_specific_requirements>

<next_js_specific_implementation>
<app_router_structure>
app/
├── (auth)/
│   ├── login/
│   └── register/
├── (dashboard)/
│   ├── dashboard/
│   ├── assessments/
│   ├── sessions/
│   ├── messages/
│   ├── progress/
│   └── settings/
├── api/
├── globals.css
├── layout.tsx
├── loading.tsx
├── error.tsx
├── not-found.tsx
└── page.tsx
</app_router_structure>

<server_components>
- Use Server Components for data fetching and static content
- Implement proper loading.tsx and error.tsx boundaries
- Utilize Server Actions for form submissions and mutations
- Implement streaming with Suspense boundaries
- Use generateMetadata for dynamic SEO
</server_components>

<client_components>
- Mark interactive components with "use client"
- Implement client-side state management with React hooks
- Use Next Themes for theme switching
- Implement form handling with React Hook Form
- Add Framer Motion animations to client components
</client_components>

<authentication>
- NextAuth.js 5.0.0-beta.25 configuration
- Middleware for route protection
- Session management with proper TypeScript types
- Role-based access control
- Secure session handling
</authentication>
</next_js_specific_implementation>

<database_schema>
<drizzle_orm_tables>
- users (id, email, name, role, created_at, updated_at)
- patients (id, user_id, provider_id, demographics, emergency_contact)
- assessments (id, patient_id, type, questions, responses, score, completed_at)
- sessions (id, patient_id, provider_id, scheduled_at, status, summary)
- messages (id, sender_id, recipient_id, content, sent_at, read_at)
- treatment_plans (id, patient_id, goals, status, created_at, updated_at)
- medications (id, patient_id, name, dosage, frequency, active)
</drizzle_orm_tables>

<server_actions>
- submitAssessment() for form handling
- updateProfile() for user data updates
- sendMessage() for communication
- scheduleAppointment() for booking
- updateTreatmentGoals() for progress tracking
</server_actions>
</database_schema>

<demo_considerations>
<primary_demo_flows>
1. Patient Dashboard Overview - Show assessment reminders, progress trends
2. Assessment Completion - Walk through PHQ-9 questionnaire with realistic responses
3. Results Visualization - Display assessment scores with trend charts
4. Session Summary Review - Show AI-generated patient-friendly session notes
5. Provider Communication - Demonstrate secure messaging interface
6. Theme switching and accessibility features
</primary_demo_flows>

<mock_data_requirements>
- Create realistic patient profile (Sarah Johnson, 28, Anxiety/Depression)
- Generate PHQ-9 scores showing improvement over 3 months (15→12→8→6)
- Include GAD-7 scores with similar positive trend (12→10→7→5)
- Mock upcoming appointment (Dr. Smith, Zoom session, Tomorrow 2:00 PM)
- Sample session summary from "last week's therapy session"
- Treatment goals with progress indicators (3/5 completed)
- Medication reminders (Sertraline 50mg, daily at 8 AM)
- Message history with provider
</mock_data_requirements>
</demo_considerations>

<code_quality_requirements>
- Write clean, production-ready TypeScript code with strict mode
- Implement proper error handling with try-catch blocks
- Use Zod for runtime type validation
- Include proper loading states and error boundaries
- Implement responsive design with Tailwind CSS
- Add comprehensive TypeScript interfaces and types
- Use proper Next.js performance optimizations
- Include ESLint and Biome formatting configurations
- Implement proper SEO with metadata API
- Add Playwright test examples
</code_quality_requirements>

<performance_optimization>
- Use Next.js Image component for optimized images
- Implement dynamic imports for code splitting
- Use React.memo for expensive components
- Implement proper caching strategies with Redis
- Use Vercel Analytics for performance monitoring
- Implement service worker for offline functionality
- Use Intersection Observer for lazy loading
- Optimize bundle size with proper imports
</performance_optimization>

<deliverables>
Create a complete Next.js application with:
1. package.json with all specified dependencies
2. next.config.js with proper configuration
3. tailwind.config.js with custom theme
4. App Router structure with proper route groups
5. 8-10 core pages covering all primary features
6. Reusable component library using Radix UI
7. TypeScript interfaces and Drizzle ORM schema
8. Server Actions for data mutations
9. Authentication setup with NextAuth.js
10. Theme configuration with Next Themes
11. Responsive design with mobile-first approach
12. Accessibility implementation throughout
13. Professional animations with Framer Motion
14. Production-ready code structure and organization
15. ESLint and Biome configuration files
16. Playwright test setup and examples
</deliverables>

<additional_instructions>
- Prioritize the dashboard, assessment, and progress tracking pages for the sales demo
- Ensure all components follow Next.js 15 and React 19 best practices
- Create realistic mock data that tells a compelling patient improvement story
- Include proper TypeScript typing throughout for production readiness
- Focus on creating an emotional connection between the patient and their mental health journey
- Make sure the app demonstrates clear value to both patients and providers
- Include comprehensive error handling and loading states
- Reference the uploaded screenshot for visual inspiration while adapting for mental health context
- Use Server Components where possible and Client Components only when necessary
- Implement proper caching strategies with Redis integration
- Include AI-powered features using the Vercel AI SDK where appropriate
- Ensure HIPAA compliance considerations in data handling
- Use Sonner for all toast notifications with proper accessibility
- Implement proper form validation with React Hook Form and Zod
</additional_instructions>
