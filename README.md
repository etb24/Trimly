# Trimly - URL Shortener

Trimly is an enterprise-grade URL shortening service built for performance, scalability and user experience. Designed to handle high traffic and analytics, it allows users to create, manage, and analyze short links with custom domains, real-time tracking and user-friendly dashboards.

This project showcases backend engineering, frontend development and cloud deployment. Following best practices in architecture, security and maintainability.

You could try it here:  
https://trytrimly.app/

Note: backend is shutdown after 15 minutes of inactivity so expect delays initially (while server restarts)

---

## Tech Stack

- **Frontend**: React (Vite), JavaScript, TailwindCSS
- **Backend**: Java, Spring Boot, PostgreSQL
- **Deployment**: Netlify (Frontend), Neon DB and Render (Backend), Porkbun (Custom Domain)
- **Authentication**: JWT-based login system

---

## Features

- **URL Shortening**
  - Create compact, shareable links with optional custom aliases or subdomains
  - Supports authenticated and anonymous users

- **Analytics & Tracking**
  - Real-time click tracking
  - Visual graphs of link performance over time using Chart.js

- **User Dashboard**
  - Manage all shortened URLs
  - View total clicks and date-wise breakdowns
  - Delete links or copy to clipboard

- **Secure Authentication**
  - Register and login with JWT tokens
  - Role-based access control
  - Tokens stored securely with refresh token logic

---

## Potential Future Features

- Password-protected links
- Expiry dates and one-time access
- QR code generation
- Rate limiting and abuse detection
- Public analytics pages for marketing campaigns

---

## Key Learnings

### Backend Engineering

- Built a secure REST API using Spring Boot and Java 21
- Defined layered architecture with controllers, services, repositories
- Used PostgreSQL with JPA/Hibernate for relational data modeling
- Implemented JWT-based authentication for scalable security

### Frontend Development

- Developed a performant React UI using Vite + TailwindCSS
- Integrated Chart.js for real-time data visualization
- Implemented responsive design for usability across devices

### DevOps & Deployment

- Deployed frontend via Netlify with custom DNS configuration
- Configured custom subdomains using Porkbun and Netlify DNS
- Packaged and deployed backend to Neon and Render for production
- Used environment variables and secure headers for safe API interaction

---

## What Worked Well

- Clear separation of concerns in backend made features easy to extend
- React + Vite enabled a fast, responsive and minimal frontend experience
- Analytics pipeline using Spring Data and PostgreSQL was highly performant
- Custom domain integration with Netlify DNS and Porkbun was seamless

---

## Impact

- Built and deployed a full-stack application with real users and production-grade infrastructure
- Demonstrates strong backend fundamentals, modern frontend design and cloud deployment
- Designed with scalability and extensibility in mind
- Serves as a strong portfolio piece for showcasing software engineering capabilities

---

