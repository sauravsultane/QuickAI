# QuickAI

QuickAI is a full-stack AI-powered web application that provides a suite of tools for content generation, image manipulation, resume review, and more. The project features a modern React frontend and a Node.js/Express backend, with cloud-based authentication, database, and image storage.

## Features

- **AI Tools**: Generate blog titles, write articles, review resumes, and more.
- **Image Generation**: Create AI-generated images and remove backgrounds or objects from images.
- **Community**: Engage with other users and share your creations.
- **Authentication**: Secure user authentication and management with Clerk.
- **Cloud Storage**: Image uploads and processing via Cloudinary.
- **Database**: Serverless PostgreSQL with NeonDB.
- **Modern UI**: Responsive and visually appealing interface built with React.

## Technologies Used

- React.js
- Node.js & Express.js
- Clerk (Authentication)
- Cloudinary (Image Storage)
- NeonDB (Database)
- Vercel (Frontend Deployment)
- Render (Backend Deployment, optional)
- Socket.io (if used for real-time features)

## Project Structure

```
QuickAI/
  client/           # React frontend
    src/
      assets/       # Images and static assets
      components/   # Reusable React components
      pages/        # Application pages (Dashboard, Community, etc.)
    public/         # Public assets
    package.json    # Frontend dependencies
  server/           # Node.js/Express backend
    configs/        # Config files (Cloudinary, DB, Multer, etc.)
    controllers/    # Route controllers
    middlewares/    # Express middlewares
    routes/         # API route definitions
    package.json    # Backend dependencies
  README.md         # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/QuickAI.git
   cd QuickAI
   ```

2. **Install frontend dependencies:**
   ```bash
   cd client
   npm install
   # or
   yarn install
   ```

3. **Install backend dependencies:**
   ```bash
   cd ../server
   npm install
   ```

4. **Set up environment variables:**
   - Create `.env` files in both `client` and `server` directories.
   - For the frontend (`client/.env`):
     ```env
     VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
     VITE_BASE_URL=http://localhost:3000
     ```
   - For the backend (`server/.env`):
     ```env
     CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     DATABASE_URL=your_neondb_connection_string
     PORT=3000
     ```

### Running the Application

#### Frontend (React)

```bash
cd client
npm run dev
# or
yarn dev
```
The app will be available at `http://localhost:5173` (or as specified in the terminal).

#### Backend (Node.js/Express)

```bash
cd server
npm start
```
The backend will run on `http://localhost:3000` by default.

## Deployment

- **Frontend:** Deploy on Vercel ([Live Demo](https://quick-ai-user.vercel.app/))
- **Backend:** Deploy on Render or any Node.js-compatible cloud platform.

## Scripts

### Frontend
- `npm run dev` - Start the React development server
- `npm run build` - Build the frontend for production
- `npm run preview` - Preview the production build

### Backend
- `npm start` - Start the Express server

## Contributing

Contributions are welcome! Please open issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
