# Surface Workflow Project

A web analytics tracking system with a Next.js dashboard and PostgreSQL database.

## Installation

1. Install dependencies:
```bash
pnpm install
```

2. Push the database schema:
```bash
pnpm db:push
```

This command will enforce the Prisma schema and create necessary database tables.

## Database Management

To access the web interface for the PostgreSQL database:
```bash
pnpm prisma studio
```

This will open Prisma Studio in your browser where you can view and manage your data.

## Tracking Implementation

The analytics tracker is configured to track events and clicks exclusively on:
```
https://ishanmitra.github.io/tracker-test/
```

Visit the website, click elements and enter any random valid email id. The frontend application shows a success connection if it is able to detect a `script_initialized` event. Removing this event inside Prisma Studio results in an error message.

### Tracker Code
The tracking implementation code can be found in the `/static` directory. The script can be embedded in your HTML to start collecting analytics data:
- Main script: `/static/script/surface_analytics.js`
- Demo page: `/static/index.html`

## Project Structure

- `/src` - Next.js application source code
- `/prisma` - Database schema and migrations
- `/static` - Analytics tracking script and demo page
- `/src/app` - NextJS frontend source code
- `/src/components` - Reusable UI components
- `/src/lib` - Utility functions and database client
