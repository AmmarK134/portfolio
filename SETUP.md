# Portfolio Setup Guide

## Overview
This is a React portfolio website with an AI chat assistant powered by OpenAI. The project consists of a frontend (React + Vite) and a backend (Node.js + Express).

## Prerequisites
- Node.js (version 16 or higher)
- npm or yarn
- OpenAI API key

## Setup Instructions

### 1. Environment Configuration
1. Copy the `env.example` file to `.env` in the backend directory:
   ```bash
   cp env.example backend/.env
   ```

2. Edit `backend/.env` and add your actual values:
   ```
   OPENAI_API_KEY=your_actual_openai_api_key
   OPENAI_ASSISTANT_ID=your_actual_assistant_id
   PORT=5000
   NODE_ENV=development
   ```

### 2. Get OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create a new API key
3. Copy the key and paste it in your `.env` file

### 3. Create OpenAI Assistant
1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. Make a POST request to create an assistant:
   ```bash
   curl -X POST http://localhost:5000/api/assistant/create-assistant
   ```

3. Copy the `assistant.id` from the response and update your `.env` file

### 4. Install Dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
```

### 5. Run the Application

#### Start Backend (Terminal 1)
```bash
cd backend
npm start
```

#### Start Frontend (Terminal 2)
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Project Structure
```
portfolio/
├── src/                    # Frontend React components
│   ├── components/         # React components
│   │   ├── Chat/          # AI chat component
│   │   ├── Hero/          # Landing section
│   │   ├── About/         # About section
│   │   ├── Skills/        # Skills section
│   │   ├── Projects/      # Projects section
│   │   ├── Contact/       # Contact section
│   │   └── ...
│   └── utils/             # Utility functions
├── backend/               # Backend Node.js server
│   ├── routes/           # API routes
│   │   └── assistant.js  # OpenAI assistant routes
│   └── server.js         # Main server file
└── public/               # Static assets
```

## Features
- **Responsive Design**: Mobile-first approach with modern UI
- **AI Chat Assistant**: Interactive chat powered by OpenAI GPT-4
- **Smooth Animations**: Framer Motion for smooth transitions
- **Modern Stack**: React 18, Vite, Node.js, Express

## Troubleshooting

### Common Issues

1. **Backend won't start**: Check if all environment variables are set correctly
2. **Chat not working**: Verify OpenAI API key and assistant ID
3. **CORS errors**: Ensure backend is running on port 5000
4. **Dependencies issues**: Run `npm install` in both frontend and backend directories

### Security Notes
- Never commit your `.env` file to version control
- Keep your OpenAI API key secure
- The current setup is for development only

## Development Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm start` - Start production server
- `npm test` - Run tests (currently not implemented)

