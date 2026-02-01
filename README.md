# Travel Trucks

A modern React application for browsing and managing camper van listings. This
project showcases a complete user experience for discovering, filtering, and
reviewing travel campers with features like favorites management and detailed
camper specifications.

## Features

- **Camper Catalog**: Browse a comprehensive list of available travel trucks
- **Advanced Filtering**: Filter campers by location, vehicle type, and
  amenities
- **Favorites**: Save your favorite campers for later reference
- **Detailed Views**: Explore comprehensive camper information including
  features, reviews, and specifications
- **Responsive Design**: Full mobile and desktop support
- **Redux State Management**: Persistent state management with Redux Toolkit and
  Redux Persist
- **Form Validation**: Robust form handling with Formik and Yup validation
- **Data Fetching**: Efficient API calls with Axios

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **State Management**: Redux Toolkit with Redux Persist
- **Routing**: React Router DOM
- **Form Handling**: Formik + Yup
- **HTTP Client**: Axios
- **UI Components**: Custom components with CSS Modules
- **Code Quality**: ESLint for code consistency
- **Styling**: CSS Modules + Modern Normalize + Reset CSS

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd travel-trucks
```

2. Install dependencies:

```bash
npm install
```

## Launch Instructions

### Development Server

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port)

### Build for Production

Create an optimized production build:

```bash
npm run build
```

Output files will be generated in the `dist/` directory

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality and ESLint violations:

```bash
npm run lint
```

## Project Structure

```
src/
├── components/        # Reusable React components
├── pages/            # Page components for routing
├── fragments/        # Small UI fragments (Button, Tag, etc.)
├── redux/            # Redux store, slices, and operations
├── data/             # Static data
└── main.jsx          # Application entry point
```

## API Integration

The application fetches camper data from an external API using Axios. API
operations are managed through Redux actions in the `catalog/operations.js`
file.

## Deployment

The project is configured for Vercel deployment. Check `vercel.json` for
deployment settings.

## License

This project is part of a learning curriculum.
