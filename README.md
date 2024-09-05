# Celestial Weddings Client Side

This is the frontend of the **Celestial Weddings** project, a wedding service platform built with React. The frontend allows users to browse vendors, book packages, and manage their wedding services.

**Live URL:** https://celestial-weddings.vercel.app/

## Features

- Browse wedding service vendors
- Search by vendor category (e.g., Photographer, Florist, Caterer)
- View vendor packages
- Book services and manage bookings
- User authentication and profile management

## Tech Stack

- **React** - Frontend framework
- **Tailwind CSS** - For styling
- **Axios** - For making HTTP requests
- **React Router** - For handling routing
- **Context API** - For state management
- **MERN Stack** - Integrated with backend API

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Node.js installed on your machine
- yarn or npm or pnpm installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jabirsubaktagin16/celestial-weddings-client.git
   ```
2. Navigate into the project directory:
   ```bash
   cd celestial-weddings-client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or if you're using Yarn:
   ```bash
   yarn install
   ```
   or if you're using pnpm:
   ```bash
   pnpm install
   ```

## Project Structure

```bash
src/
|-- assets/           # Static assets (images, icons)
|-- components/       # Reusable React components
|-- firebase/         # Adding firebase configuration for using firebase tools
|-- hooks/         	  # Using different types of hooks
|-- layouts/          # Creating different types of layouts
|-- pages/            # Application pages
|-- providers/        # Using Context API for global state
|-- routes/        	  # Defining different routes for the operation
|-- utils/            # Using different Utility function for workflow
|-- App.jsx           # Main app component
|-- main.jsx          # Entry point
|-- styles.css        # Global styles
```
