// ============================================
// GRAPHQL RESOLVERS
// ============================================
// This file contains the business logic for handling GraphQL queries and mutations
// Resolvers are functions that return data for each field defined in the schema

// Import the users array from data.js
// users is an in-memory array that acts as our database
const { users } = require("./data");

// Define resolvers object containing Query and Mutation handlers
// Each resolver function corresponds to a field in the schema
const resolvers = {
  // Query resolver - handles all read-only operations
  Query: {
    // Get all users from the users array
    // Returns: Array of all users currently in the system
    // This is called when client executes: query GetUsers { getUsers { ... } }
    getUsers: () => users,
  },

  // Mutation resolver - handles all write operations (create, update, delete)
  Mutation: {
    // Add a new user to the users array
    // Parameters:
    //   firstName: User's first name
    //   lastName: User's last name
    //   email: User's email address
    //   role: User's role/position
    //   isActive: Whether user is active
    addUser: (_, { firstName, lastName, email, role, isActive }) => {
      // Create a new user object with a unique ID
      // ID is generated based on current array length + 1
      // In production, use a proper ID generator (UUID, database auto-increment, etc.)
      const newUser = {
        id: String(users.length + 1), // Convert number to string for consistency
        firstName,
        lastName,
        email,
        role,
        isActive,
      };

      // Add the new user object to the users array
      // push() modifies the array in-place and returns new length
      users.push(newUser);
      
      // Return the newly created user object
      // This allows client to get the new user's data including the generated ID
      return newUser;
    },

    // Update an existing user by ID
    // Parameters:
    //   id: The ID of the user to update (required)
    //   firstName, lastName, email, role, isActive: Fields to update (optional)
    updateUser: (_, { id, firstName, lastName, email, role, isActive }) => {
      // Find the user with the matching ID
      // find() returns the first element that matches the condition
      // Returns undefined if no user found
      const user = users.find((u) => u.id === id);
      
      // If user not found, return null
      // This signals to Apollo that the requested resource doesn't exist
      if (!user) return null;

      // Update only the fields that are provided (not undefined)
      // This allows partial updates where only some fields are changed
      // The !== undefined check ensures we don't overwrite with falsy values
      if (firstName !== undefined) user.firstName = firstName;
      if (lastName !== undefined) user.lastName = lastName;
      if (email !== undefined) user.email = email;
      if (role !== undefined) user.role = role;
      if (isActive !== undefined) user.isActive = isActive;

      // Return the updated user object
      // Client receives the full updated user data
      return user;
    },

    // Delete a user by ID
    // Parameters:
    //   id: The ID of the user to delete (required)
    // Returns: Boolean (true if deleted, false if user not found)
    deleteUser: (_, { id }) => {
      // Find the index of the user with the matching ID
      // findIndex() returns the index of first matching element
      // Returns -1 if no user found
      const index = users.findIndex((u) => u.id === id);
      
      // If user not found, return false
      // This indicates to client that deletion failed
      if (index === -1) return false;

      // Remove the user from the array using splice()
      // splice(index, 1) removes 1 element at the specified index
      // This modifies the original array
      users.splice(index, 1);
      
      // Return true to indicate successful deletion
      // Client knows the operation completed successfully
      return true;
    },
  },
};

// Export the resolvers for use in index.js
// Apollo Server uses these functions to handle incoming requests
module.exports = resolvers;
