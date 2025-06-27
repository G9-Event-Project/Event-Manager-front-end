
# Community Event Manager – Frontend

This is the frontend of the **Community Event Manager**, a full-stack web application built with React (via CDN), Tailwind CSS, and deployed via Vercel. It connects to a Flask REST API backend hosted on Render.

## Features

- User authentication (Login, Register)
- Profile management
- Create, edit, and delete events
- View event listings and detailed pages
- Comment on events
- Search functionality
- Responsive design using Tailwind CSS

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/event-manager-front-end.git
cd event-manager-front-end
```

### 2. Install Dependencies

```bash
npm install
```

If you are using Tailwind in development:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Add Tailwind Configuration

Create or update the following files:

#### `tailwind.config.js`

```js
module.exports = {
  content: ["./**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### `postcss.config.js`

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

#### `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Ensure this CSS file is linked in your HTML.

### 4. Build Tailwind (Optional for Production)

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

### 5. Vercel Deployment

- Vercel auto-deploys from GitHub
- The base URL for the backend is configured in `api.js`

```js
const API_BASE_URL = "https://event-managerr-back-endd-13.onrender.com";
```

### 6. Known Issues

- Tailwind CDN (`cdn.tailwindcss.com`) is not recommended in production. We've moved to using PostCSS + Tailwind CLI.
- CORS errors may occur if backend is not configured with proper headers.
- `undefined` in fetch URLs indicates a missing `eventId` or `commentId` in component logic.

### 7. Troubleshooting

If `npx tailwindcss` fails with `tailwind: not found`:

```bash
rm -rf node_modules package-lock.json
npm install
npm install -D tailwindcss postcss autoprefixer
```

### 8. Scripts

Add the following to `package.json` for building Tailwind easily:

```json
"scripts": {
  "build:css": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch"
}
```

## Folder Structure

```
/components
  Navbar.jsx
  Login.jsx
  Register.jsx
  Profile.jsx
  Dashboard.jsx
  EventForm.jsx
  EventDetail.jsx
  CommentSection.jsx
  SearchBar.jsx

/index.html
/index.css
/api.js
```

## Authors

- Person A – Auth, routing, profile, shared API
- Person B – Dashboard, events, detail, comment, search

## License

This project is licensed under the MIT License.