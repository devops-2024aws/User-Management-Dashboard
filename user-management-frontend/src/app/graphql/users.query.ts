// ============================================
// GRAPHQL QUERIES
// ============================================
// This file defines GraphQL queries for fetching data from the backend
// Queries are read-only operations that don't modify data
// They specify exactly which fields we want from the server

import { gql } from 'apollo-angular';

// Define the GET_USERS query
// This query fetches all users from the backend
// It specifies all the user fields we want to receive
export const GET_USERS = gql`
  # Query name: GetUsers
  # This query retrieves all users from the database
  query GetUsers {
    # Call the getUsers resolver on the backend
    getUsers {
      id              # User's unique identifier (assigned by server)
      firstName       # User's first name
      lastName        # User's last name
      email           # User's email address
      role            # User's role/position in organization
      isActive        # User's active status (true = active, false = inactive)
    }
  }
`;
