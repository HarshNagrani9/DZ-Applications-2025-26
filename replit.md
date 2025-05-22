# DataZen - Data Science Council Recruitment Application

## Overview

DataZen is a web application for managing recruitment for the Data Science Council of Somaiya Vidyavihar University. It allows students to apply for various data science roles for the upcoming academic year. The application features a modern UI built with React and integrates with Firebase for data storage.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server for API endpoints
- **Database**: Drizzle ORM with planned PostgreSQL integration
- **Firebase**: Currently used for application data storage
- **UI Framework**: ShadCN UI components built on Radix UI primitives
- **Styling**: Tailwind CSS for responsive design
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React Query for server state

The application is structured as a monorepo with a clear separation between client, server, and shared code.

## Key Components

### Frontend (client/)

1. **Pages**:
   - `Home.tsx`: Landing page with information about the council
   - `Apply.tsx`: Application form for students
   - `Confirmation.tsx`: Success page after application submission
   - `not-found.tsx`: 404 page

2. **Components**:
   - UI components from ShadCN/Radix
   - Custom components like Header, Footer, LoadingSpinner
   - Form components for the application process

3. **Utilities**:
   - Form validation with Zod
   - Firebase integration
   - React Query for data fetching

### Backend (server/)

1. **API Routes**:
   - `/api/applications`: Endpoint for submitting applications

2. **Services**:
   - Firebase integration for storing applications
   - Storage interface for database operations

3. **Middleware**:
   - Express.js middleware for request handling
   - Vite integration for development

### Shared (shared/)

1. **Schema**:
   - Database schema definitions using Drizzle ORM
   - Zod validation schemas for form validation
   - TypeScript types used across frontend and backend

## Data Flow

1. **Application Submission**:
   - User fills out application form (React Hook Form + Zod validation)
   - Form data is sent to `/api/applications` endpoint
   - Server validates the data using shared schema
   - Data is stored in Firebase
   - Success response is returned to the client
   - User is redirected to the confirmation page

2. **Data Storage**:
   - Application data is stored in Firebase Firestore
   - The system is prepared for a potential migration to PostgreSQL with Drizzle ORM

## External Dependencies

### Frontend Libraries
- React and React DOM
- Wouter for routing
- React Hook Form for form handling
- Zod for validation
- Framer Motion for animations
- Radix UI primitives for accessible components
- Tailwind CSS for styling
- Lucide React for icons
- React Query for data fetching

### Backend Libraries
- Express.js for the server
- Firebase Admin SDK for Firestore integration
- Drizzle ORM for database operations (prepared for PostgreSQL)

### Development Tools
- TypeScript for type safety
- Vite for development and building
- ESBuild for server bundling
- Drizzle Kit for database schema management

## Deployment Strategy

The application is configured for deployment on Replit:

1. **Development**:
   - `npm run dev` starts both the client and server in development mode
   - Vite handles hot module replacement for the client
   - The server automatically proxies API requests

2. **Production Build**:
   - `npm run build` builds both client and server
   - Client is built with Vite
   - Server is bundled with ESBuild

3. **Production Deployment**:
   - Static assets are served from the `dist/public` directory
   - Node.js server handles API requests and serves the client
   - Environment variables are used for configuration

The `.replit` configuration is set up for running the application in the Replit environment, with appropriate ports and workflows defined.

## Database Setup

The application is currently using Firebase for data storage, but is prepared for a migration to PostgreSQL:

1. **Schema Definition**:
   - Database tables are defined in `shared/schema.ts` using Drizzle ORM
   - Main tables include users and applications

2. **Planned PostgreSQL Integration**:
   - Drizzle config is set up in `drizzle.config.ts`
   - Migration scripts can be run with `npm run db:push`
   - Connection will be managed through environment variables

## Future Development Considerations

1. **Authentication System**:
   - The schema includes user tables for future authentication
   - The current implementation doesn't include full auth flow

2. **Admin Dashboard**:
   - A future enhancement would be adding an admin dashboard for reviewing applications

3. **Database Migration**:
   - Moving from Firebase to PostgreSQL would provide more robust querying capabilities

4. **Testing**:
   - Adding tests for both frontend and backend components