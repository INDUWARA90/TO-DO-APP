# 📋 TO-DO-APP - Full Stack Task Management Application

A modern, full-stack task management application that helps you stay organized and productive. Built with **React 19**, **Vite**, **Tailwind CSS**, **Node.js**, **Express.js**, and **MongoDB**.

![React](https://img.shields.io/badge/React-19.2.5-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0.10-646CFF?logo=vite)
![Node.js](https://img.shields.io/badge/Node.js-16+-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express-5.2.1-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-13AA52?logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2.4-06B6D4?logo=tailwindcss)

---

## 📖 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [API Documentation](#api-documentation)
- [File Structure Details](#file-structure-details)
- [Contributing](#contributing)

---

## 🎯 Overview

TO-DO-APP is a full-stack web application designed to help users manage their daily tasks efficiently. The application provides a clean, intuitive interface for creating, editing, deleting, and organizing tasks with real-time updates and persistent storage using MongoDB.

**Key Highlights:**
- 🚀 Fast and responsive frontend with React 19 and Vite
- 💾 Reliable backend with Express.js and MongoDB
- 🔄 Real-time task synchronization
- 📱 Fully responsive design for all devices
- ✨ Modern UI with Tailwind CSS
- 🔔 Toast notifications for user feedback

---

## 🏗️ Architecture

This is a **client-server architecture** with a clear separation of concerns:

---

## ✨ Features

### Frontend Features
- ✅ **Create TODOs** - Add new tasks with title and description
- ✅ **Toggle Completion** - Mark tasks as done/pending with instant feedback
- ✅ **Edit TODOs** - Update task details seamlessly
- ✅ **Delete TODOs** - Remove tasks
- ✅ **Filter TODOs** - View all, completed, or pending tasks
- ✅ **Search TODOs** - Find tasks by keyword in real-time
- ✅ **Optimistic UI Updates** - Instant visual feedback without waiting for server
- ✅ **Toast Notifications** - Real-time user feedback for actions
- ✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile

### Backend Features
- ✅ **CRUD Operations** - Create, read, update, delete tasks
- ✅ **Data Persistence** - Reliable storage in MongoDB
- ✅ **Automatic Timestamps** - Track creation and modification dates
- ✅ **CORS Support** - Enable cross-origin requests
- ✅ **JSON API** - RESTful API with JSON responses
- ✅ **Environment Configuration** - Secure configuration management
- ✅ **MongoDB Integration** - Using Mongoose ODM for data modeling

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.2.5 | UI library and component framework |
| **Vite** | 8.0.10 | Lightning-fast build tool and dev server |
| **Tailwind CSS** | 4.2.4 | Utility-first CSS for responsive design |
| **Axios** | 1.15.2 | HTTP client for API requests |
| **React Toastify** | 11.1.0 | Toast notifications |
| **ESLint** | 10.2.1 | Code quality and linting |

### Backend

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | 16+ | JavaScript runtime environment |
| **Express.js** | 5.2.1 | Web framework for building REST API |
| **MongoDB** | Latest | NoSQL database for data storage |
| **Mongoose** | 9.5.0 | ODM (Object Document Mapper) for MongoDB |
| **CORS** | 2.8.6 | Middleware for cross-origin requests |
| **dotenv** | 17.4.2 | Environment variable management |
| **Nodemon** | 3.1.14 | Auto-reload during development |

---

## 📂 Project Structure

### Overview
```
TO-DO-APP/
├── client/                          # React frontend application
│   ├── src/
│   │   ├── components/              # Reusable React components
│   │   │   ├── FilterBar.jsx        # Filter & search bar
│   │   │   ├── TodoForm.jsx         # Create/edit todo form
│   │   │   ├── TodoItem.jsx         # Individual todo card
│   │   │   └── TodoList.jsx         # Todo list container
│   │   ├── api/
│   │   │   └── api.js               # Axios API client & HTTP requests
│   │   ├── assets/                  # Static assets
│   │   ├── App.jsx                  # Main app component
│   │   ├── index.css                # Global styles
│   │   └── main.jsx                 # Entry point
│   ├── public/                      # Static public files
│   ├── index.html                   # HTML template
│   ├── vite.config.js               # Vite configuration
│   ├── eslint.config.js             # ESLint configuration
│   ├── package.json                 # Frontend dependencies
│   └── README.md                    # Frontend documentation
│
├── server/                          # Express.js backend application
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js                # MongoDB connection setup
│   │   ├── controllers/
│   │   │   └── todoController.js    # Business logic for todos
│   │   ├── models/
│   │   │   └── todo.js              # Todo schema definition
│   │   ├── routes/
│   │   │   └── todoRoutes.js        # API route endpoints
│   │   ├── app.js                   # Express app configuration
│   │   └── server.js                # Server entry point
│   ├── package.json                 # Server dependencies
│   ├── .env                         # Environment variables (create manually)
│   └── README.md                    # Backend documentation
│
└── README.md                        # This file (project documentation)
```

---

## 📋 Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** (optional) - For version control

**Verify Installation:**
```bash
node --version
npm --version
```

---

## 🚀 Installation

### 1. Clone or Download the Project

```bash
# If using git
git clone 
cd TO-DO-APP

# Or navigate to your project directory
cd TO-DO-APP
```

### 2. Set Up the Server (Backend)

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file in server directory
# Add the following variables:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/todo-app
# Or use MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/todo-app

# Start the development server
npm run dev
# Server should start on http://localhost:5000
```

### 3. Set Up the Client (Frontend)

In a new terminal window:

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start the development server
npm run dev
# Frontend should start on http://localhost:5173
```

### 4. Access the Application

Open your browser and navigate to: **http://localhost:5173**

---

## 💻 Development

### Frontend Development

```bash
cd client

# Start development server with hot reload
npm run dev

```

**Frontend runs on:** `http://localhost:5173`

### Backend Development

```bash
cd server

# Start development server with auto-reload (using Nodemon)
npm run dev

# The server automatically restarts when you modify files
```

**Backend runs on:** `http://localhost:5000`

### Development Workflow

1. **Frontend Changes**: Save files in `client/src/` → Vite hot reloads automatically
2. **Backend Changes**: Save files in `server/src/` → Nodemon auto-restarts the server
3. **API Requests**: Frontend communicates with backend via Axios (configured in `client/src/api/api.js`)
4. **Database**: Mongoose automatically connects and manages MongoDB operations

---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### Get All Todos
```http
GET /api/todos
```
**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "done": false,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
]
```

#### Get Single Todo
```http
GET /api/todos/:id
```

#### Create Todo
```http
POST /api/todos
Content-Type: application/json

{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread"
}
```

#### Update Todo
```http
PUT /api/todos/:id
Content-Type: application/json

{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread, cheese",
  "done": true
}
```

#### Delete Todo
```http
DELETE /api/todos/:id
```

#### Toggle Todo Completion
```http
PUT /api/todos/:id/toggle
```

---

## 📂 File Structure Details

### Frontend Components (`client/src/components/`)

1. **App.jsx** - Main application component managing global state
2. **FilterBar.jsx** - Filter and search functionality
3. **TodoForm.jsx** - Form for creating/editing todos
4. **TodoItem.jsx** - Individual todo card with actions
5. **TodoList.jsx** - List container displaying all todos

### Backend Structure (`server/src/`)

1. **app.js** - Express app setup and middleware configuration
2. **server.js** - Server entry point and MongoDB connection
3. **config/db.js** - Database connection configuration
4. **models/todo.js** - MongoDB Todo schema
5. **controllers/todoController.js** - Business logic for todos
6. **routes/todoRoutes.js** - API route definitions

---

## 🔐 Environment Variables

### Server (.env)
```env
# Server Configuration
PORT=5000

# MongoDB Configuration
# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/todo-app

# OR MongoDB Atlas (cloud)
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todo-app
```

---

## 🎨 UI Components

### FilterBar
- Filter todos by status (All, Completed, Pending)
- Search functionality to find todos by keyword
- Real-time filtering without page reload

### TodoForm
- Input fields for title and description
- Error handling with toast notifications
- Submit button with loading state

### TodoItem
- Display todo title and description
- Toggle completion status
- Edit todo inline
- Delete with confirmation
- Display creation/update timestamps

### TodoList
- Render all filtered/searched todos
- Empty state message
- Responsive layout

---

## 🐛 Troubleshooting

### Frontend Issues

**Port already in use:**
```bash
# Kill process on port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# macOS/Linux:
lsof -i :5173
kill -9 <PID>
```

**Dependencies not installing:**
```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Backend Issues

**MongoDB Connection Error:**
- Ensure MongoDB is running locally or Atlas connection string is correct
- Check `.env` file has correct `MONGODB_URI`
- Verify network access if using MongoDB Atlas

**Port 5000 already in use:**
```bash
# Change port in .env file
PORT=5001
```

**Nodemon not reloading:**
```bash
# Reinstall nodemon
npm install --save-dev nodemon
```

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Mongoose Documentation](https://mongoosejs.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)

---

## 🎉 Quick Start Summary

```bash
# Terminal 1 - Start Backend
cd server
npm install
npm run dev

# Terminal 2 - Start Frontend
cd client
npm install
npm run dev

# Open http://localhost:5173 in your browser
# Start creating todos! ✨
```

---

**Last Updated**: April 2026
