# Sunwave Paradise

A luxury hotel website mockup built with **React + Vite**, designed for the hospitality scene in Kathmandu, Nepal. This is a **frontend-only demo** — there is no real backend, no real payments, and no real place called Sunwave Paradise. It exists only in imagination (and this repo).

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Build for Production](#build-for-production)

---

## Overview

The goal was to build something that felt like a real luxury hotel website — not just a pretty template. Key design decisions:

- **WhatsApp-first booking**: Local customers in Nepal prefer WhatsApp over multi-step checkout forms. The WhatsApp CTA is the core conversion action.
- **Centralized room data**: All room info lives in one data file. Add a new room → update one file → every page (Home, Rooms, RoomDetail) reflects it automatically. No scattered hardcoded values.
- **Performance-first**: Pages are lazy-loaded via `React.lazy()` and `Suspense`, and the production bundle is split into manual chunks for optimal caching.

---

## Tech Stack

| Layer        | Technology                              |
| ------------ | --------------------------------------- |
| Framework    | React 19                                |
| Build Tool   | Vite 7                                  |
| Routing      | React Router DOM v7                     |
| SEO          | react-helmet-async                      |
| Icons        | react-icons v5                          |
| Styling      | Vanilla CSS + Tailwind CSS v4 (PostCSS) |
| Testing      | Vitest + React Testing Library          |
| Coverage     | @vitest/coverage-v8                     |
| Linting      | ESLint 9                                |
| Minification | Terser                                  |

---

## Project Structure

```
hotel/
├── public/                   # Static assets served as-is
├── src/
│   ├── assets/               # Images, fonts, and media
│   ├── components/           # Shared/reusable UI components
│   │   ├── BookingWidget.jsx  # Core booking form (check-in/out, guests, WhatsApp CTA)
│   │   ├── EmptyState.jsx     # Empty list fallback UI
│   │   ├── ErrorBoundary.jsx  # React error boundary wrapper
│   │   ├── ErrorState.jsx     # Error display component
│   │   ├── Footer.jsx         # Site footer
│   │   ├── Header.jsx         # Navigation header
│   │   ├── LoadingSpinner.jsx # Loading states (inline + fullscreen)
│   │   ├── ScrollToTop.jsx    # Resets scroll position on route change
│   │   ├── SEO.jsx            # Per-page meta tags via react-helmet-async
│   │   └── ui/               # Low-level UI primitives (Button, Input, etc.)
│   ├── constants/
│   │   └── index.js          # App-wide constants (routes, validation messages, SEO defaults)
│   ├── data/                 # Static data (room listings, amenities, etc.)
│   ├── pages/                # Route-level page components
│   │   ├── Home.jsx
│   │   ├── Rooms.jsx
│   │   ├── RoomDetail.jsx
│   │   ├── Amenities.jsx
│   │   ├── Gallery.jsx
│   │   ├── Location.jsx
│   │   ├── Contact.jsx
│   │   └── Booking.jsx
│   ├── test/                 # All test files + setup
│   │   └── setup.js          # jsdom + jest-dom + global mocks
│   ├── utils/                # Helper/utility functions (validation, formatting, etc.)
│   ├── App.jsx               # Root component — router, layout, lazy page loading
│   ├── main.jsx              # React DOM entry point
│   └── index.css             # Global styles
├── index.html                # Vite HTML entry point
├── vite.config.js            # Vite + Vitest configuration
├── package.json
└── TESTING.md                # Detailed testing guide
```

---

## Pages & Routes

| Route          | Page       | Description                                |
| -------------- | ---------- | ------------------------------------------ |
| `/`            | Home       | Hero section, featured rooms, highlights   |
| `/rooms`       | Rooms      | Full room listing with filters             |
| `/rooms/:slug` | RoomDetail | Individual room detail with booking widget |
| `/amenities`   | Amenities  | Hotel amenities and facilities             |
| `/gallery`     | Gallery    | Photo gallery                              |
| `/location`    | Location   | Map and directions                         |
| `/contact`     | Contact    | Contact form and info                      |
| `/booking`     | Booking    | Standalone booking page                    |
| `*`            | Home       | 404 fallback — redirects to Home           |

---

## How It Works

### App Shell (`App.jsx`)

The root component wraps everything in three providers:

1. **`ErrorBoundary`** — catches any unhandled React render errors and shows a fallback UI instead of a blank screen.
2. **`HelmetProvider`** — enables per-page dynamic `<head>` management (title, meta description, OG tags) via the `SEO` component.
3. **`BrowserRouter`** — handles client-side navigation. `ScrollToTop` resets the window scroll to the top on every route change.

### Lazy Loading

All 8 pages are lazy-loaded using `React.lazy()` wrapped in `<Suspense>`. This means only the code for the current page is downloaded on first load — the rest is fetched on demand. The `LoadingSpinner` component serves as the fullscreen fallback during transitions.

### Booking Widget

`BookingWidget.jsx` is the core interactive component. It handles:

- Check-in / check-out date selection with validation (checkout must be after check-in)
- Guest count selection
- Room pre-selection when accessed from a RoomDetail page
- **WhatsApp redirect**: On submission, it builds a pre-filled WhatsApp message with the booking details and opens `wa.me` in a new tab. No form submissions, no backend calls.

### SEO (`SEO.jsx`)

Each page renders a `<SEO>` component with its own `title`, `description`, and Open Graph tags. Defaults (site name, URL, Twitter handle) are pulled from `src/constants/index.js`.

### Data Layer

Room data is centralized in `src/data/`. The `Rooms`, `Home`, and `RoomDetail` pages all consume the same data source. Updating or adding a room requires changing only one file.

### Build Optimizations (Production)

Configured in `vite.config.js`:

- **Manual chunk splitting**: `react-vendor` (React + Router), `react-helmet`, and `icons` are split into separate cached chunks.
- **Terser minification**: `console.log` and `debugger` statements are stripped automatically.
- **Source maps**: Disabled in production for smaller output.

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd hotel

# 2. Install dependencies
#    --legacy-peer-deps is needed because React 19 is still new
#    and some packages (like react-helmet-async) haven't updated
#    their peer dependency declarations yet
npm install --legacy-peer-deps

# 3. Start the development server
npm run dev
```

The app will be running at **http://localhost:5173** by default.

---

## Available Scripts

| Script            | Command                 | Description                                     |
| ----------------- | ----------------------- | ----------------------------------------------- |
| Dev server        | `npm run dev`           | Starts Vite dev server with HMR                 |
| Build             | `npm run build`         | Produces optimized production bundle in `dist/` |
| Preview           | `npm run preview`       | Serves the `dist/` build locally for inspection |
| Lint              | `npm run lint`          | Runs ESLint across all source files             |
| Test (watch)      | `npm test`              | Runs Vitest in interactive watch mode           |
| Test (single run) | `npm run test:run`      | Runs all tests once and exits                   |
| Coverage          | `npm run test:coverage` | Runs tests and generates a coverage report      |

---

## Testing

Tests are written with **Vitest** and **React Testing Library** and live in `src/test/`.

### What's tested

| Test File                 | What it covers                                 |
| ------------------------- | ---------------------------------------------- |
| `validation.test.js`      | Email, phone, required fields, date logic      |
| `Button.test.jsx`         | Variants, sizes, loading state, click handling |
| `Input.test.jsx`          | Rendering, error states, accessibility         |
| `LoadingSpinner.test.jsx` | Sizes, fullscreen mode                         |
| `EmptyState.test.jsx`     | Icons, descriptions, action buttons            |
| `BookingWidget.test.jsx`  | Rendering modes, date validation, submission   |

### Run tests

```bash
# Watch mode
npm test

# Single run
npm run test:run

# With coverage report
npm run test:coverage
```

Coverage reports are output to the terminal and saved as HTML in `coverage/`.

> See [TESTING.md](./TESTING.md) for a full guide including how to add new tests.

---

## Build for Production

```bash
npm run build
```

Output is placed in the `dist/` folder. To preview the build locally before deploying:

```bash
npm run preview
```

> **Note:** This is a pure client-side SPA. When deploying to a static host (Netlify, Vercel, GitHub Pages), make sure to configure it to serve `index.html` for all routes, otherwise direct URL access (e.g. `/rooms/deluxe-suite`) will return a 404.
