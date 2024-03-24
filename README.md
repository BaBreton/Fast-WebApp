# Fast WebApp Setup Guide

This guide will walk you through setting up a web application using **Vite React** for the frontend, **Django Python** for the backend, and **PostgreSQL** for the database. In production, the frontend is served by **nginx**.

## Prerequisites

- Docker and Docker Compose installed on your machine
- Node.js and npm installed for frontend development
- Python environment set up for Django development

## Configuration

1. **Environment Variables**: Start by configuring your environment variables. You'll find a `.env` file in the repository for this purpose. Fill in the variables according to your specific environment needs.

## Launching Services with Docker

1. **Start the Database**:
   - Use Docker Compose to launch the PostgreSQL database:
     ```bash
     docker compose up -d --build
     ```
   This command builds and starts the database container in detached mode.

## Backend Setup

1. **Database Migrations**: With the database running, it's time to set up the Django backend. Navigate to the `back` folder and run:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```
   These commands generate and apply database migrations.

2. **Start the Development Server**:
   - Launch the Django development server by running:
     ```bash
     python manage.py runserver YOUR_ADRESS:YOUR_PORT
     ```
   - Remember to replace `YOUR_ADRESS` and `YOUR_PORT` with the actual address and port you're using for development.

   - Update your `.env` file with the development server's address for the frontend to use:
     ```
     VITE_FRONT_DEV_API_URL=http://YOUR_ADRESS:YOUR_PORT
     ```

## Frontend Setup

1. **Launch the Frontend Development Server**:
   - Navigate to the frontend directory and start the Vite React development server:
     ```bash
     npm run dev
     ```
   Your frontend is now set up and should be able to communicate with the Django backend.

## Development and Production

- You can now proceed with developing your web application. The setup supports hot reloading for both frontend and backend, facilitating rapid development.
- For production deployment, the Docker container includes nginx for serving the frontend. Ensure you have configured nginx according to your production needs.

This guide provides a quick way to get your development environment up and running. As you progress, you may need to adjust configurations and setups to match your specific requirements. Happy coding!

--- 

Feel free to adjust any part of this guide to better fit your project specifics or personal preferences.
