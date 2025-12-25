// ============================================
// SAMPLE USER DATA
// ============================================
// This file contains initial user data for the application
// In a real application, this would be fetched from a database (MongoDB, PostgreSQL, etc.)
// Current implementation uses in-memory storage (data resets when server restarts)

// Array of user objects - serves as the application database
// Each user has: id, firstName, lastName, email, role, isActive
const users = [
  // User 1: John Doe - Admin user
  {
    id: "1",              // Unique identifier
    firstName: "John",    // User's first name
    lastName: "Doe",      // User's last name
    email: "john@example.com",  // Email address
    role: "Admin",        // User's role (Admin, User, Manager, etc.)
    isActive: true        // User is active/enabled
  },
  // User 2: Jane Smith - Regular user
  {
    id: "2",              // Unique identifier
    firstName: "Jane",    // User's first name
    lastName: "Smith",    // User's last name
    email: "jane@example.com",  // Email address
    role: "User",         // User's role
    isActive: true        // User is active/enabled
  }
];

// Export the users array for use in resolvers.js
// This allows resolvers to access and modify the user data
module.exports = { users };
