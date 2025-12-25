// ============================================
// GRAPHQL SCHEMA DEFINITION
// ============================================
// This file defines the structure of data (types) and available operations
// It serves as the contract between frontend and backend

const { gql } = require("apollo-server-express");

// GraphQL type definitions using template literals (gql)
// The gql function converts the string into GraphQL AST (Abstract Syntax Tree)
const typeDefs = gql`
  # User type definition - describes the structure of a User object
  # All fields are required (!) meaning they cannot be null
  type User {
    id: ID!                    # Unique identifier for the user
    firstName: String!         # User's first name (required)
    lastName: String!          # User's last name (required)
    email: String!             # User's email address (required)
    role: String!              # User's role/position in organization (required)
    isActive: Boolean!         # User's active status - true=active, false=inactive (required)
  }

  # Query type - defines all read-only operations (fetching data)
  # Queries do not modify data, only retrieve it
  type Query {
    # Get all users from the database
    # Returns: Array of User objects (can be empty)
    getUsers: [User]
  }

  # Mutation type - defines all write operations (creating, updating, deleting data)
  # Each mutation modifies the database and returns the modified data
  type Mutation {
    # Add a new user
    # Parameters: all fields are required (marked with !)
    #   firstName: User's first name
    #   lastName: User's last name
    #   email: User's email address
    #   role: User's role/position
    #   isActive: Whether user is active
    # Returns: The newly created User object
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      role: String!
      isActive: Boolean!
    ): User

    # Update an existing user by ID
    # Parameters: id is required, other fields are optional
    #   id: The ID of user to update (required)
    #   firstName, lastName, email, role, isActive: Fields to update (optional)
    # Returns: The updated User object
    # Note: Optional fields allow partial updates (only change what you need to)
    updateUser(
      id: ID!
      firstName: String
      lastName: String
      email: String
      role: String
      isActive: Boolean
    ): User

    # Delete a user by ID
    # Parameters: id is the user ID to delete (required)
    # Returns: Boolean (true if deleted successfully, false if user not found)
    deleteUser(id: ID!): Boolean
  }
`;

// Export the type definitions for use in index.js
// These definitions tell Apollo what queries and mutations are available
module.exports = typeDefs;
