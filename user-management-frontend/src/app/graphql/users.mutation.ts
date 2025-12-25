// ============================================
// GRAPHQL MUTATIONS
// ============================================
// This file defines GraphQL mutations for modifying data in the backend
// Mutations are write operations that create, update, or delete data
// Each mutation specifies the input data and what data to return

import { gql } from 'apollo-angular';

// Define the ADD_USER mutation
// This mutation creates a new user in the database
// It requires all user fields as input parameters
export const ADD_USER = gql`
  # Mutation name: AddUser
  # This mutation adds a new user to the database
  # Variables: these are the input parameters for the mutation
  mutation AddUser(
    $firstName: String!      # User's first name (required - cannot be null)
    $lastName: String!       # User's last name (required - cannot be null)
    $email: String!          # User's email (required - cannot be null)
    $role: String!           # User's role (required - cannot be null)
    $isActive: Boolean!      # User's active status (required - cannot be null)
  ) {
    # Call the addUser mutation on the backend with the provided variables
    addUser(
      firstName: $firstName    # Pass first name to the resolver
      lastName: $lastName      # Pass last name to the resolver
      email: $email            # Pass email to the resolver
      role: $role              # Pass role to the resolver
      isActive: $isActive      # Pass active status to the resolver
    ) {
      # Return these fields after user is created
      id                       # Return the newly generated user ID
      firstName
      lastName
      email
      role
      isActive
    }
  }
`;

// Define the UPDATE_USER mutation
// This mutation updates an existing user's information
// The user ID is required, but other fields are optional
export const UPDATE_USER = gql`
  # Mutation name: UpdateUser
  # This mutation updates specific fields of an existing user
  # Variables: input parameters for the mutation
  mutation UpdateUser(
    $id: ID!                 # User ID to update (required - cannot be null)
    $firstName: String       # User's first name (optional - can be null)
    $lastName: String        # User's last name (optional - can be null)
    $email: String           # User's email (optional - can be null)
    $role: String            # User's role (optional - can be null)
    $isActive: Boolean       # User's active status (optional - can be null)
  ) {
    # Call the updateUser mutation on the backend with provided variables
    updateUser(
      id: $id                  # Pass user ID to identify which user to update
      firstName: $firstName    # Pass new first name (or null if not updating)
      lastName: $lastName      # Pass new last name (or null if not updating)
      email: $email            # Pass new email (or null if not updating)
      role: $role              # Pass new role (or null if not updating)
      isActive: $isActive      # Pass new status (or null if not updating)
    ) {
      # Return these fields after user is updated
      id                       # Return the user ID that was updated
      firstName
      lastName
      email
      role
      isActive
    }
  }
`;

// Define the DELETE_USER mutation
// This mutation deletes a user from the database
// Only the user ID is required
export const DELETE_USER = gql`
  # Mutation name: DeleteUser
  # This mutation removes a user from the database permanently
  # Variables: input parameters for the mutation
  mutation DeleteUser($id: ID!) {  # User ID to delete (required - cannot be null)
    # Call the deleteUser mutation on the backend
    # Returns true if deletion was successful, false if user not found
    deleteUser(id: $id)
  }
`;

