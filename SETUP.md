# Setup & GitHub Guide - User Management Dashboard

Complete guide for setup, development, and GitHub integration.

---

## 📋 Table of Contents

1. [Quick Start (5 minutes)](#quick-start)
2. [Project Overview](#project-overview)
3. [GitHub Setup](#github-setup)
4. [Development Guide](#development-guide)
5. [Troubleshooting](#troubleshooting)

---

## Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn
- Git installed

### Steps

**1. Install Dependencies**
```bash
# Backend
cd user-management-backend
npm install

# Frontend (in another terminal)
cd user-management-frontend
npm install
```

**2. Start Backend Server**
```bash
cd user-management-backend
npm start
# Server runs on http://localhost:4000
# GraphQL endpoint: http://localhost:4000/graphql
```

**3. Start Frontend App (in new terminal)**
```bash
cd user-management-frontend
npm start
# App runs on http://localhost:4200
```

**4. Open Browser**
- Visit `http://localhost:4200`
- Add, edit, delete users
- Changes are real-time!

---

## Project Overview

### Technology Stack

| Component | Technology |
|-----------|-----------|
| **Backend** | Node.js + Express + Apollo Server |
| **Frontend** | Angular 20+ + Apollo Client + Bootstrap 5 |
| **API** | GraphQL |
| **Database** | In-memory (no persistence - ready for MongoDB/PostgreSQL) |
| **Port** | Backend: 4000, Frontend: 4200 |

### Project Structure

```
user-management-backend/
├── src/
│   ├── index.js        # Express + Apollo Server setup
│   ├── schema.js       # GraphQL type definitions
│   ├── resolvers.js    # GraphQL resolvers (business logic)
│   ├── data.js         # Sample data
│   └── package.json
└── user-management-frontend/
    ├── src/
    │   ├── app/
    │   │   ├── app.ts              # Main component
    │   │   ├── app.html            # Template
    │   │   ├── app.config.ts       # Apollo config
    │   │   ├── services/
    │   │   │   └── user.service.ts # GraphQL service
    │   │   └── graphql/
    │   │       ├── users.query.ts   # GraphQL queries
    │   │       └── users.mutation.ts # GraphQL mutations
    │   ├── index.html
    │   └── main.ts
    ├── angular.json
    ├── package.json
    └── tsconfig.json
```

### Key Features

✅ Create Users (with validation)
✅ Read/View Users
✅ Edit Users (inline editing)
✅ Delete Users (with confirmation)
✅ Form Validation (4-char names, email regex)
✅ Real-time UI Updates
✅ GraphQL API
✅ Bootstrap 5 Responsive Design

---

## GitHub Setup

### Step 1: Create Repository on GitHub

1. Go to https://github.com
2. Click **"+"** → **"New repository"**
3. Enter details:
   - **Repository name:** User-Management-Dashboard
   - **Description:** Full-stack User Management with GraphQL and Angular
   - **Visibility:** Public (recommended)
4. Click **"Create repository"**

### Step 2: Push Code to GitHub

**In command prompt, navigate to project:**
```bash
cd D:\Angular-GQL-Proj\user-management-backend
```

**Initialize git:**
```bash
git init
git config user.name "Your Name"
git config user.email "your.email@gmail.com"
```

**Stage and commit files:**
```bash
git add .
git commit -m "Initial commit: Full-stack User Management System"
```

**Add GitHub remote (replace YOUR-USERNAME):**
```bash
git remote add origin git@github.com:YOUR-USERNAME/User-Management-Dashboard.git
```

**Push to GitHub:**
```bash
git branch -M main
git push -u origin main
```

### Step 3: Verify on GitHub

1. Refresh your GitHub repository page
2. You should see all files and folders uploaded
3. Share the repository URL with others

**Your repo URL:** `https://github.com/YOUR-USERNAME/User-Management-Dashboard`

---

## Development Guide

### Working with Backend

**GraphQL Schema** (`src/schema.js`)
- Defines User type with fields: id, firstName, lastName, email, role, isActive
- Query: getUsers (returns all users)
- Mutations: addUser, updateUser, deleteUser

**Resolvers** (`src/resolvers.js`)
- getUsers: Returns all users from data.js
- addUser: Creates new user, auto-increments ID
- updateUser: Updates specific user fields
- deleteUser: Removes user by ID

**Example: Add New Field**
1. Update schema in `src/schema.js`
2. Update resolver in `src/resolvers.js`
3. Update data in `src/data.js`
4. Update frontend GraphQL query/mutation

### Working with Frontend

**Main Component** (`app.ts`)
- Loads users on init
- Handles add/edit/delete operations
- Manages form validation

**Validation Rules**
- firstName/lastName: Minimum 4 characters
- email: Must contain @ and domain (e.g., user@example.com)
- role: Minimum 2 characters

**Service** (`services/user.service.ts`)
- Manages all GraphQL communication
- getUsers(): Watches user list
- addUser(): Creates new user
- updateUser(): Edits user
- deleteUser(): Removes user

**Adding New Feature**
1. Update schema (backend)
2. Update resolver (backend)
3. Update GraphQL query/mutation (frontend)
4. Update component logic (frontend)
5. Update template (app.html)

---

## Running Production Build

### Backend
```bash
# Backend is already production-ready
npm start
```

### Frontend
```bash
# Build Angular app
ng build --prod

# Deploy dist/ folder to hosting service
```

---

## Database Integration

Currently uses in-memory storage (resets on server restart).

**To Add Database (MongoDB Example):**

1. Install MongoDB driver
2. Update `data.js` to use MongoDB client
3. Modify resolvers to query/update database
4. Update connection string in config

---

## Troubleshooting

### "Error adding user"
- ✅ Backend running on localhost:4000?
- ✅ GraphQL endpoint accessible?
- ✅ Check form validation (4-char min for names)
- Solution: Run `npm start` in backend folder

### "Frontend won't connect"
- ✅ Backend running first (port 4000)?
- ✅ Check `app.config.ts` for correct GraphQL URL
- ✅ Clear browser cache (Ctrl+Shift+Delete)
- Solution: Verify http://localhost:4000/graphql is accessible

### "Git push fails"
- ✅ SSH key added to GitHub?
- ✅ Repository created on GitHub?
- ✅ Repository is public?
- Solution: Use HTTPS or SSH correctly

### Port Already in Use
```bash
# Find process using port 4000
netstat -ano | findstr :4000

# Kill process (replace PID)
taskkill /PID <PID> /F
```

---

## File Descriptions

| File | Purpose |
|------|---------|
| **README.md** | Main project documentation |
| **SETUP.md** | This setup and development guide |
| **QUICKSTART.md** | 4-step quick start guide |
| **package.json** | Backend dependencies |
| **.gitignore** | Git configuration (excludes node_modules) |

---

## Next Steps

1. ✅ Clone the repository
2. ✅ Run `npm install` in both folders
3. ✅ Start backend with `npm start`
4. ✅ Start frontend with `ng serve` or `npm start`
5. ✅ Open http://localhost:4200
6. ✅ Test CRUD operations
7. ✅ Deploy to production

---

## Support & Questions

- Check the code comments (all files are well-documented)
- Review README.md for API details
- Check QUICKSTART.md for quick setup
- Test GraphQL endpoint at http://localhost:4000/graphql

---

## License

Open Source - MIT License

---

*Last Updated: December 25, 2025*
*Status: ✅ Production Ready*
