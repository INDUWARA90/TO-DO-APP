# 📝 TODO App - Client

A modern, responsive task management application built with **React 19**, **Vite**, and **Tailwind CSS**. Stay organized and productive with an intuitive interface featuring real-time task management, filtering, and search capabilities.

![React](https://img.shields.io/badge/React-19.2.5-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0.10-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2.4-06B6D4?logo=tailwindcss)
![Node](https://img.shields.io/badge/Node.js-16+-339933?logo=node.js)

---

## ✨ Features

- ✅ **Create TODOs** - Add new TODOs with title and description
- ✅ **Toggle Completion** - Mark TODOs as done/pending
- ✅ **Edit TODOs** - Update TODO details
- ✅ **Delete TODOs** - Remove TODOs with undo functionality
- ✅ **Undo Delete** - Restore accidentally deleted TODOs with a single click from toast notification
- ✅ **Filter TODOs** - View all, completed, or pending TODOs
- ✅ **Search TODOs** - Find TODOs by keyword in real-time
- ✅ **Optimistic UI Updates** - Instant feedback without waiting for API response
- ✅ **Toast Notifications** - Real-time user feedback
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile devices

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.2.5 | UI library |
| **Vite** | 8.0.10 | Build tool & dev server |
| **Tailwind CSS** | 4.2.4 | Styling & responsive design |
| **Axios** | 1.15.2 | HTTP client |
| **React Toastify** | 11.1.0 | Toast notifications |
| **ESLint** | 10.2.1 | Code linting |

---

## 📋 Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── FilterBar.jsx        # Filter & search bar
	│   ├── TodoForm.jsx         # TODO creation form
	│   ├── TodoItem.jsx         # Individual TODO component
	│   ├── TodoList.jsx         # TODO list container
│   ├── api/
│   │   └── api.js               # Axios API client
│   ├── App.jsx                  # Main app component
│   ├── index.css                # Global styles
│   └── main.jsx                 # App entry point
├── public/                       # Static assets
├── package.json                 # Dependencies & scripts
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML template
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 16 or higher
- **npm** package manager

### Installation

1. **Clone the repository**
   ```bash
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up backend** (required)
   - Ensure the backend API is running at `http://localhost:5000/api`

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (Vite default port)


---

## 📖 API Integration

The app communicates with a backend API at `http://localhost:5000/api`. The following endpoints are used:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/todos` | Fetch all TODOs |
| POST | `/todos` | Create a new TODO |
| PUT | `/todos/:id` | Update a TODO |
| PUT | `/todos/:id/done` | Toggle TODO completion |
| DELETE | `/todos/:id` | Delete a TODO |

### API Client Configuration

The API client is configured in [src/api/api.js](src/api/api.js):

```javascript
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});
```

To change the API endpoint, modify the `baseURL` value in the API configuration file.

---

## 🎨 UI Components

### FilterBar
Displays filter options (All, Completed, Pending) and search functionality.

### TodoForm
Form component for creating new TODOs with title and description fields.

### TodoItem
Individual TODO card displaying TODO details, completion status, edit, and delete buttons.

### TodoList
Container component that renders the list of filtered and searched TODOs.

---

## 🎯 Key Features Explained

### Optimistic UI Updates
TODOs are immediately added to the UI before the API confirms the request, providing instant feedback to users.

### Real-time Search
Search filters TODOs by title in real-time as you type, with case-insensitive matching.

### Filter Options
- **All** - Display all TODOs
- **Completed** - Show only completed TODOs
- **Pending** - Show only incomplete TODOs

---

## 🔧 Configuration Files

### vite.config.js
Vite configuration with React plugin and Tailwind CSS integration.

### eslint.config.js
ESLint configuration for code quality and consistency.

### tailwind.config.js
Tailwind CSS configuration (uses default theme from `@tailwindcss/vite`).

---

## 📱 Responsive Design

The application uses Tailwind CSS utility classes to ensure:
- ✅ Mobile-first responsive design
- ✅ Works on all screen sizes (mobile, tablet, desktop)
- ✅ Touch-friendly interface
- ✅ Smooth animations and transitions

---

## 🐛 Troubleshooting

### API Connection Error
- Ensure the backend server is running at `http://localhost:5000/api`
- Check the API endpoint in `src/api/api.js`
- Verify CORS is properly configured on the backend

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Dependencies Issues
Clear `node_modules` and reinstall:
```bash
rm -rf node_modules
npm install
```

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vite.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Axios Documentation](https://axios-http.com/)

---

**Last Updated**: April 2026
