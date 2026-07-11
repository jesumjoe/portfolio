# Personal Portfolio Website

## Project Overview

This is a modern, responsive personal portfolio website built to showcase projects, skills, and professional experience. It features a sleek single-page design for the main content with dedicated detail pages for individual projects. The application includes smooth animations, a dynamic particle background, and a fully functional contact form.

## Tech Stack

The project leverages a robust modern frontend stack:

- **Framework**: [React](https://reactjs.org/) (v18)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Library**: [shadcn/ui](https://ui.shadcn.com/) (built on Radix UI primitives)
- **Routing**: [React Router](https://reactrouter.com/) (v6)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) for validation
- **Other utilities**: Embla Carousel for sliders, Recharts for data visualization, and Formspree for handling form submissions.

## Scope

The current scope of the project encompasses:
- **Landing Page**: A comprehensive single-page structure consisting of a Hero section, About section, Projects showcase, and Contact form.
- **Project Details**: Dynamic routing to dedicated pages (`/project/:id`) that display in-depth information about individual portfolio pieces.
- **Interactive Elements**: Typing text effects, interactive particle backgrounds, and smooth scroll behaviors.
- **Data Management**: Mocked data structure for projects (`src/data/projects.ts`), making it easy to add or update portfolio items without needing a backend database.
- **Responsive Design**: Mobile-first styling that adapts seamlessly to tablet and desktop viewports.

## Current State

The project is **fully-featured and ready for deployment**. The core sections (Hero, About, Projects, Contact) are built and functional. Forms are set up with validation, and smooth animations using Framer Motion are integrated throughout the site. The routing is configured with a 404 Not Found page and Project Detail pages.

---

### Getting Started

To run this project locally:

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   bun run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.
