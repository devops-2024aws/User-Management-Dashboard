// ============================================
// USER SERVICE
// ============================================
// This service handles all GraphQL operations related to users
// It acts as a bridge between the component and Apollo Client
// Services are singletons - there's only one instance throughout the app

import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
// Import GraphQL queries and mutations
import { GET_USERS } from '../graphql/users.query';
import {
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
} from '../graphql/users.mutation';

// @Injectable decorator makes this class a service available for dependency injection
// providedIn: 'root' means this service is a singleton available app-wide
@Injectable({ providedIn: 'root' })
export class UserService {
  // Constructor injects Apollo client for GraphQL operations
  // Apollo client handles all communication with the GraphQL server
  constructor(private apollo: Apollo) {}

  // Get all users from the backend
  // This method doesn't make direct HTTP calls - Apollo handles that
  // Returns: Observable of the GraphQL query result
  getUsers() {
    // watchQuery provides real-time updates whenever data changes
    // Subscribe to valueChanges to get the latest data automatically
    // watchQuery is better than query() because it updates when mutations occur
    return this.apollo.watchQuery<any>({
      query: GET_USERS, // GraphQL query to fetch all users
    }).valueChanges; // Return observable that emits whenever data changes
  }

  // Add a new user to the backend
  // Parameters: variables - object containing user data
  //   Required properties: firstName, lastName, email, role, isActive
  // Returns: Observable of the GraphQL mutation result
  addUser(variables: any) {
    // mutate() executes a GraphQL mutation on the server
    // Mutations modify data on the server
    return this.apollo.mutate({
      mutation: ADD_USER, // GraphQL mutation to add user
      variables, // Pass the user data as mutation variables
      // refetchQueries automatically runs these queries after the mutation succeeds
      // This refreshes the user list to show the new user immediately
      refetchQueries: [{ query: GET_USERS }],
    });
  }

  // Update an existing user in the backend
  // Parameters: variables - object containing updated user data
  //   Required: id property to identify which user to update
  //   Optional: firstName, lastName, email, role, isActive
  // Returns: Observable of the GraphQL mutation result
  updateUser(variables: any) {
    // mutate() executes a GraphQL mutation on the server
    // This mutation updates specific user fields
    return this.apollo.mutate({
      mutation: UPDATE_USER, // GraphQL mutation to update user
      variables, // Pass the updated user data as mutation variables
      // refetchQueries automatically runs these queries after the mutation succeeds
      // This refreshes the user list to show updated data
      refetchQueries: [{ query: GET_USERS }],
    });
  }

  // Delete a user from the backend
  // Parameters: id - the unique identifier of the user to delete
  // Returns: Observable of the GraphQL mutation result
  deleteUser(id: string) {
    // mutate() executes a GraphQL mutation on the server
    // This mutation removes a user from the database
    return this.apollo.mutate({
      mutation: DELETE_USER, // GraphQL mutation to delete user
      variables: { id }, // Pass the user ID as mutation variable
      // refetchQueries automatically runs these queries after the mutation succeeds
      // This refreshes the user list to remove the deleted user
      refetchQueries: [{ query: GET_USERS }],
    });
  }
}
