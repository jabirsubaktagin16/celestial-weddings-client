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
4. Running the App:
   ```bash
   npm run dev
   ```
   or if you're using Yarn:
   ```bash
   yarn dev
   ```
   or if you're using pnpm:
   ```bash
   pnpm run dev
   ```
   The app will be running on `http://localhost:3000`
5. Environment Variables
   To connect the frontend to the backend API, you will need to create an `.env` file in the root of the project. Besides that you have to put Firebase credentials with the following:

   ```bash
   VITE_REACT_APP_APIKEY=your firebase apiKey
   VITE_REACT_APP_AUTHDOMAIN=your firebase auth domain
   VITE_REACT_APP_PROJECTID=your firebase projectId
   VITE_REACT_APP_STORAGEBUCKET=your firebase storage bucket
   VITE_REACT_APP_MESSAGINGSENDERID=your firebase messagingsenderId
   VITE_REACT_APP_APPID=your firebase appId
   VITE_REACT_APP_MEASUREMENTID=your firebase measurementId
   VITE_REACT_APP_STORAGEURL=your firebase storage url

   VITE_REACT_APP_APIENDPOINT=http://localhost:5000/api/v1
   ```

## Project Structure

```bash
src/
|-- assets/           # Static assets (images, icons)
|-- components/       # Reusable React components
|-- firebase/         # Adding firebase configuration for using firebase tools
|-- hooks/         	 # Using different types of hooks
|-- layouts/          # Creating different types of layouts
|-- pages/            # Application pages
|-- providers/        # Using Context API for global state
|-- routes/        	 # Defining different routes for the operation
|-- utils/            # Using different Utility function for workflow
|-- App.jsx           # Main app component
|-- main.jsx          # Entry point
|-- styles.css        # Global styles
```
