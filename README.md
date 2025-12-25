# User Management System

A full-stack application for managing users with a GraphQL backend and Angular frontend.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [Usage Guide](#usage-guide)
- [API Documentation](#api-documentation)
- [Troubleshooting](#troubleshooting)

## ✨ Features

- **View Users** - Display all users in a table format
- **Add Users** - Create new users with comprehensive validation
- **Edit Users** - Update existing user information in real-time
- **Delete Users** - Remove users from the system with confirmation
- **Real-time Updates** - Automatic UI refresh after operations
- **Form Validation** - Client-side validation for data integrity
- **Responsive Design** - Bootstrap-based responsive UI
- **Error Handling** - Clear error messages for failed operations

## 📦 Prerequisites

Before you start, ensure you have installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for version control)

To verify installations:
```bash
node --version
npm --version
```

## 📂 Project Structure

```
user-management-backend/
├── src/
│   ├── index.js              # Express server & Apollo GraphQL setup
│   ├── schema.js             # GraphQL type definitions and operations
│   ├── resolvers.js          # GraphQL query & mutation logic
│   ├── data.js               # Sample user data (in-memory storage)
│   └── package.json          # Backend dependencies
│
└── user-management-frontend/
    ├── src/
    │   ├── main.ts                        # Application entry point
    │   ├── index.html                     # Main HTML file with title
    │   ├── styles.css                     # Global styles
    │   └── app/
    │       ├── app.ts                     # Main component logic and state
    │       ├── app.html                   # Main component template
    │       ├── app.config.ts              # Apollo Client configuration
    │       ├── app.css                    # Component styles
    │       ├── services/
    │       │   └── user.service.ts        # User API service (GraphQL operations)
    │       └── graphql/
    │           ├── users.query.ts         # GraphQL queries (fetch operations)
    │           └── users.mutation.ts      # GraphQL mutations (create/update/delete)
    └── package.json                       # Frontend dependencies
```

## 🚀 Installation & Setup

### Step 1: Clone/Download the Project

```bash
# Navigate to your projects directory
cd user-management-backend
```

### Step 2: Install Backend Dependencies

```bash
# Install backend npm packages
npm install
```

### Step 3: Install Frontend Dependencies

```bash
# Navigate to frontend folder
cd user-management-frontend

# Install frontend npm packages
npm install

# Return to backend root directory
cd ..
```

## ▶️ Running the Application

### Start Backend Server (Terminal 1)

```bash
# Make sure you're in the backend root directory
cd user-management-backend

# Start the GraphQL server
node src/index.js
```

**Expected Output:**
```
🚀 GraphQL Server running at http://localhost:4000/graphql
```

### Start Frontend Development Server (Terminal 2)

```bash
# Navigate to frontend folder
cd user-management-backend/user-management-frontend

# Start Angular development server
npm start
```

**Expected Output:**
```
✔ Compiled successfully.
Local:   http://localhost:4200/
```

### Access the Application

Open your browser and navigate to:
```
http://localhost:4200/
```

You should see the User Management Dashboard with the initial two users (John Doe and Jane Smith).

## 📖 Usage Guide

### Adding a New User

1. Fill in the "Add User" form with:
   - **First Name** (minimum 4 characters, e.g., "John")
   - **Last Name** (minimum 4 characters, e.g., "Smith")
   - **Email** (valid email format, e.g., "john@example.com")
   - **Role** (minimum 2 characters, e.g., "Admin")
   - **Active** (checkbox - check to mark user as active)

2. Click the **"Add User"** button
3. If validation passes:
   - The form clears automatically
   - The new user appears in the list
   - A success message is shown (if configured)
4. If validation fails:
   - An error message appears at the top of the page
   - The form data is preserved for correction

### Editing a User

1. Click the **"Edit"** button on any user row
2. The row transforms into editable input fields
3. Update the fields as needed
4. Click **"Save"** to confirm changes or **"Cancel"** to discard
5. The table updates automatically with the changes

### Deleting a User

1. Click the **"Delete"** button on the user row
2. A confirmation dialog appears asking "Are you sure you want to delete this user?"
3. Click **"OK"** to confirm deletion or **"Cancel"** to abort
4. The user is removed from the list immediately

## 🔌 API Documentation

### Base URL

```
http://localhost:4000/graphql
```

You can test queries and mutations at: `http://localhost:4000/graphql`

### Query: Get All Users

Fetch all users with their complete information.

```graphql
query GetUsers {
  getUsers {
    id
    firstName
    lastName
    email
    role
    isActive
  }
}
```

**Response Example:**
```json
{
  "data": {
    "getUsers": [
      {
        "id": "1",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john@example.com",
        "role": "Admin",
        "isActive": true
      }
    ]
  }
}
```

### Mutation: Add User

Create a new user in the system.

```graphql
mutation AddUser(
  $firstName: String!
  $lastName: String!
  $email: String!
  $role: String!
  $isActive: Boolean!
) {
  addUser(
    firstName: $firstName
    lastName: $lastName
    email: $email
    role: $role
    isActive: $isActive
  ) {
    id
    firstName
    lastName
    email
    role
    isActive
  }
}
```

**Variables:**
```json
{
  "firstName": "Robert",
  "lastName": "Johnson",
  "email": "robert@example.com",
  "role": "Manager",
  "isActive": true
}
```

### Mutation: Update User

Update an existing user's information.

```graphql
mutation UpdateUser(
  $id: ID!
  $firstName: String
  $lastName: String
  $email: String
  $role: String
  $isActive: Boolean
) {
  updateUser(
    id: $id
    firstName: $firstName
    lastName: $lastName
    email: $email
    role: $role
    isActive: $isActive
  ) {
    id
    firstName
    lastName
    email
    role
    isActive
  }
}
```

**Variables:**
```json
{
  "id": "1",
  "role": "Senior Admin"
}
```

### Mutation: Delete User

Remove a user from the system.

```graphql
mutation DeleteUser($id: ID!) {
  deleteUser(id: $id)
}
```

**Variables:**
```json
{
  "id": "1"
}
```

**Response:**
```json
{
  "data": {
    "deleteUser": true
  }
}
```

## ❓ Troubleshooting

### Issue: "Cannot GET /" or blank page

**Solution:**
- Ensure Angular frontend is running on port 4200
- Check browser console for errors (F12 → Console tab)
- Clear browser cache and refresh

### Issue: GraphQL Connection Error

**Solution:**
- Verify backend server is running on port 4000
- Test `http://localhost:4000/graphql` is accessible in browser
- Check [app.config.ts](user-management-frontend/src/app/app.config.ts) for correct URI
- Verify CORS is enabled in [index.js](src/index.js)

### Issue: Form validation errors

**Solution:**
- First Name & Last Name: minimum 4 characters each
- Email: must be in format like `name@domain.com`
- Role: minimum 2 characters
- All fields are required

### Issue: "Error adding user" message

**Solution:**
1. Ensure backend server is running
2. Open browser Developer Tools (F12)
3. Check Network tab for GraphQL requests
4. Check Console tab for detailed error messages
5. Verify data meets validation requirements

### Issue: CORS errors in console

**Solution:**
- CORS is already enabled in backend
- If issues persist, check that both servers are running
- Clear browser cache
- Try accessing from incognito/private window

### Issue: Port already in use

**Solution:**
```bash
# Kill process on port 4000 (backend)
netstat -ano | findstr :4000
taskkill /PID <PID> /F

# Kill process on port 4200 (frontend)
netstat -ano | findstr :4200
taskkill /PID <PID> /F
```

## 📝 Important Notes

- **Data Storage**: All data is stored in memory (resets when server restarts)
- **Default Data**: Two sample users included (John Doe and Jane Smith)
- **For Production**: Integrate a real database (MongoDB, PostgreSQL, MySQL, etc.)
- **Authentication**: Current version has no authentication - add for production use
- **Validation**: Client-side validation only - add server-side validation for security

## 🔄 Data Flow

1. **User Action** (Frontend) → User clicks "Add User"
2. **Validation** (Frontend) → Check form values meet requirements
3. **GraphQL Mutation** (Frontend → Backend) → Send validated data to GraphQL server
4. **Resolver Logic** (Backend) → Process mutation and update data
5. **Response** (Backend → Frontend) → Send back created/updated user
6. **UI Update** (Frontend) → Update component state and refresh display
7. **Error Handling** → Display error messages if something goes wrong

## 🚀 Next Steps

To enhance this application:

1. **Add Database**: Replace in-memory storage with MongoDB or PostgreSQL
2. **Add Authentication**: Implement login and user roles
3. **Add Authorization**: Restrict operations based on user roles
4. **Improve Validation**: Add server-side validation
5. **Add Tests**: Create unit and integration tests
6. **Deploy**: Deploy to cloud platforms (Heroku, AWS, Azure, etc.)


